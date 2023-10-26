import { useEffect, useRef, useState } from "react";
import {
  Animated,
  FlatList,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { ExpandingDot } from "react-native-animated-pagination-dots";
import { getSettings } from "../../asyncStorage/asyncStorage";
import { StoryOptionCard } from "../../component/games/story/storyOptionCard";
import { SinhalaString } from "../../constants/sinhalaString";
import { EnglishString } from "../../constants/strings";
import { UseAppGeneralSettingsContext } from "../../useHook/generalSettingsContext";
import { UseSpeechContext } from "../../useHook/useSpeechContext";

export const StorySelectionScreen = ({ navigation }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const { startSpeaking, stopSpeaking } = UseSpeechContext();

  const [strings, setStrings] = useState(EnglishString());

  const [isLoading, setIsLoading] = useState(true);
  const { muted } = UseAppGeneralSettingsContext();

  useEffect(() => {
    async function loadStrings() {
      const settings = await getSettings();
      if (settings?.language) {
        if (settings.language === "si-LK") setStrings(SinhalaString());
      }
      setIsLoading(false);
    }
    loadStrings();
  }, []);

  useEffect(() => {
    const onFocus = navigation.addListener("didFocus", () => {
      if (!muted) {
        stopSpeaking();
        const speak = async () => {
          await startSpeaking(strings.storySelectionSpeech);
        };

        speak();
      }
    });

    const onBlur = navigation.addListener("willBlur", () => {
      stopSpeaking();
    });

    return () => {
      onFocus.remove();
      onBlur.remove();
    };
  }, [isLoading]);

  if (!isLoading) {
    return (
      <ImageBackground
        source={require("../../assets/story/main.jpg")}
        resizeMode="cover"
        style={styles.bgImage}
      >
        <ScrollView contentContainerStyle={styles.mainContainer}>
          <FlatList
            data={strings.storySelectionOptions}
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
            data={strings.storySelectionOptions}
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
        </ScrollView>
      </ImageBackground>
    );
  }
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
