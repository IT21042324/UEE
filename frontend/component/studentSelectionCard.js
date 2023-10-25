import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { Divider } from "@rneui/themed";
import { globalStyles } from "../styles/global";

export const StudentMainManuSelectionCard = ({
  Icon,
  title,
  navigation,
  toggleModal,
}) => {
  const onPressHandler = () => {
    console.log(title);

    if (title === "Settings" || title === "සැකසීම්") toggleModal(true);
    else if (title === "කතාව" || title === "Story")
      navigation.navigate("StorySelection");
    else if (title === "ප්රහේලිකාව" || title === "Puzzle")
      navigation.navigate("PuzzleSelection");
    else if (title === "ධාවන ලැයිස්තුව" || title === "PlayList")
      navigation.navigate("PlayListSelection");
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPressHandler}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {Icon}
      </View>
      <Divider
        color={"black"}
        width={3}
        style={{
          marginLeft: 10,
          marginRight: 10,
          marginTop: 10,
          width: "100%",
          alignSelf: "center",
        }}
      />
      <View style={styles.textContainer}>
        <Text style={globalStyles.normalText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 300,
    margin: 40,
    borderWidth: 2,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "80%",
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
});
