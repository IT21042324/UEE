import { useEffect, useRef } from "react";
import { Animated, FlatList, StyleSheet, View } from "react-native";
import { ExpandingDot } from "react-native-animated-pagination-dots";
import { StoryOptionCard } from "../../component/games/story/storyOptionCard";
import {
  storySelectionOptions,
  storySelectionSpeech,
} from "../../constants/strings";
import { UseSpeechContext } from "../../useHook/useSpeechContext";

export const StorySelectionScreen = ({ navigation }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
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
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          }
        )}
        renderItem={({ item }) => (
          <StoryOptionCard
            option={item.ref}
            title={item.title}
            navigation={navigation}
          />
        )}
      />

      <ExpandingDot
        data={storySelectionOptions}
        expandingDotWidth={30}
        scrollX={scrollX}
        inActiveDotOpacity={0.6}
        dotStyle={{
          width: 10,
          height: 10,
          backgroundColor: "#347af0",
          borderRadius: 5,
          marginHorizontal: 5,
          alignSelf: "center",
        }}
        containerStyle={{
          position: "absolute",
          bottom: 30,
          alignSelf: "center",
          width: "100%",
          justifyContent: "center",
        }}
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
