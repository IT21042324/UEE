import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { LayoutProvider, RecyclerListView } from "recyclerlistview";
import { AudioListItem } from "../../../component/playlist/audioListItem";
import { OptionModal } from "../../../component/playlist/optionModal";
import { AudioContext } from "../../../context/audioProvider";
import { selectAudio } from "../../../helper/audioController";
import { UseGeneralSpeechCombination } from "../../../useHook/mergeSpeechAndGeneralSettings";
import { UseAudioContext } from "../../../useHook/useAudioContext";

export const Audiolist = ({ navigation }) => {
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

  const context = UseAudioContext();

  const { currentAudioIndex, loadPreviousAudio, setAddToPlayList } = context;

  const onAudioPressHandler = async (currentItem) => {
    //playing audio for the first time

    console.log(currentItem, "haha");
    await selectAudio(currentItem, context);
  };

  useEffect(() => {
    loadPreviousAudio();
  }, []);

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

  const navigateToPlaylist = () => {
    setAddToPlayList(currentItem);
    navigation.navigate("PlayList");
  };

  return (
    <AudioContext.Consumer>
      {({ dataProvider, isPlaying }) => {
        if (!dataProvider._data.length) return null;

        return (
          <View style={styles.mainContainer}>
            <RecyclerListView
              dataProvider={dataProvider}
              layoutProvider={layoutProvider}
              rowRenderer={rowRenderer}
              extendedState={{ isPlaying }} //to say recyclerview to check the state of the component all the time
            />
            <OptionModal
              options={[
                {
                  title: "Add to playlist",
                  onPress: navigateToPlaylist,
                },
              ]}
              currentItem={currentItem}
              onCloseHandler={() => {
                setOptionModalVisible(false);
              }}
              visible={optionModalVisible}
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
