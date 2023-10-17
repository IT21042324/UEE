import { StyleSheet, View } from "react-native";
import { StoryOptionCard } from "../../component/games/story/storyOptionCard";
import { FlatList } from "react-native";
import {
  storySelectionOptions,
  storySelectionSpeech,
} from "../../constants/strings";
import { useEffect } from "react";

import { UseSpeechContext } from "../../useHook/useSpeechContext";

export const StorySelectionScreen = ({ navigation }) => {
  const { startSpeaking, stopSpeaking } = UseSpeechContext();

  useEffect(() => {
    const onFocus = navigation.addListener("didFocus", () => {
      stopSpeaking();
      const speak = async () => {
        await startSpeaking(storySelectionSpeech.english);
      };
      speak();
    });

    const onBlur = navigation.addListener("willBlur", () => {
      stopSpeaking();
    });

    return () => {
      onFocus.remove();
      onBlur.remove();
    };
  }, []);

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={storySelectionOptions}
        keyExtractor={(item) => item.ref}
        numColumns={3}
        renderItem={({ item }) => (
          <StoryOptionCard
            option={item.ref}
            title={item.title}
            navigation={navigation}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 30,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
