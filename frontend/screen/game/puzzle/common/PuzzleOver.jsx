import { Modal, Text, View, StyleSheet, Button } from "react-native";
import { UseUserContext } from "../../../../useHook/useUserContext";
import { UseBackendAPI } from "../../../../api/useBackendAPI";
import { useState } from "react";
import { EnglishString } from "../../../../constants/strings";
import { ActivityIndicator } from "react-native-paper";

function PuzzleOver({ visible, onClose, points, navigation, progress }) {
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
        <View style={styles.modalContainer}>
          <View style={styles.contentContainer}>
            <Text style={styles.headerText}>Congratulations!</Text>
            <Text style={styles.headerTextWin}>🎊 You Win 🎊</Text>
            <Text style={styles.headerTextWin}>Total points : {points} 🥇</Text>
            <Text style={styles.descriptionText}>
              Thank you for Playing this Game!
            </Text>
            <View style={styles.btnContainer}>
              {isSavingToDB ? (
                <ActivityIndicator color="red" size="large" />
              ) : (
                <Button
                  title="Finish"
                  style={styles.buttonText}
                  onPress={() => OnFinishHandler()}
                />
              )}
            </View>
          </View>
        </View>
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
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  headerTextWin: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  headerTextScore: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
  },
  descriptionText: {
    fontSize: 16,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    color: "blue",
    marginBottom: 10,
    width: 100,
    marginHorizontal: 16,
  },

  btnContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
});

export default PuzzleOver;
