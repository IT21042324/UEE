import React, { useState, useEffect, createContext } from "react";
import { Alert, StyleSheet, View } from "react-native";
import {
  addDurationsToMediaList,
  mediaList,
} from "../assets/audioFiles/audioIndex";
import { DataProvider } from "recyclerlistview";
import * as MediaLibrary from "expo-media-library";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { storeAudioForNextOpening } from "../helper/audioHelperWithAsyncStorage";
import { Audio } from "expo-av";
import { playNextAudio } from "../helper/audioController";

export const AudioContext = createContext({
  audioFiles: [],
  playList: [],
  addToPlayList: null,
  permissionError: false,
  dataProvider: new DataProvider((r1, r2) => r1 !== r2),
  playBackObj: null,
  soundObj: null,
  currentlyPlayingAudio: {},
  isPlaying: false,
  isPlayListRunning: false,
  activePlayList: [],
  currentAudioIndex: null,
  playbackPosition: null,
  playbackDuration: null,
  totalAudioCount: 0,
  setPlayBackObj: () => {},
  setPlayList: () => {},
  setSoundObj: () => {},
  setCurrentlyPlayingAudio: () => {},
  setIsPlaying: () => {},
  setCurrentAudioIndex: () => {},
  setIsPlayListRunning: () => {},
  setPlaybackPosition: () => {},
  setPlaybackDuration: () => {},
  setActivePlayList: () => {},
  setTotalAudioCount: () => {},
  loadPreviousAudio: () => {},
  setAddToPlayList: () => {},
});

