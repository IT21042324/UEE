import moment from "moment";
import "moment-duration-format";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Toast from "react-native-toast-message";
import { UseBackendAPI } from "../../api/useBackendAPI";
import { brilliantImage } from "../../assets/images/imageIndex";
import { getSettings } from "../../asyncStorage/asyncStorage";
import {
  colorVariants,
  fontFamily,
  fontWeight,
} from "../../constants/globalConstants";
import { SinhalaString } from "../../constants/sinhalaString";
import { EnglishString } from "../../constants/strings";
import { UseUserContext } from "../../useHook/useUserContext";
import { UseGeneralSpeechCombination } from "../../useHook/mergeSpeechAndGeneralSettings";

export const GameCompletion = ({ navigation }) => {
  const incorrectAttempts = parseInt(navigation.getParam("incorrectAttempts"));
  const startTime = navigation.getParam("startTime");
  const questionCount = parseInt(navigation.getParam("questionCount"));
  const gameName = navigation.getParam("gameName");

  const [timer, setTimer] = useState(0);

  const [strings, setStrings] = useState(EnglishString());

  const findVerdict = (incorrectAttempts, questionCount) => {
    const correctAttempts = questionCount;
    const successRate = correctAttempts / (questionCount + incorrectAttempts);

    if (successRate === 1) {
      return {
        display: strings.gameCompletion.excellentJobVerdict,
        finalVerdict: strings.gameCompletion.excellent,
      };
    } else if (successRate >= 0.75) {
      return {
        display: strings.gameCompletion.greatJobVerdict,
        finalVerdict: strings.gameCompletion.great,
      };
    } else if (successRate >= 0.5) {
      return {
        display: strings.gameCompletion.goodJobVerdict,
        finalVerdict: strings.gameCompletion.good,
      };
    } else {
      return {
        display: strings.gameCompletion.practiseVerdict,
        finalVerdict: strings.gameCompletion.practise,
      };
    }
  };

  const { user } = UseUserContext();

  const { stopSpeaking } = UseGeneralSpeechCombination();

  useEffect(() => {
    async function loadStrings() {
      stopSpeaking();

      const settings = await getSettings();
      if (settings?.language) {
        if (settings.language === "si-LK") setStrings(SinhalaString());
      }
    }
    loadStrings();

    setTimer(new Date().getTime() - startTime);
  }, []);

  const formattedTimer = moment
    .duration(timer)
    .format("hh:mm:ss", { trim: false });

  const timeForQuestion = moment
    .duration(timer / 5)
    .format("hh:mm:ss", { trim: false });

  const finalVerdict = findVerdict(incorrectAttempts, questionCount);

  strings.gameStats[0].value = formattedTimer;
  strings.gameStats[1].value = incorrectAttempts;
  strings.gameStats[2].value = timeForQuestion;
  strings.gameStats[3].value = finalVerdict.display;

  const { saveProgress } = UseBackendAPI();

  const [isSavingToDB, setIsSavingToDB] = useState(false);

  const navigateToMainMenu = async () => {
    setIsSavingToDB(true);
    const data = await saveProgress({
      studentId: user.childId,
      parentId: user._id,
      gameType: "Story",
      gameName,
      gameCompletionTime: formattedTimer,
      incorrectAttempts,
      questionCount,
      maximumAttempts: questionCount + incorrectAttempts,
      questions: { type: Number, default: 0 },
      verdict: finalVerdict.finalVerdict,
    });

    if (data) navigation.navigate("StorySelection");
    else
      Toast.show({
        type: "error",
        text1: strings.loginAndSignup.credentialsExist,
      });
    navigation.navigate("StorySelection");
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={navigateToMainMenu}
      >
        {isSavingToDB ? (
          <ActivityIndicator color="white" size="large" />
        ) : (
          <Text style={styles.proceedBtnText}>
            {strings.gameCompletionText.proceedToMainMenu}
          </Text>
        )}
      </TouchableOpacity>
      <View style={StyleSheet.mainContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={brilliantImage}
            resizeMode="contain"
            style={styles.image}
          />
        </View>
        <View style={styles.mainHeadingContainer}>
          <Text style={styles.mainHeadingContainerText}>
            {strings.gameCompletionText.statistics}
          </Text>
        </View>
        <View style={styles.statsContainer}>
          <FlatList
            data={strings.gameStats}
            keyExtractor={(item) => item.text}
            renderItem={({ item }) => (
              <View style={styles.statsRowContainer}>
                <View style={styles.leftStatsValue}>
                  <Text style={styles.leftStatsValueText}>{item.text} </Text>
                </View>
                <View style={styles.rightStatsValue}>
                  <Text style={styles.rightStatsValueText}>{item.value}</Text>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colorVariants.white,
    margin: 10,
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  image: { height: 250, width: 600 },
  mainHeadingContainer: {
    marginLeft: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  mainHeadingContainerText: {
    fontFamily: fontFamily.normalText,
    fontSize: 30,
    textDecorationLine: "underline",
  },
  statsContainer: {
    margin: 20,
    alignItems: "center",
    width: "100%",
    padding: 5,
  },
  statsRowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
    backgroundColor: "crimson",
  },
  leftStatsValue: {
    flexDirection: "row",
    padding: 20,
    marginRight: 60,
  },
  leftStatsValueText: {
    fontFamily: fontFamily.normalText,
    fontSize: 20,
    color: "white",
    fontWeight: fontWeight.bold,
  },
  rightStatsValue: {
    padding: 20,
    flexDirection: "row",
  },
  rightStatsValueText: {
    fontFamily: fontFamily.normalText,
    fontSize: 20,
    color: "white",
    fontWeight: fontWeight.bold,
  },
  buttonContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    margin: 15,
    backgroundColor: colorVariants.dodgerblue,
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 10,
  },
  proceedBtnText: {
    fontFamily: fontFamily.normalText,
    fontSize: 20,
    color: colorVariants.white,
  },
});
