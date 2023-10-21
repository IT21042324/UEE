import { Button, View, StyleSheet, Image, Pressable } from "react-native";
import { UseUserContext } from "../../../useHook/useUserContext";

function HomePuzzle({ navigation }) {
  const { user } = UseUserContext();

  console.log(user);

  return (
    <>
      <View style={styles.btnContainer}>
        <View style={styles.btn}>
          <Pressable onPress={() => navigation.navigate("StartPuzzle")}>
            <Image
              style={styles.icon1}
              source={require("../../../assets/puzzle/ChooseTheBigOne/icon.png")}
            />
          </Pressable>
          <Button
            title="Choose The Big One"
            onPress={() => navigation.navigate("StartPuzzle")}
          />
        </View>
        <View style={styles.btn}>
          <Pressable onPress={() => navigation.navigate("StartColorPuzzle")}>
            <Image
              style={styles.icon1}
              source={require("../../../assets/puzzle/ChooseTheColor/icon.png")}
            />
          </Pressable>
          <Button
            onPress={() => navigation.navigate("StartColorPuzzle")}
            title="Choose The Color"
          />
        </View>
        <View style={styles.btn}>
          <Pressable onPress={() => navigation.navigate("StartOddPuzzle")}>
            <Image
              style={styles.icon1}
              source={require("../../../assets/puzzle/ChooseTheOddOne/icon.png")}
            />
          </Pressable>
          <Button
            title="Choose The Odd One"
            onPress={() => navigation.navigate("StartOddPuzzle")}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  icon1: {
    width: 150,
    height: 150,
  },
  btn: {
    width: 155,
    marginHorizontal: 30,
    marginStart: 10,
    marginEnd: 10,
    borderWidth: 2,
    borderColor: "blue",
  },
});

export default HomePuzzle;
