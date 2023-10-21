import { useState } from "react";
import {
  ActivityIndicator,
  Button,
  Modal,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Card } from "react-native-paper";
import { UseBackendAPI } from "../../../../api/useBackendAPI";
import { EnglishString } from "../../../../constants/strings";
import { UseUserContext } from "../../../../useHook/useUserContext";

function SuccessModel({ visible, onClose, points, navigation, progress }) {
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
            <Text style={styles.headerText}>Congratulations!</Text>
            <Text style={styles.descriptionText}>
              You have earned {points} points.✴️
            </Text>
            <View style={styles.btnContainerFinish}>
              {isSavingToDB ? (
                <ActivityIndicator color="red" size="large" />
              ) : (
                <Button
                  color="red"
                  title="Finish"
                  onPress={() => OnFinishHandler()}
                />
              )}
            </View>

            {!isSavingToDB && (
              <View style={styles.btnContainerNext}>
                <Button title="Next" onPress={onClose} />
              </View>
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
