import React, { useEffect, useState } from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import { UseAudioContext } from "../../../useHook/useAudioContext";
import { AudioContext } from "../../../context/audioProvider";
import { LayoutProvider, RecyclerListView } from "recyclerlistview";
import { AudioListItem } from "../../../component/playlist/audioListItem";
import { OptionModal } from "../../../component/playlist/optionModal";
import { Audio } from "expo-av";
import { UseGeneralSpeechCombination } from "../../../useHook/mergeSpeechAndGeneralSettings";
import {
  pauseAudio,
  playAudio,
  playNextAudio,
  resumeAudio,
} from "../../../helper/audioController";

export const Audiolist = () => {
  const [optionModalVisible, setOptionModalVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState({});

  const { stopSpeaking } = UseGeneralSpeechCombination();

  useEffect(() => {
    stopSpeaking();
  });

  const layoutProvider = new LayoutProvider(
    (i) => "audio",
    (type, dim) => {
      switch (type) {
        case "audio":
          dim.width = Dimensions.get("window").width;
          dim.height = 70;
          break;
        default:
          dim.width = 0;
          dim.height = 0;
      }
    }
  );

  const {
    playBackObj,
    soundObj,
    currentlyPlayingAudio,
    currentAudioIndex,
    audioFiles,
    setPlayBackObj,
    setSoundObj,
    setCurrentlyPlayingAudio,
    setIsPlaying,
    setCurrentAudioIndex,
  } = UseAudioContext();

  const onAudioPressHandler = async (currentItem) => {
    //playing audio for the first time

    if (soundObj === null) {
      const playBackObject = new Audio.Sound();
      const status = await playAudio(playBackObject, currentItem.url);
      const index = audioFiles.indexOf(currentItem);

      setCurrentlyPlayingAudio(currentItem);
      setPlayBackObj(playBackObject);
      setSoundObj(status);
      setCurrentAudioIndex(index);
    }

    // pause audio
    if (
      soundObj !== null &&
      soundObj?.isLoaded &&
      soundObj?.isPlaying &&
      currentItem.id === currentlyPlayingAudio?.id
    ) {
      const status = await pauseAudio(playBackObj);

      setSoundObj(status);
      setIsPlaying(false);
    }

    //resume playing audio
    if (
      soundObj !== null &&
      soundObj?.isLoaded &&
      !soundObj?.isPlaying &&
      currentlyPlayingAudio?.id === currentItem.id
    ) {
      const status = await resumeAudio(playBackObj);
      setSoundObj(status);
      setIsPlaying(true);
    }

    //select another audio
    if (
      soundObj !== null &&
      soundObj.isLoaded &&
      currentlyPlayingAudio?.id !== currentItem.id
    ) {
      const status = await playNextAudio(playBackObj, currentItem.url);
      const index = audioFiles.indexOf(currentItem);

      setCurrentlyPlayingAudio(currentItem);
      setSoundObj(status);
      setIsPlaying(true);
      setCurrentAudioIndex(index);
    }
  };

  const rowRenderer = (type, item, index, extendedState) => {
    return (
      <AudioListItem
        title={item.title}
        duration={item.duration}
        isPlaying={extendedState.isPlaying}
        activeListItem={currentAudioIndex === index}
        onOptionPressHandler={() => {
          setOptionModalVisible(true);
          setCurrentItem(item);
        }}
        onAudioPressHandler={() => onAudioPressHandler(item)}
      />
    );
  };

  return (
    <AudioContext.Consumer>
      {({ dataProvider, isPlaying }) => {
        return (
          <View style={styles.mainContainer}>
            <RecyclerListView
              dataProvider={dataProvider}
              layoutProvider={layoutProvider}
              rowRenderer={rowRenderer}
              extendedState={{ isPlaying }} //to say recyclerview to check the state of the component all the time
            />
            <OptionModal
              onPlayPress={() => {
                console.log("Playing Audio");
              }}
              onPlayListPress={() => {
                console.log("Adding to playlist");
              }}
              visible={optionModalVisible}
              currentItem={currentItem}
              onCloseHandler={() => {
                setOptionModalVisible(false);
              }}
            />
          </View>
        );
      }}
    </AudioContext.Consumer>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  musicOption: {
    padding: 10,
    borderBottomColor: "red",
    borderBottomWidth: 2,
  },
});
