import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import PlayListDetail from "../../../component/playlist/playListDetail";
import PlayListInputModal from "../../../component/playlist/playListInputModal";
import { UseAudioContext } from "../../../useHook/useAudioContext";
import { colorVariants } from "../../../constants/globalConstants";

let selectedPlayList = {};

export const PlayList = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [showPlayList, setShowPlayList] = useState(false);

  const context = UseAudioContext();
  const { playList, addToPlayList, setAddToPlayList, setPlayList } = context;

  const createPlayList = async (playListName) => {
    const result = await AsyncStorage.getItem("playlist");
    if (result !== null) {
      const audios = [];
      if (addToPlayList) {
        audios.push(addToPlayList);
      }
      const newList = {
        id: Date.now(),
        title: playListName,
        audios: audios,
      };

      const updatedList = [...playList, newList];

      setAddToPlayList(null);
      setPlayList(updatedList);

      await AsyncStorage.setItem("playlist", JSON.stringify(updatedList));
    }
    setModalVisible(false);
  };

  const renderPlayList = async () => {
    const result = await AsyncStorage.getItem("playlist");
    if (result === null) {
      const defaultPlayList = {
        id: Date.now(),
        title: "My Favorite",
        audios: [],
      };

      const newPlayList = [...playList, defaultPlayList];
      setPlayList([...newPlayList]);

      return await AsyncStorage.setItem(
        "playlist",
        JSON.stringify([...newPlayList])
      );
    }

    setPlayList(JSON.parse(result));
  };

  useEffect(() => {
    if (!playList.length) {
      renderPlayList();
    }
  }, []);

  const handleBannerPress = async (playList) => {
    if (addToPlayList) {
      const result = await AsyncStorage.getItem("playlist");

      let oldList = [];
      let updatedList = [];
      let sameAudio = false;

      if (result !== null) {
        oldList = JSON.parse(result);

        updatedList = oldList.filter((list) => {
          if (list.id === playList.id) {
            // we want to check is that same audio is already inside our list or not.
            for (let audio of list.audios) {
              if (audio.id === addToPlayList.id) {
                // alert with some message
                sameAudio = true;
                return;
              }
            }

            // otherwise update the playlist.
            list.audios = [...list.audios, addToPlayList];
          }

          return list;
        });
      }

      if (sameAudio) {
        Alert.alert(
          "Found same audio!",
          `${addToPlayList.title} is already inside the list.`
        );
        sameAudio = false;

        return setAddToPlayList(null);
      }

      setAddToPlayList(null);
      setPlayList([...updatedList]);

      return AsyncStorage.setItem("playlist", JSON.stringify([...updatedList]));
    }

    // if there is no audio selected then we want open the list.
    selectedPlayList = playList;
    // setShowPlayList(true);

    navigation.navigate("PlayListDetail", playList);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {playList.length
        ? playList.map((item) => (
            <TouchableOpacity
              key={item.id.toString()}
              style={styles.playListBanner}
              onPress={() => handleBannerPress(item)}
            >
              <Text>{item.title}</Text>
              <Text style={styles.audioCount}>
                {item.audios.length > 1
                  ? `${item.audios.length} Songs`
                  : `${item.audios.length} Song`}
              </Text>
            </TouchableOpacity>
          ))
        : null}

      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={{ marginTop: 15 }}
      >
        <Text style={styles.playListBtn}>+ Add New Playlist</Text>
      </TouchableOpacity>

      <PlayListInputModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSubmit={createPlayList}
      />
      <PlayListDetail
        visible={showPlayList}
        playList={selectedPlayList}
        onClose={() => setShowPlayList(false)}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  playListBanner: {
    padding: 5,
    backgroundColor: "rgba(204,204,204,0.3)",
    borderRadius: 5,
    marginBottom: 15,
  },
  audioCount: {
    marginTop: 3,
    opacity: 0.5,
    fontSize: 14,
  },
  playListBtn: {
    color: colorVariants.ACTIVE_BG,
    letterSpacing: 1,
    fontWeight: "bold",
    fontSize: 14,
    padding: 5,
  },
});
