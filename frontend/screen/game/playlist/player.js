import { MaterialCommunityIcons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import PlayerButton from "../../../component/playlist/playerButton";
import { colorVariants } from "../../../constants/globalConstants";
import {
  changeAudio,
  moveAudio,
  pauseAudio,
  selectAudio,
} from "../../../helper/audioController";
import { convertTime } from "../../../helper/audioHelperWithAsyncStorage";
import { UseAudioContext } from "../../../useHook/useAudioContext";

const { width } = Dimensions.get("window");

export const Player = () => {
  const [currentPosition, setCurrentPosition] = useState(0);

  const context = UseAudioContext();

  const {
    playbackPosition,
    playbackDuration,
    currentlyPlayingAudio,
    totalAudioCount,
    activePlayList,
    isPlayListRunning,
    isPlaying,
    currentAudioIndex,
    playBackObj,
    soundObj,
    loadPreviousAudio,
  } = context;

  const calculateSeekBar = () => {
    if (playbackPosition !== null && playbackDuration !== null) {
      return playbackPosition / playbackDuration;
    }

    if (currentlyPlayingAudio.lastPosition) {
      return (
        currentlyPlayingAudio.lastPosition /
        (currentlyPlayingAudio.duration * 1000)
      );
    }

    return 0;
  };

  useEffect(() => {
    loadPreviousAudio();
  }, []);

  const handlePlayPause = async () => {
    await selectAudio(currentlyPlayingAudio, context);
  };

  const handleNext = async () => {
    await changeAudio(context, "next");
  };

  const handlePrevious = async () => {
    await changeAudio(context, "previous");
  };

  const renderCurrentTime = () => {
    if (!soundObj && currentlyPlayingAudio.lastPosition) {
      return convertTime(currentlyPlayingAudio.lastPosition / 1000);
    }
    return convertTime(playbackPosition / 1000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.audioCountContainer}>
        <View style={{ flexDirection: "row" }}>
          {isPlayListRunning && (
            <>
              <Text style={{ fontWeight: "bold" }}>From Playlist: </Text>
              <Text>{activePlayList.title}</Text>
            </>
          )}
        </View>
        <Text style={styles.audioCount}>{`${
          currentAudioIndex + 1
        } / ${totalAudioCount}`}</Text>
      </View>
      <View style={styles.midBannerContainer}>
        <MaterialCommunityIcons
          name="music-circle"
          size={300}
          color={
            isPlaying ? colorVariants.ACTIVE_BG : colorVariants.FONT_MEDIUM
          }
        />
      </View>
      <View style={styles.audioPlayerContainer}>
        <Text numberOfLines={1} style={styles.audioTitle}>
          {currentlyPlayingAudio.title}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 15,
          }}
        >
          <Text>{currentlyPlayingAudio.duration}</Text>
          <Text>{currentPosition ? currentPosition : renderCurrentTime()}</Text>
        </View>
        <Slider
          style={{ width: width, height: 40 }}
          minimumValue={0}
          maximumValue={1}
          value={calculateSeekBar()}
          minimumTrackTintColor={colorVariants.FONT_MEDIUM}
          maximumTrackTintColor={colorVariants.ACTIVE_BG}
          onValueChange={(value) => {
            setCurrentPosition(
              convertTime(value * currentlyPlayingAudio.duration)
            );
          }}
          onSlidingStart={async () => {
            if (!isPlaying) return;

            try {
              await pauseAudio(playBackObj);
            } catch (error) {
              console.log("error inside onSlidingStart callback", error);
            }
          }}
          onSlidingComplete={async (value) => {
            await moveAudio(context, value);
            setCurrentPosition(0);
          }}
        />
        <View style={styles.audioControllers}>
          <PlayerButton iconType="PREV" onPress={handlePrevious} />
          <PlayerButton
            onPress={handlePlayPause}
            style={{ marginHorizontal: 25 }}
            iconType={isPlaying ? "PLAY" : "PAUSE"}
          />
          <PlayerButton iconType="NEXT" onPress={handleNext} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colorVariants.APP_BG },
  audioControllers: {
    width,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
  },
  audioCountContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  container: {
    flex: 1,
  },
  audioCount: {
    textAlign: "right",
    color: colorVariants.FONT_LIGHT,
    fontSize: 14,
  },
  midBannerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  audioTitle: {
    fontSize: 16,
    color: colorVariants.FONT,
    padding: 15,
  },
});
