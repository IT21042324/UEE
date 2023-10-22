import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ToastAndroid,
  TouchableWithoutFeedback,
} from "react-native";
import SuccessModel from "../common/SuccessModel";
import { Card } from "react-native-paper";
import PuzzleOver from "../common/PuzzleOver";
import TryAgain from "../toast/TryAgain";
import ChooseTheColorDS from "../../../../constants/Datasets/ChooseTheColorDS";

function StartColorPuzzle({ navigation }) {
  const [border, setBorder] = useState({
    width: 250,
    height: 250,
  });
  const [border1, setBorder1] = useState({
    width: 250,
    height: 250,
  });

  const [border2, setBorder2] = useState({
    width: 250,
    height: 250,
  });

  const difficulty = "medium";

  let ChooseTheColorDSArray = [];

  if (difficulty === "easy") {
    ChooseTheColorDSArray = ChooseTheColorDS.CTCDE;
  } else if (difficulty === "medium") {
    ChooseTheColorDSArray = ChooseTheColorDS.CTCDM;
  }

  const [visible, setVisible] = useState(false);
  const [visibleOver, setVisibleOver] = useState(false);
  const [count, setCount] = useState(0);
  const [showing, setShowing] = useState(false);

  const [tryCount, setTryCount] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);

  const [score, setScore] = useState(0);
  let tempScore = score;

  let tempCount = count;

  let tempTryCount = tryCount;

  let tempQuestionCount = questionCount;

  function closeModel() {
    setVisible(false);
  }

  return (
    <>
      <View style={styles.contrainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Puzzle</Text>
          <TryAgain showing={showing} />
        </View>
        <View style={styles.bodyContainer}>
          <View style={styles.headingBodyContainer}>
            <Text style={styles.heading}>
              {ChooseTheColorDSArray[count].heading}
            </Text>
          </View>

          <View style={styles.imageContainer}>
            <View>
              <Card>
                <Card.Content>
                  <TouchableWithoutFeedback
                    onPress={
                      ChooseTheColorDSArray[count].image1.isCorrect
                        ? () => {
                            setTryCount(tempTryCount + 1);
                            setQuestionCount(tempQuestionCount + 1);
                            setTimeout(() => {
                              setBorder({
                                width: 250,
                                height: 250,
                                borderColor: "green",
                                borderWidth: 5,
                              });
                              setTimeout(() => {
                                setBorder({
                                  width: 250,
                                  height: 250,
                                });
                              }, 2000);
                            });

                            setTimeout(() => {
                              if (
                                ChooseTheColorDSArray[tempCount + 1] ==
                                undefined
                              ) {
                                setScore(tempScore + 1);
                                setVisibleOver(true);
                              } else {
                                setScore(tempScore + 1);
                                setCount(tempCount + 1);
                                setVisible(true);
                              }
                            }, 2000);
                          }
                        : () => {
                            setTryCount(tempTryCount + 1);
                            setShowing(true);
                            setTimeout(() => {
                              setBorder({
                                width: 250,
                                height: 250,
                                borderColor: "red",
                                borderWidth: 5,
                              });
                              setTimeout(() => {
                                setShowing(false);
                              }, 3000);
                              setTimeout(() => {
                                setBorder({
                                  width: 250,
                                  height: 250,
                                });
                              }, 3000);
                            });

                            //ToastAndroid.show(`Try Again`, ToastAndroid.SHORT);
                          }
                    }
                  >
                    <Card.Cover
                      style={border}
                      source={ChooseTheColorDSArray[count].image1.src}
                    />
                  </TouchableWithoutFeedback>
                </Card.Content>
              </Card>
            </View>
            <View style={styles.image2Position}>
              <Card>
                <Card.Content>
                  <TouchableWithoutFeedback
                    onPress={
                      ChooseTheColorDSArray[count].image2.isCorrect
                        ? () => {
                            setTryCount(tempTryCount + 1);
                            setQuestionCount(tempQuestionCount + 1);
                            setTimeout(() => {
                              setBorder1({
                                width: 250,
                                height: 250,
                                borderColor: "green",
                                borderWidth: 5,
                              });
                              setTimeout(() => {
                                setBorder1({
                                  width: 250,
                                  height: 250,
                                });
                              }, 2000);
                            });

                            setTimeout(() => {
                              if (
                                ChooseTheColorDSArray[tempCount + 1] ==
                                undefined
                              ) {
                                setScore(tempScore + 1);
                                setVisibleOver(true);
                              } else {
                                setScore(tempScore + 1);
                                setCount(tempCount + 1);
                                setVisible(true);
                              }
                            }, 2000);
                          }
                        : () => {
                            setTryCount(tempTryCount + 1);
                            setShowing(true);
                            setTimeout(() => {
                              setBorder1({
                                width: 250,
                                height: 250,
                                borderColor: "red",
                                borderWidth: 5,
                              });
                              setTimeout(() => {
                                setShowing(false);
                              }, 3000);
                              setTimeout(() => {
                                setBorder1({
                                  width: 250,
                                  height: 250,
                                });
                              }, 3000);
                            });

                            //ToastAndroid.show(`Try Again`, ToastAndroid.SHORT);
                          }
                    }
                  >
                    <Card.Cover
                      style={border1}
                      source={ChooseTheColorDSArray[count].image2.src}
                    />
                  </TouchableWithoutFeedback>
                </Card.Content>
              </Card>
            </View>
            <View>
              <Card>
                <Card.Content>
                  <TouchableWithoutFeedback
                    onPress={
                      ChooseTheColorDSArray[count].image3.isCorrect
                        ? () => {
                            setTryCount(tempTryCount + 1);
                            setQuestionCount(tempQuestionCount + 1);
                            setTimeout(() => {
                              setBorder2({
                                width: 250,
                                height: 250,
                                borderColor: "green",
                                borderWidth: 5,
                              });
                              setTimeout(() => {
                                setBorder2({
                                  width: 250,
                                  height: 250,
                                });
                              }, 2000);
                            });

                            setTimeout(() => {
                              if (
                                ChooseTheColorDSArray[tempCount + 1] ==
                                undefined
                              ) {
                                setScore(tempScore + 1);
                                setVisibleOver(true);
                              } else {
                                setScore(tempScore + 1);
                                setCount(tempCount + 1);
                                setVisible(true);
                              }
                            }, 2000);
                          }
                        : () => {
                            setTryCount(tempTryCount + 1);
                            setShowing(true);
                            setTimeout(() => {
                              setBorder2({
                                width: 250,
                                height: 250,
                                borderColor: "red",
                                borderWidth: 5,
                              });
                              setTimeout(() => {
                                setShowing(false);
                              }, 3000);
                              setTimeout(() => {
                                setBorder2({
                                  width: 250,
                                  height: 250,
                                });
                              }, 3000);
                            });

                            //ToastAndroid.show(`Try Again`, ToastAndroid.SHORT);
                          }
                    }
                  >
                    <Card.Cover
                      style={border2}
                      source={ChooseTheColorDSArray[count].image3.src}
                    />
                  </TouchableWithoutFeedback>

                  <SuccessModel
                    visible={visible}
                    onClose={closeModel}
                    points={score}
                    navigation={navigation}
                    progress={{
                      question: questionCount,
                      tries: tryCount,
                      gameName: "chooseTheColor",
                    }}
                  />
                  <PuzzleOver
                    visible={visibleOver}
                    points={score}
                    navigation={navigation}
                    progress={{
                      question: questionCount,
                      tries: tryCount,
                      gameName: "chooseTheColor",
                    }}
                  />
                </Card.Content>
              </Card>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  contrainer: {
    flex: 5,
  },
  headingContainer: {
    backgroundColor: "grey",
  },
  heading: {
    fontSize: 40,
  },
  bodyContainer: {},
  headingBodyContainer: {
    //marginTop: 50,
    alignItems: "center",
  },
  headingBody: {
    color: "white",
  },
  imageContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: "auto",
    marginRight: 20,
    marginLeft: 20,
  },
  image2Position: {
    marginTop: "auto",
    marginLeft: 10,
  },
  image1: {
    width: 250,
    height: 250,
  },
  image2: {
    width: 150,
    height: 150,
  },
});

export default StartColorPuzzle;
