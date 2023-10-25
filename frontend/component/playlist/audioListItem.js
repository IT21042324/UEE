import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { colorVariants } from "../../constants/globalConstants";

export const AudioListItem = ({
  title,
  duration,
  onOptionPressHandler,
  onAudioPressHandler,
}) => {
  const getThumbNailText = () => {
    return title[0];
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onAudioPressHandler}>
        <View style={styles.leftContainer}>
          <View style={styles.thumbnail}>
            <Text style={styles.thumbNailText}>{getThumbNailText()}</Text>
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.title} numberOfLines={1}>
              {title}
            </Text>
            <Text style={styles.timeText} numberOfLines={1}>
              {duration}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>

      <View style={styles.rightContainer}>
        <Entypo
          name="dots-three-vertical"
          size={24}
          color={colorVariants.FONT_MEDIUM}
          onPress={onOptionPressHandler}
          style={{ alignSelf: "center", padding: 10 }}
        />
      </View>
    </View>
  );
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "center",
    width: width - 80,
    marginTop: 20,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  rightContainer: {
    flexBasis: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  thumbnail: {
    height: 50,
    flexBasis: 50,
    backgroundColor: colorVariants.FONT_LIGHT,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  thumbNailText: {
    fontSize: 26,
    fontWeight: "bold",
    color: colorVariants.FONT,
  },
  titleContainer: {
    width: width - 180,
    paddingLeft: 10,
  },
  title: {
    fontSize: 20,
    color: colorVariants.FONT,
  },
  seperator: {
    width: width - 80,
    backgroundColor: "#333",
    opacity: 0.5,
    height: 0.5,
    alignSelf: "center",
    marginTop: 10,
  },
  timeText: {
    fontSize: 14,
    color: colorVariants.FONT_LIGHT,
  },
});
