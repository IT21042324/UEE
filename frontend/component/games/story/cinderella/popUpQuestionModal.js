import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Modal from "react-native-modal";
import Toast from "react-native-toast-message";
import {
  colorVariants,
  fontFamily,
  fontSize,
} from "../../../../constants/globalConstants";
import { UseGeneralSpeechCombination } from "../../../../useHook/mergeSpeechAndGeneralSettings";

export const PopupQuestionModal = ({
  questionBank,
  imageRef,
  onCorrectAnswerSelected,
  modalVisible,
  setModalVisiblity,
  onIncorrectAnswerSelected,
  popupQuestionToast,
}) => {
  const questionsArray = questionBank.easy;

  const { stopSpeaking, startSpeaking } = UseGeneralSpeechCombination();

  useEffect(() => {
    if (modalVisible) {
      const newRandomIndex = Math.floor(Math.random() * questionsArray?.length);
      const newRandomQuestion = questionsArray[newRandomIndex];
      setRandomQuestion(newRandomQuestion);
      const newRandomOptions = [...newRandomQuestion.options];
      shuffleArray(newRandomOptions);

      setRandomOptions(newRandomOptions);

      stopSpeaking();
      const optionsString = newRandomOptions.join(", ");
      startSpeaking(newRandomQuestion.question + optionsString);
    }
  }, [modalVisible]);

  const [randomQuestion, setRandomQuestion] = useState({});
  const [randomOptions, setRandomOptions] = useState([]);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  const answerOnPressHandler = (answer) => {
    if (answer === randomQuestion.correctAnswer) {
      Toast.show({
        type: "success",
        text1: popupQuestionToast.correctAnswer,
      });
      setModalVisiblity(false);
      onCorrectAnswerSelected();
    } else {
      Toast.show({
        type: "error",
        text1: popupQuestionToast.incorrectAnswer,
      });

      onIncorrectAnswerSelected();
    }
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisiblity(false);
      }}
    >
      <View style={styles.popUpContent}>
        <View style={styles.questionTextContainer}>
          <Text style={styles.questionText}>{randomQuestion.question}</Text>
        </View>
        <View style={styles.imageAnswerContainer}>
          <View style={styles.imageContainer}>
            <View style={{ flex: 1 }}>
              <Image
                source={imageRef}
                style={styles.image}
                resizeMode="stretch"
              />
            </View>
          </View>
          <View style={styles.questionContainer}>
            <FlatList
              data={randomOptions}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.answerContainer}
                  onPress={() => answerOnPressHandler(item)}
                >
                  <Text style={styles.answerText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  popUpContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colorVariants.white,
    padding: 5,
    marginTop: 70,
  },
  imageAnswerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 0.8,
  },
  questionTextContainer: {
    flex: 0.1,
  },
  questionText: {
    fontFamily: fontFamily.normalText,
    fontSize: fontSize.xLarge,
    padding: 5,
  },
  imageContainer: { flex: 0.4, backgroundColor: "orange" },
  questionContainer: {
    flex: 0.6,
    justifyContent: "center",
    width: "100%",
    height: "100%",
    top: 30,
  },
  answerContainer: {
    flex: 1,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: colorVariants.babyBlue,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  answerText: {
    fontFamily: fontFamily.normalText,
    fontSize: fontSize.large,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
