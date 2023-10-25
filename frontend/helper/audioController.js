export const playAudio = async (playbackObj, url) => {
  try {
    return await playbackObj.loadAsync(url, {
      shouldPlay: true,
    });
  } catch (error) {
    console.log("error inside play helper method", error.message);
  }
};

export const pauseAudio = async (playbackObj) => {
  try {
    return await playbackObj.setStatusAsync({ shouldPlay: false });
  } catch (error) {
    console.log("error inside pause helper method", error.message);
  }
};

export const resumeAudio = async (playbackObj) => {
  try {
    return await playbackObj.playAsync();
  } catch (error) {
    console.log("error inside resume helper method", error.message);
  }
};

export const playNextAudio = async (playbackObj, url) => {
  try {
    await playbackObj.stopAsync();
    await playbackObj.unloadAsync();
    return await playAudio(playbackObj, url);
  } catch (error) {
    console.log("error inside playNextAudio helper method", error.message);
  }
};
