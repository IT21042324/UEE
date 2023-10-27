import { storeAudioForNextOpening } from "./audioHelperWithAsyncStorage";

export const playAudio = async (playBackObj, url, lastPosition) => {
  try {
    if (!lastPosition) {
      console.log("first", playBackObj);

      return await playBackObj.loadAsync(url, {
        shouldPlay: true,
        progressUpdateIntervalMillis: 1000,
      });
    }

    // but if there is lastPosition then we will play audio from the lastPosition

    console.log("after", playBackObj);

    await playBackObj.loadAsync(url, {
      shouldPlay: true,
    });

    return await playBackObj.playFromPositionAsync(lastPosition);
  } catch (error) {
    console.log("error inside play helper method", error.message);
  }
};

export const pauseAudio = async (playBackObj) => {
  try {
    return await playBackObj.setStatusAsync({ shouldPlay: false });
  } catch (error) {
    console.log("error inside pause helper method", error.message);
  }
};

export const resumeAudio = async (playBackObj) => {
  try {
    return await playBackObj.playAsync();
  } catch (error) {
    console.log("error inside resume helper method", error.message);
  }
};

export const playNextAudio = async (playBackObj, url) => {
  try {
    await playBackObj.stopAsync();
    await playBackObj.unloadAsync();
    return await playAudio(playBackObj, url);
  } catch (error) {
    console.log("error inside playNextAudio helper method", error.message);
  }
};

export const selectAudio = async (audio, context, playListInfo = {}) => {
  const {
    soundObj,
    playBackObj,
    currentlyPlayingAudio,
    audioFiles,
    onPlaybackStatusUpdate,
    setSoundObj,
    setCurrentlyPlayingAudio,
    setIsPlaying,
    setCurrentAudioIndex,
    setActivePlayList,
    setIsPlayListRunning,
    setPlaybackPosition,
  } = context;
  try {
    // activePlayList: playList,
    // isPlayListRunning: true,

    // playing audio for the first time.

    if (soundObj === null) {
      const status = await playAudio(
        playBackObj,
        audio.url,
        audio.lastposition
      );
      const index = audioFiles.findIndex(({ id }) => id === audio.id);

      setCurrentlyPlayingAudio(audio);
      setSoundObj(status);
      setIsPlaying(true);
      setCurrentAudioIndex(index);
      setIsPlayListRunning(false);
      setActivePlayList([]);

      if (playListInfo?.activePlayList) {
        setActivePlayList(playListInfo.activePlayList);
      }
      if (playListInfo?.isPlayListRunning) {
        setIsPlayListRunning(true);
      }

      playBackObj.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
      return storeAudioForNextOpening(audio, index);
    }

    // pause audio
    if (
      soundObj?.isLoaded &&
      soundObj?.isPlaying &&
      currentlyPlayingAudio.id === audio.id
    ) {
      const status = await pauseAudio(playBackObj);

      setSoundObj(status);
      setIsPlaying(false);
      setPlaybackPosition(status.positionMillis);
    }

    // resume audio
    if (
      soundObj?.isLoaded &&
      !soundObj.isPlaying &&
      currentlyPlayingAudio.id === audio.id
    ) {
      const status = await resumeAudio(playBackObj);
      setSoundObj(status);
      setIsPlaying(true);
    }

    // select another audio
    if (soundObj?.isLoaded && currentlyPlayingAudio.id !== audio.id) {
      const status = await playNextAudio(playBackObj, audio.url);
      const index = audioFiles.findIndex(({ id }) => id === audio.id);

      setCurrentlyPlayingAudio(audio);
      setSoundObj(status);
      setIsPlaying(true);
      setCurrentAudioIndex(index);
      setIsPlayListRunning(false);
      setActivePlayList([]);

      return storeAudioForNextOpening(audio, index);
    }
  } catch (error) {
    console.log("error inside select audio method.", error.message);
  }
};

