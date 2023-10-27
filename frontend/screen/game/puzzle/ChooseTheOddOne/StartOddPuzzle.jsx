import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ToastAndroid,
  TouchableWithoutFeedback,
  ImageBackground,
} from "react-native";
import SuccessModel from "../common/SuccessModel";
import PuzzleOver from "../common/PuzzleOver";
import TryAgain from "../toast/TryAgain";
import { Card } from "react-native-paper";
import ChooseOddOneDS from "../../../../constants/Datasets/ChooseOddOneDS";
import { getSettings } from "../../../../asyncStorage/asyncStorage";

function StartOddPuzzle({ navigation }) {
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

  const difficulty = "easy";

  let ChooseOddOneDSArray = [];

  if (difficulty === "easy") {
    ChooseOddOneDSArray = ChooseOddOneDS.COODSE;
  } else if (difficulty === "medium") {
    ChooseOddOneDSArray = ChooseOddOneDS.COODSM;
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
      <ImageBackground
        source={require("../../../../assets/puzzle/ChooseTheOddOne/chooseOddBG.jpg")}
        resizeMode="cover"
        style={styles.bgImage}
      >
        <View style={styles.contrainer}>
          <View style={styles.headingContainer}>
            <TryAgain showing={showing} />
          </View>
          <View style={styles.bodyContainer}>
            <Card style={styles.headingBodyContainer}>
              <Text style={styles.heading}>
                {isSinhala
                  ? ChooseOddOneDS.title.sin
                  : ChooseOddOneDS.title.eng}
              </Text>
            </Card>

            <View style={styles.imageContainer}>
              <View>
                <Card>
                  <Card.Content>
                    <TouchableWithoutFeedback
                      onPress={
                        ChooseOddOneDSArray[count].image1.isCorrect
                          ? () => {
                              setTimeout(() => {
                                setTryCount(tempTryCount + 1);
                                setQuestionCount(tempQuestionCount + 1);
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
                                  ChooseOddOneDSArray[tempCount + 1] ==
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
                        source={ChooseOddOneDSArray[count].image1.src}
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
                        ChooseOddOneDSArray[count].image2.isCorrect
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
                                  ChooseOddOneDSArray[tempCount + 1] ==
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
                        source={ChooseOddOneDSArray[count].image2.src}
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
                        ChooseOddOneDSArray[count].image3.isCorrect
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
                                  ChooseOddOneDSArray[tempCount + 1] ==
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
                        source={ChooseOddOneDSArray[count].image3.src}
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
                        gameName: "chooseTheOdd",
                      }}
                    />
                    <PuzzleOver
                      visible={visibleOver}
                      points={score}
                      navigation={navigation}
                      progress={{
                        question: questionCount,
                        tries: tryCount,
                        gameName: "chooseTheOdd",
                      }}
                    />
                  </Card.Content>
                </Card>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
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
    marginTop: 55,
    alignItems: "center",
    width: "70%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  headingBody: {
    color: "white",
  },
  imageContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 40,
    marginRight: 20,
    marginLeft: 20,
  },
  image2Position: {
    marginLeft: 50,
    marginRight: 50,
  },
  image1: {
    width: 250,
    height: 250,
  },
  image2: {
    width: 150,
    height: 150,
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default StartOddPuzzle;
