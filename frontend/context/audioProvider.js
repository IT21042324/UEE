import React, { useState, useEffect, createContext } from "react";
import { Alert, StyleSheet, View } from "react-native";
import {
  addDurationsToMediaList,
  mediaList,
} from "../assets/audioFiles/audioIndex";
import { DataProvider } from "recyclerlistview";
import * as MediaLibrary from "expo-media-library";

export const AudioContext = createContext({
  audioFiles: [],
  dataProvider: new DataProvider((r1, r2) => r1 !== r2),
  playBackObj: null,
  soundObj: null,
  currentlyPlayingAudio: null,
  setPlayBackObj: () => {},
  setSoundObj: () => {},
  setCurrentlyPlayingAudio: () => {},
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
  const [currentlyPlayingAudio, setCurrentlyPlayingAudio] = useState(null);

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
    setDataProvider(
      dataProvider.cloneWithRows([...audioFiles, ...media.assets])
    );
    setAudioFiles([...audioFiles, ...media.assets]);
  };

  const getPermission = async () => {
    const permission = await MediaLibrary.getPermissionsAsync();

    console.log(permission);
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

  useEffect(() => {
    getPermission();

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
        setPlayBackObj,
        setSoundObj,
        setCurrentlyPlayingAudio,
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
