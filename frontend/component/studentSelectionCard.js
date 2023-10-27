import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { Divider } from "@rneui/themed";
import { globalStyles } from "../styles/global";
import { Card } from "react-native-paper";

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
    <TouchableOpacity onPress={onPressHandler}>
      <Card style={styles.container}>
        {/* <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {Icon}
        </View> */}
        <Card.Content>{Icon}</Card.Content>
        <Card.Content>
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
        </Card.Content>
        <View style={styles.textContainer}>
          <Text style={globalStyles.normalText}>{title}</Text>
        </View>
      </Card>
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
    backgroundColor: "#eaf0f0",
  },
  image: {
    width: "100%",
    height: "80%",
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
  },
});