const selectAudioFromPlayList = async (context, select) => {
  const {
    currentlyPlayingAudio,
    audioFiles,
    playBackObj,
    setSoundObj,
    setCurrentlyPlayingAudio,
    setIsPlaying,
    setCurrentAudioIndex,
    activePlayList,
  } = context;
  let audio;
  let defaultIndex;
  let nextIndex;

  const indexOnPlayList = activePlayList.audios.findIndex(
    ({ id }) => id === currentlyPlayingAudio.id
  );

  if (select === "next") {
    nextIndex = indexOnPlayList + 1;
    defaultIndex = 0;
  }

  if (select === "previous") {
    nextIndex = indexOnPlayList - 1;
    defaultIndex = activePlayList.audios.length - 1;
  }
  audio = activePlayList.audios[nextIndex];

  if (!audio) audio = activePlayList.audios[defaultIndex];

  const indexOnAllList = audioFiles.findIndex(({ id }) => id === audio.id);

  const status = await playNextAudio(playBackObj, audio.url);

  setSoundObj(status);
  setIsPlaying(true);
  setCurrentlyPlayingAudio(audio);
  setCurrentAudioIndex(indexOnAllList);
};

export const changeAudio = async (context, select) => {
  const {
    playBackObj,
    currentAudioIndex,
    totalAudioCount,
    audioFiles,
    isPlayListRunning,
    onPlaybackStatusUpdate,
  } = context;

  if (isPlayListRunning) return selectAudioFromPlayList(context, select);

  try {
    const { isLoaded } = await playBackObj.getStatusAsync();
    const isLastAudio = currentAudioIndex + 1 === totalAudioCount;
    const isFirstAudio = currentAudioIndex <= 0;
    let audio;
    let index;
    let status;

    // for next
    if (select === "next") {
      audio = audioFiles[currentAudioIndex + 1];
      if (!isLoaded && !isLastAudio) {
        index = currentAudioIndex + 1;
        status = await playAudio(playBackObj, audio.url);
        playBackObj.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
      }

      if (isLoaded && !isLastAudio) {
        index = currentAudioIndex + 1;
        status = await playNextAudio(playBackObj, audio.url);
      }

      if (isLastAudio) {
        index = 0;
        audio = audioFiles[index];
        if (isLoaded) {
          status = await playNextAudio(playBackObj, audio.url);
        } else {
          status = await playAudio(playBackObj, audio.url);
        }
      }
    }

    // for previous
    if (select === "previous") {
      audio = audioFiles[currentAudioIndex - 1];
      if (!isLoaded && !isFirstAudio) {
        index = currentAudioIndex - 1;
        status = await playAudio(playBackObj, audio.url);
        playBackObj.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
      }

      if (isLoaded && !isFirstAudio) {
        index = currentAudioIndex - 1;
        status = await playNextAudio(playBackObj, audio.url);
      }

      if (isFirstAudio) {
        index = totalAudioCount - 1;
        audio = audioFiles[index];
        if (isLoaded) {
          status = await playNextAudio(playBackObj, audio.url);
        } else {
          status = await playAudio(playBackObj, audio.url);
        }
      }
    }

    context.setCurrentlyPlayingAudio(audio);
    context.setSoundObj(status);
    context.setIsPlaying(true);
    context.setCurrentAudioIndex(index);
    context.setPlaybackPosition(null);
    context.setPlaybackDuration(null);

    storeAudioForNextOpening(audio, index);
  } catch (error) {
    console.log("error inside change audio method.", error.message);
  }
};

export const moveAudio = async (context, value) => {
  const { soundObj, isPlaying, playBackObj, setSoundObj, setPlaybackPosition } =
    context;
  if (soundObj === null || !isPlaying) return;

  try {
    const status = await playBackObj.setPositionAsync(
      Math.floor(soundObj.durationMillis * value)
    );

    setSoundObj(status);
    setPlaybackPosition(status.positionMillis);

    await resumeAudio(playBackObj);
  } catch (error) {
    console.log("error inside onSlidingComplete callback", error);
  }
};
