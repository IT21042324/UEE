import { useEffect, useState } from "react";
import { ActivityIndicator, Modal, StyleSheet, Text, View } from "react-native";
import { Card, Button } from "react-native-paper";
import { UseBackendAPI } from "../../../../api/useBackendAPI";
import { EnglishString } from "../../../../constants/strings";
import { UseUserContext } from "../../../../useHook/useUserContext";
import { getSettings } from "../../../../asyncStorage/asyncStorage";
import SuccessModelDS from "../../../../constants/Datasets/SuccessModelDS";

function SuccessModel({ visible, onClose, points, navigation, progress }) {
  const [isSinhala, setIsSinhala] = useState(false);

  useEffect(() => {
    async function loadStrings() {
      const settings = await getSettings();

      if (settings?.language) {
        if (settings.language === "si-LK") setIsSinhala(true);
      }
    }
    loadStrings();
  }, []);
  const { user } = UseUserContext();

  const { saveProgress } = UseBackendAPI();

  const findVerdict = (incorrectAttempts, questionCount) => {
    const correctAttempts = questionCount;
    const successRate = correctAttempts / (questionCount + incorrectAttempts);

    const strings = EnglishString();

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

  const [isSavingToDB, setIsSavingToDB] = useState(false);

  const finalVerdict = findVerdict(
    progress.tries - progress.question,
    progress.question
  );

  async function OnFinishHandler() {
    setIsSavingToDB(true);

    const data = await saveProgress({
      studentId: user.childId,
      parentId: user._id,
      gameType: "Puzzle",
      gameName: progress.gameName,
      incorrectAttempts: progress.tries - progress.question,
      questionCount: progress.question,
      maximumAttempts: progress.tries,
      questions: { type: Number, default: 0 },
      verdict: finalVerdict.finalVerdict,
    });
    console.log(data);

    if (data) {
      navigation.navigate("PuzzleSelection");
      setIsSavingToDB(false);
    }
  }
  return (
    <>
      <Modal visible={visible} animationType="slide">
        <Card style={styles.modalContainer}>
          <Card.Content style={styles.contentContainer}>
            <Text style={styles.headerText}>
              {isSinhala
                ? SuccessModelDS.SUCMDLSTR.congratsSin
                : SuccessModelDS.SUCMDLSTR.congrats}
            </Text>
            <Text style={styles.descriptionText}>
              {isSinhala
                ? SuccessModelDS.SUCMDLSTR.earnedsin
                : SuccessModelDS.SUCMDLSTR.earned}{" "}
              {points}{" "}
              {isSinhala
                ? SuccessModelDS.SUCMDLSTR.pointsSin
                : SuccessModelDS.SUCMDLSTR.points}
              .✴️
            </Text>
            <Card.Content style={styles.btnContainerFinish}>
              {isSavingToDB ? (
                <ActivityIndicator color="red" size="large" />
              ) : (
                <Button
                  mode="contained"
                  buttonColor="red"
                  onPress={() => OnFinishHandler()}
                >
                  {isSinhala
                    ? SuccessModelDS.SUCMDLSTR.finSin
                    : SuccessModelDS.SUCMDLSTR.fin}
                </Button>
              )}
            </Card.Content>

            {!isSavingToDB && (
              <Card.Content style={styles.btnContainerNext}>
                <Button mode="outlined" onPress={onClose}>
                  {isSinhala
                    ? SuccessModelDS.SUCMDLSTR.nextSin
                    : SuccessModelDS.SUCMDLSTR.next}
                </Button>
              </Card.Content>
            )}
          </Card.Content>
        </Card>
      </Modal>
    </>
  );
}
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  contentContainer: {
    width: "80%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  descriptionText: {
    fontSize: 16,
    marginBottom: 20,
  },

  btnContainerFinish: {
    flexDirection: "row",
    marginTop: 16,
    marginRight: "20%",
  },
  btnContainerNext: {
    flexDirection: "row",
    marginTop: "-5%",
    marginLeft: "20%",
  },
});

export default SuccessModel;
