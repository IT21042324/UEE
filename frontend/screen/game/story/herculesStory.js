import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import {
  colorVariants,
  fontFamily,
  fontStyle,
} from "../../../constants/globalConstants";
import { Foundation } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { EnglishString } from "../../../constants/strings";
import { PopupQuestionModal } from "../../../component/games/story/cinderella/popUpQuestionModal";
import { UseSpeechContext } from "../../../useHook/useSpeechContext";
import { getSettings } from "../../../asyncStorage/asyncStorage";
import { SinhalaString } from "../../../constants/sinhalaString";

export const HerculesStoryPage = ({ navigation }) => {
  const [storyContent, setStoryContent] = useState([]);

  const [currentStoryPageObjectNumber, setCurrentStoryPageObjectNumber] =
    useState(-1);
  const [totalStoryPages, setTotalStoryPages] = useState(5);
  const [displayObject, setDisplayObject] = useState({});
  const [startTime, setStartTime] = useState(0);

  const { startSpeaking, stopSpeaking } = UseSpeechContext();
  const [strings, setStrings] = useState(EnglishString());

  useEffect(() => {
    async function loadStrings() {
      const settings = await getSettings();
      if (settings?.language) {
        if (settings.language === "si-LK") setStrings(SinhalaString());
      }
    }
    loadStrings();

    setStoryContent(strings.HerculesStoryContent);
    setCurrentStoryPageObjectNumber(0);
    setStartTime(new Date().getTime());
  }, []);

  useEffect(() => {
    setDisplayObject(storyContent[currentStoryPageObjectNumber]);
    setTotalStoryPages(storyContent.length);
  }, [currentStoryPageObjectNumber]);

  useEffect(() => {
    async function speaking() {
      stopSpeaking();
      await startSpeaking(displayObject?.passageContent);
    }
    speaking();
  }, [displayObject]);

  const [incorrectAttempts, setIncorrectAttempts] = useState(0);

  const onIncorrectAnswerSelected = () => {
    setIncorrectAttempts(incorrectAttempts + 1);
  };

  const onCorrectAnswerSelected = () => {
    if (currentStoryPageObjectNumber < totalStoryPages - 1) {
      setCurrentStoryPageObjectNumber(currentStoryPageObjectNumber + 1);
      setDisplayObject(storyContent[currentStoryPageObjectNumber]);
    } else if (currentStoryPageObjectNumber == totalStoryPages - 1) {
      navigation.navigate("GameCompletion", {
        incorrectAttempts,
        startTime,
        questionCount: totalStoryPages,
      });
    }
  };

  const [modalVisible, setModalVisible] = useState(false);

  const setModalVisiblity = (state) => {
    setModalVisible(state);
  };

  const onNextPressHandler = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.mainContainer}>
      {storyContent.length > 0 && (
        <PopupQuestionModal
          questionBank={storyContent[currentStoryPageObjectNumber].questionBank}
          imageRef={storyContent[currentStoryPageObjectNumber]?.imageId}
          onCorrectAnswerSelected={onCorrectAnswerSelected}
          modalVisible={modalVisible}
          setModalVisiblity={setModalVisiblity}
          onIncorrectAnswerSelected={onIncorrectAnswerSelected}
        />
      )}
      <View style={styles.storyDisplayContainer}>
        <View style={styles.storyMainContainer}>
          <View style={styles.imageContainer}>
            <Image source={displayObject?.imageId} style={styles.image} />
          </View>
          <View style={styles.passageContainer}>
            <Text style={styles.passage}>{displayObject?.passageContent}</Text>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.nextIconContainer}
          onPress={onNextPressHandler}
        >
          <Foundation name="next" size={80} color="black" />
        </TouchableOpacity>

        <View style={styles.pageNoContainer}>
          <Text style={styles.pageNoText}>
            Page {currentStoryPageObjectNumber + 1} of {totalStoryPages}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: { flex: 1 },
  emptySpace: {
    height: "20%",
    backgroundColor: "gold",
  },
  storyMainContainer: {
    flex: 1,
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "row",
  },
  storyDisplayContainer: {
    flex: 1,
  },
  imageContainer: { flex: 0.4, backgroundColor: colorVariants.babyBlue },
  image: {
    width: "100%",
    height: "100%",
  },
  passageContainer: { flex: 0.6, margin: 20 },
  passage: {
    fontFamily: fontFamily.normalText,
    fontStyle: fontStyle.normal,
    fontSize: 30,
  },
  nextIconContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    margin: 30,
  },
  pageNoContainer: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  pageNoText: {
    fontFamily: fontFamily.normalText,
    fontStyle: fontStyle.normal,
    fontSize: 30,
    backgroundColor: colorVariants.black,
    color: colorVariants.white,
    padding: 10,
  },
});
