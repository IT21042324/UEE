import {
  StyleSheet,
  View,
  Image,
  Text,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import {
  colorVariants,
  fontFamily,
  fontWeight,
} from "../../constants/globalConstants";
import { brilliantImage } from "../../assets/images/imageIndex";
import { gameStats } from "../../constants/strings";
import { useEffect, useState } from "react";
import "moment-duration-format";
import moment from "moment";

export const GameCompletion = ({ navigation }) => {
  const incorrectAttempts = navigation.getParam("incorrectAttempts");
  const startTime = navigation.getParam("startTime");
  const questionCount = navigation.getParam("questionCount");

  const [timer, setTimer] = useState(0);

  useEffect(() => {
    setTimer(new Date().getTime() - startTime);
  }, []);

  const formattedTimer = moment
    .duration(timer)
    .format("hh:mm:ss", { trim: false });

  const timeForQuestion = moment
    .duration(timer / 5)
    .format("hh:mm:ss", { trim: false });

  gameStats[0].value = formattedTimer;
  gameStats[1].value = incorrectAttempts;
  gameStats[2].value = timeForQuestion;

  const navigateToMainMenu = () => {
    navigation.navigate("StorySelection");
  };

  return (
    <>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={navigateToMainMenu}
      >
        <Text style={styles.proceedBtnText}>Proceed To Main Menu</Text>
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
          <Text style={styles.mainHeadingContainerText}>Statistics</Text>
        </View>
        <View style={styles.statsContainer}>
          <FlatList
            data={gameStats}
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
    </>
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
    bottom: 0,
    right: 0,
    margin: 50,
    backgroundColor: colorVariants.dodgerblue,
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 10,
  },
  proceedBtnText: {
    fontFamily: fontFamily.normalText,
    fontWeight: fontWeight.bold,
    fontSize: 20,
    color: colorVariants.white,
  },
});
