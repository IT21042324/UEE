import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { colorVariants } from "../../../constants/globalConstants";
import { selectAudio } from "../../../helper/audioController";
import { UseAudioContext } from "../../../useHook/useAudioContext";
import { AudioListItem } from "../../../component/playlist/audioListItem";
import { OptionModal } from "../../../component/playlist/optionModal";

const PlayListDetail = (props) => {
  const context = UseAudioContext();
  const playList = props.route.params;

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const [audios, setAudios] = useState(
    playList.audios ? [...playList.audios] : []
  );

  const playAudio = async (audio) => {
    await selectAudio(audio, context, {
      activePlayList: playList,
      isPlayListRunning: true,
    });
  };

  const closeModal = () => {
    setSelectedItem({});
    setModalVisible(false);
  };

  const removeAudio = async () => {
    let isPlaying = context.isPlaying;
    let isPlayListRunning = context.isPlayListRunning;
    let soundObj = context.soundObj;
    let playbackPosition = context.playbackPosition;
    let activePlayList = context.activePlayList;

    if (
      context.isPlayListRunning &&
      context.currentlyPlayingAudio.id === selectedItem.id
    ) {
      // stop
      await context.playBackObj.stopAsync();
      await context.playBackObj.unloadAsync();
      isPlaying = false;
      isPlayListRunning = false;
      soundObj = null;
      playbackPosition = 0;
      activePlayList = [];
    }

    const newAudios = audios.filter((audio) => audio.id !== selectedItem.id);
    const result = await AsyncStorage.getItem("playlist");
    if (result !== null) {
      const oldPlayLists = JSON.parse(result);
      const updatedPlayLists = oldPlayLists.filter((item) => {
        if (item.id === playList.id) {
          item.audios = newAudios;
        }

        return item;
      });

      AsyncStorage.setItem("playlist", JSON.stringify(updatedPlayLists));

      context.setPlayList(updatedPlayLists);
      context.setIsPlayListRunning(isPlayListRunning);
      context.setActivePlayList(activePlayList);
      context.setPlaybackPosition(playbackPosition);
      context.setIsPlaying(isPlaying);
      context.setSoundObj(soundObj);
    }

    setAudios(newAudios);
    closeModal();
  };

  const removePlaylist = async () => {
    let isPlaying = context.isPlaying;
    let isPlayListRunning = context.isPlayListRunning;
    let soundObj = context.soundObj;
    let playbackPosition = context.playbackPosition;
    let activePlayList = context.activePlayList;

    if (context.isPlayListRunning && activePlayList.id === playList.id) {
      // stop
      await context.playBackObj.stopAsync();
      await context.playBackObj.unloadAsync();
      isPlaying = false;
      isPlayListRunning = false;
      soundObj = null;
      playbackPosition = 0;
      activePlayList = [];
    }

    const result = await AsyncStorage.getItem("playlist");
    if (result !== null) {
      const oldPlayLists = JSON.parse(result);
      const updatedPlayLists = oldPlayLists.filter(
        (item) => item.id !== playList.id
      );

      AsyncStorage.setItem("playlist", JSON.stringify(updatedPlayLists));

      context.setPlayList(updatedPlayLists);
      context.setIsPlayListRunning(isPlayListRunning);
      context.setActivePlayList(activePlayList);
      context.setPlaybackPosition(playbackPosition);
      context.setIsPlaying(isPlaying);
      context.setSoundObj(soundObj);
    }

    props.navigation.goBack();
  };

  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 15,
          }}
        >
          <Text style={styles.title}>{playList.title}</Text>
          <TouchableOpacity onPress={removePlaylist}>
            <Text style={[styles.title, { color: "red" }]}>Remove</Text>
          </TouchableOpacity>
        </View>
        {audios.length ? (
          <FlatList
            contentContainerStyle={styles.listContainer}
            data={audios}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={{ marginBottom: 10 }}>
                <AudioListItem
                  title={item.title}
                  duration={item.duration}
                  isPlaying={context.isPlaying}
                  activeListItem={item.id === context.currentlyPlayingAudio.id}
                  onAudioPress={() => playAudio(item)}
                  onOptionPress={() => {
                    setSelectedItem(item);
                    setModalVisible(true);
                  }}
                />
              </View>
            )}
          />
        ) : (
          <Text
            style={{
              fontWeight: "bold",
              color: colorVariants.FONT_LIGHT,
              fontSize: 25,
              paddingTop: 50,
            }}
          >
            No Audio
          </Text>
        )}
      </View>
      <OptionModal
        visible={modalVisible}
        onCloseHandler={closeModal}
        options={[{ title: "Remove from playlist", onPress: removeAudio }]}
        currentItem={selectedItem}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  listContainer: {
    padding: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    paddingVertical: 5,
    fontWeight: "bold",
    color: colorVariants.ACTIVE_BG,
  },
});

export default PlayListDetail;