export const AudioProvider = ({ children }) => {
  const [mediaListWithDuration, setMediaListWithDuration] = useState(mediaList);

  const [audioFiles, setAudioFiles] = useState([]);
  const [dataProvider, setDataProvider] = useState(
    new DataProvider((r1, r2) => r1 !== r2)
  );
  const [permissionError, setPermissionError] = useState(false);

  const [playBackObj, setPlayBackObj] = useState(null);
  const [soundObj, setSoundObj] = useState(null);
  const [playList, setPlayList] = useState([]); // Changed this line [
  const [currentlyPlayingAudio, setCurrentlyPlayingAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudioIndex, setCurrentAudioIndex] = useState(null);
  const [playbackPosition, setPlaybackPosition] = useState(null);
  const [playbackDuration, setPlaybackDuration] = useState(null);
  const [activePlayList, setActivePlayList] = useState([]);
  const [isPlayListRunning, setIsPlayListRunning] = useState(false);
  const [totalAudioCount, setTotalAudioCount] = useState(0);
  const [addToPlayList, setAddToPlayList] = useState(null);

  const permissionAlert = () => {
    Alert.alert("Permission Required", "This app needs to read audio files!", [
      {
        text: "I am ready",
        onPress: () => getPermission(),
      },
      {
        text: "Cancel",
        onPress: () => permissionAlert(),
      },
    ]);
  };

  const getAudioFiles = async () => {
    const media = await MediaLibrary.getAssetsAsync({
      mediaType: "audio",
    });

    media.assets = mediaListWithDuration;
    setTotalAudioCount(mediaListWithDuration.length);

    setDataProvider(
      dataProvider.cloneWithRows([...audioFiles, ...media.assets])
    );
    setAudioFiles([...audioFiles, ...media.assets]);
  };

  const loadPreviousAudio = async () => {
    let previousAudio = await AsyncStorage.getItem("previousAudio");
    let currentlyPlayingAudio;
    let currentAudioIndex;

    if (previousAudio === null) {
      currentlyPlayingAudio = audioFiles[0]; // Changed this line
      currentAudioIndex = 0;
    } else {
      previousAudio = JSON.parse(previousAudio);
      currentlyPlayingAudio = previousAudio.audio;
      currentAudioIndex = previousAudio.index;
    }

    setCurrentlyPlayingAudio(currentlyPlayingAudio);
    setCurrentAudioIndex(currentAudioIndex);
  };

  const getPermission = async () => {
    const permission = await MediaLibrary.getPermissionsAsync();

    if (permission.granted) {
      getAudioFiles();
    }
    if (!permission.canAskAgain && !permission.granted) {
      setPermissionError(true);
    }

    if (
      !permission.granted &&
      (permission.canAskAgain || !permission.canAskAgain)
    ) {
      const { status, canAskAgain } =
        await MediaLibrary.requestPermissionsAsync();

      if (status === "denied" && canAskAgain) {
        permissionAlert();
      }

      if (status === "granted") {
        getAudioFiles();
      }

      if (status === "denied" && !canAskAgain) {
        setPermissionError(true);
      }
    }
  };

  const onPlaybackStatusUpdate = async (playbackStatus) => {
    if (playbackStatus?.isLoaded && playbackStatus.isPlaying) {
      setPlaybackPosition(playbackStatus.positionMillis);
      setPlaybackDuration(playbackStatus.durationMillis);
    }

    if (playbackStatus?.isLoaded && !playbackStatus.isPlaying) {
      await storeAudioForNextOpening(
        currentlyPlayingAudio,
        currentAudioIndex,
        playbackStatus.positionMillis
      );
    }

    if (playbackStatus.didJustFinish) {
      if (isPlayListRunning) {
        let audio;
        const indexOnPlayList = activePlayList.audios.findIndex(
          ({ id }) => id === currentlyPlayingAudio.id
        );
        const nextIndex = indexOnPlayList + 1;
        audio = activePlayList.audios[nextIndex];

        if (!audio) audio = activePlayList.audios[0];

        const indexOnAllList = audioFiles.findIndex(
          ({ id }) => id === audio.id
        );

        const status = await playNextAudio(playBackObj, audio.url);

        setSoundObj(status);
        setIsPlaying(true);
        setCurrentlyPlayingAudio(audio);
        setCurrentAudioIndex(indexOnAllList);
      }

      const nextAudioIndex = currentAudioIndex + 1;
      if (nextAudioIndex >= totalAudioCount) {
        playBackObj.unloadAsync();

        setSoundObj(null);
        setIsPlaying(false);
        setCurrentAudioIndex(0);
        setCurrentlyPlayingAudio(audioFiles[0]);
        setPlaybackPosition(null);
        setPlaybackDuration(null);

        return await storeAudioForNextOpening(audioFiles[0], 0);
      }
      // otherwise we want to select the next audio
      const audio = audioFiles[nextAudioIndex];
      const status = await playNextAudio(playBackObj, audio.url);

      setSoundObj(status);
      setCurrentlyPlayingAudio(audio);
      setIsPlaying(true);
      setCurrentAudioIndex(nextAudioIndex);

      await storeAudioForNextOpening(audio, nextAudioIndex);
    }
  };

  useEffect(() => {
    getPermission();

    if (playBackObj === null) {
      setPlayBackObj(new Audio.Sound());
    }

    const loadDurationForAudioTracks = async () => {
      const mediaListNew = await addDurationsToMediaList(mediaList);
      setMediaListWithDuration(mediaListNew);
    };
    loadDurationForAudioTracks();
  }, []);

  if (permissionError) {
    return (
      <View style={styles.container}>
        <Text style={styles.looksLikeText}>
          It looks like you haven't accept the permission.
        </Text>
      </View>
    );
  }

  return (
    <AudioContext.Provider
      value={{
        audioFiles,
        dataProvider,
        playBackObj,
        soundObj,
        currentlyPlayingAudio,
        isPlaying,
        currentAudioIndex,
        totalAudioCount,
        addToPlayList,
        playList,
        setPlayList,
        loadPreviousAudio,
        setPlayBackObj,
        setSoundObj,
        setCurrentlyPlayingAudio,
        setIsPlaying,
        setCurrentAudioIndex,
        playbackDuration,
        addDurationsToMediaList,
        setMediaListWithDuration,
        setPlaybackDuration,
        activePlayList,
        setActivePlayList,
        isPlayListRunning,
        setIsPlayListRunning,
        setTotalAudioCount,
        playbackPosition,
        setPlaybackPosition,
        onPlaybackStatusUpdate,
        setAddToPlayList,
        getPermission,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  looksLikeText: {
    fontSize: 25,
    textAlign: "center",
    color: "red",
  },
});

export default AudioProvider;
