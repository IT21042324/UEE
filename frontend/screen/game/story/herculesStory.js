import { Foundation } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { getSettings } from "../../../asyncStorage/asyncStorage";
import { PopupQuestionModal } from "../../../component/games/story/cinderella/popUpQuestionModal";
import {
  colorVariants,
  fontFamily,
  fontStyle,
} from "../../../constants/globalConstants";
import { SinhalaString } from "../../../constants/sinhalaString";
import { EnglishString } from "../../../constants/strings";
import { UseGeneralSpeechCombination } from "../../../useHook/mergeSpeechAndGeneralSettings";
import { Card } from "react-native-paper";

export const HerculesStoryPage = ({ navigation }) => {
  const [storyContent, setStoryContent] = useState([]);

  const [currentStoryPageObjectNumber, setCurrentStoryPageObjectNumber] =
    useState(-1);
  const [totalStoryPages, setTotalStoryPages] = useState(5);
  const [displayObject, setDisplayObject] = useState({});

  const [startTime, setStartTime] = useState(0);

  const [modalVisible, setModalVisible] = useState(false);

  const { startSpeaking, stopSpeaking } = UseGeneralSpeechCombination();
  const [strings, setStrings] = useState(EnglishString());

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStrings() {
      const settings = await getSettings();

      if (settings?.language) {
        if (settings.language === "si-LK") setStrings(SinhalaString());
      }

      setLoading(false);
    }
    loadStrings();
  }, []);

  useEffect(() => {
    if (!loading) {
      setStoryContent(strings.HerculesStoryContent);
      setCurrentStoryPageObjectNumber(0);
      setStartTime(new Date().getTime());
    }
  }, [loading]);

  useEffect(() => {
    if (!loading) {
      setDisplayObject(storyContent[currentStoryPageObjectNumber]);
      setTotalStoryPages(storyContent.length);
    }
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
        gameName: "CinderellaStory",
      });
    }
  };

  const setModalVisiblity = (state) => {
    setModalVisible(state);
  };

  const onNextPressHandler = () => {
    setModalVisible(true);
  };
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={require("../../../assets/story/hercules.jpg")}
        resizeMode="cover"
        style={styles.bgImage}
      >
        {storyContent.length > 0 && (
          <PopupQuestionModal
            questionBank={
              storyContent[currentStoryPageObjectNumber].questionBank
            }
            imageRef={storyContent[currentStoryPageObjectNumber]?.imageId}
            onCorrectAnswerSelected={onCorrectAnswerSelected}
            modalVisible={modalVisible}
            setModalVisiblity={setModalVisiblity}
            onIncorrectAnswerSelected={onIncorrectAnswerSelected}
            popupQuestionToast={strings.PopupQuestionToast}
          />
        )}
        <View style={styles.storyDisplayContainer}>
          <View style={styles.storyMainContainer}>
            <View style={styles.imageContainer}>
              <Card>
                <Card.Cover
                  source={displayObject?.imageId}
                  style={styles.image}
                />
              </Card>
            </View>
            <View style={styles.passageContainer}>
              <Card>
                <Card.Content>
                  <Text style={styles.passage}>
                    {displayObject?.passageContent}
                  </Text>
                </Card.Content>
              </Card>
            </View>
          </View>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.nextIconContainer}
            onPress={onNextPressHandler}
          >
            <Foundation name="next" size={80} color="white" />
          </TouchableOpacity>

          <View style={styles.pageNoContainer}>
            <Card style={styles.pageNoContainerCard}>
              <Card.Content>
                <Text style={styles.pageNoText}>
                  Page {currentStoryPageObjectNumber + 1} of {totalStoryPages}
                </Text>
              </Card.Content>
            </Card>
          </View>
        </View>
      </ImageBackground>
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
    marginTop: 40,
    marginRight: 40,
  },
  pageNoContainer: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: -20,
    marginLeft: -20,
  },
  pageNoText: {
    fontFamily: fontFamily.normalText,
    fontStyle: fontStyle.normal,
    fontSize: 15,
    backgroundColor: colorVariants.black,
    color: colorVariants.white,
    padding: 10,
  },
  pageNoContainerCard: {
    marginTop: "10%",
  },
  bgImage: {
    width: "100%",
    height: "100%",
  },
});
