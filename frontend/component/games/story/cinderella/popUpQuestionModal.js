import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  colorVariants,
  fontFamily,
  fontSize,
} from "../../../../constants/globalConstants";
import Modal from "react-native-modal";
import Toast from "react-native-toast-message";

export const PopupQuestionModal = ({
  questionBank,
  imageRef,
  onCorrectAnswerSelected,
  modalVisible,
  setModalVisiblity,
  onIncorrectAnswerSelected,
}) => {
  const questionsArray = questionBank.easy;

  const [randomIndex, setRandomIndex] = useState(0);

  useEffect(() => {
    if (modalVisible) {
      setRandomIndex(Math.floor(Math.random() * questionsArray?.length));
      shuffleArray(randomOptions);
    }
  }, [modalVisible]);

  const randomQuestion = questionsArray[randomIndex];
  const randomOptions = randomQuestion.options;

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
        text1: "Correct Answer",
      });
      setModalVisiblity(false);
      onCorrectAnswerSelected();
    } else {
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
    padding: 30,
    marginTop: 70,
  },
  imageAnswerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 0.8,
  },
  questionTextContainer: {
    flex: 0.2,
  },
  questionText: {
    fontFamily: fontFamily.normalText,
    fontSize: fontSize.xxxLarge,
  },
  imageContainer: { flex: 0.4, backgroundColor: "orange" },
  questionContainer: {
    flex: 0.6,
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
