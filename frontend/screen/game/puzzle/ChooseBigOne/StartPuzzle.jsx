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
import { Card } from "react-native-paper";
import SuccessModel from "../common/SuccessModel";
import PuzzleOver from "../common/PuzzleOver";
import TryAgain from "../toast/TryAgain";
import ChooseBigOneDS from "../../../../constants/Datasets/ChooseBigOneDS";
import { getSettings } from "../../../../asyncStorage/asyncStorage";
import { UseUserContext } from "../../../../useHook/useUserContext";

const difficulty = "medium";

let ChooseBigOneDSArray = [];

if (difficulty === "easy") {
  ChooseBigOneDSArray = ChooseBigOneDS.CBODSE;
} else if (difficulty === "medium") {
  ChooseBigOneDSArray = ChooseBigOneDS.CBODSM;
}

function StartPuzzle({ navigation }) {
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

  const [visible, setVisible] = useState(false);
  const [visibleOver, setVisibleOver] = useState(false);
  const [count, setCount] = useState(0);
  const [showing, setShowing] = useState(false);

  const [tryCount, setTryCount] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);

  const [score, setScore] = useState(0);
  let tempScore = score;

  let tempTryCount = tryCount;

  let tempCount = count;

  let tempQuestionCount = questionCount;

  function closeModel() {
    setVisible(false);
  }

  // console.log({
  //   question: tempCount + 1,
  //   tryies: tryCount,
  // });

  return (
    <>
      <ImageBackground
        source={require("../../../../assets/puzzle/ChooseTheBigOne/chooseBigBG.jpg")}
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
                {}{" "}
                {isSinhala
                  ? ChooseBigOneDS.title.sin
                  : ChooseBigOneDS.title.eng}
              </Text>
            </Card>

            <View style={styles.imageContainer}>
              <View>
                <Card>
                  <Card.Content>
                    <TouchableWithoutFeedback
                      onPress={
                        ChooseBigOneDSArray[count].image1.isBig
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
                                  ChooseBigOneDSArray[tempCount + 1] ==
                                  undefined
                                ) {
                                  setScore(tempScore + 1);
                                  setVisibleOver(true);
                                } else {
                                  setScore(tempScore + 1);
                                  setVisible(true);
                                  setCount(tempCount + 1);
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
                        source={ChooseBigOneDSArray[count].image1.src}
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
                        ChooseBigOneDSArray[count].image2.isBig
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
                                  ChooseBigOneDSArray[tempCount + 1] ==
                                  undefined
                                ) {
                                  setScore(tempScore + 1);
                                  setVisibleOver(true);
                                } else {
                                  setScore(tempScore + 1);
                                  setVisible(true);
                                  setCount(tempCount + 1);
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

                              // ToastAndroid.show(`Try Again`, ToastAndroid.SHORT);
                            }
                      }
                    >
                      <Card.Cover
                        style={border1}
                        source={ChooseBigOneDSArray[count].image2.src}
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
                        gameName: "chooseBigOne",
                      }}
                    />
                    <PuzzleOver
                      visible={visibleOver}
                      points={score}
                      navigation={navigation}
                      progress={{
                        question: questionCount,
                        tries: tryCount,
                        gameName: "chooseBigOne",
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
  },
  headingBody: {
    color: "white",
  },
  imageContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 50,
    marginRight: 20,
    marginLeft: 20,
  },
  image2Position: {
    marginLeft: 50,
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

export default StartPuzzle;
