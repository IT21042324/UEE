import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import {
  colorVariants,
  fontFamily,
  fontStyle,
} from "../../../constants/globalConstants";
import { Foundation } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { HerculesStoryContent } from "../../../constants/strings";
import { PopupQuestionModal } from "../../../component/games/story/cinderella/popUpQuestionModal";

export const HerculesStoryPage = ({ navigation }) => {
  const [storyContent, setStoryContent] = useState([]);

  const [currentStoryPageObjectNumber, setCurrentStoryPageObjectNumber] =
    useState(-1);
  const [totalStoryPages, setTotalStoryPages] = useState(5);
  const [displayObject, setDisplayObject] = useState({});

  useEffect(() => {
    setStoryContent(HerculesStoryContent);
    setCurrentStoryPageObjectNumber(0);
  }, []);

  useEffect(() => {
    setDisplayObject(storyContent[currentStoryPageObjectNumber]);
    setTotalStoryPages(storyContent.length);
  }, [currentStoryPageObjectNumber]);

  const onCorrectAnswerSelected = () => {
    if (currentStoryPageObjectNumber < totalStoryPages - 1) {
      setCurrentStoryPageObjectNumber(currentStoryPageObjectNumber + 1);
      setDisplayObject(storyContent[currentStoryPageObjectNumber]);
    } else if (currentStoryPageObjectNumber == totalStoryPages - 1) {
      navigation.navigate("StorySelection");
    }
  };

  const [modalVisible, setModalVisible] = useState(false);

  const setModalVisiblity = (state) => {
    setModalVisible(state);
  };

  const onNextPressHandler = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.mainContainer}>
      {storyContent.length > 0 && (
        <PopupQuestionModal
          questionBank={storyContent[currentStoryPageObjectNumber].questionBank}
          imageRef={storyContent[currentStoryPageObjectNumber]?.imageId}
          onCorrectAnswerSelected={onCorrectAnswerSelected}
          modalVisible={modalVisible}
          setModalVisiblity={setModalVisiblity}
        />
      )}
      <View style={styles.storyDisplayContainer}>
        <View style={styles.storyMainContainer}>
          <View style={styles.imageContainer}>
            <Image source={displayObject?.imageId} style={styles.image} />
          </View>
          <View style={styles.passageContainer}>
            <Text style={styles.passage}>{displayObject?.passageContent}</Text>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.nextIconContainer}
          onPress={onNextPressHandler}
        >
          <Foundation name="next" size={80} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: { flex: 1 },
  emptySpace: {
    height: "20%",
    backgroundColor: "gold",
  },
  storyMainContainer: {
    flex: 1,
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "row",
  },
  storyDisplayContainer: {
    flex: 1,
  },
  imageContainer: { flex: 0.4, backgroundColor: colorVariants.babyBlue },
  image: {
    width: "100%",
    height: "100%",
  },
  passageContainer: { flex: 0.6, margin: 20 },
  passage: {
    fontFamily: fontFamily.normalText,
    fontStyle: fontStyle.normal,
    fontSize: 30,
  },
  nextIconContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    margin: 30,
  },
});
