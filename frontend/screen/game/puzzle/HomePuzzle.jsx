import {
  Button,
  View,
  StyleSheet,
  Image,
  Pressable,
  ImageBackground,
} from "react-native";
import { UseUserContext } from "../../../useHook/useUserContext";
import { useEffect, useState } from "react";
import { getSettings } from "../../../asyncStorage/asyncStorage";
import ChooseBigOneDS from "../../../constants/Datasets/ChooseBigOneDS";
import ChooseOddOneDS from "../../../constants/Datasets/ChooseOddOneDS";
import ChooseTheColorDS from "../../../constants/Datasets/ChooseTheColorDS";

function HomePuzzle({ navigation }) {
  const { user } = UseUserContext();

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

  return (
    <>
      <ImageBackground
        source={require("../../../assets/puzzle/choosePuzzle.jpg")}
        resizeMode="cover"
        style={styles.bgImage}
      >
        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <Pressable onPress={() => navigation.navigate("StartPuzzle")}>
              <Image
                style={styles.icon1}
                source={require("../../../assets/puzzle/ChooseTheBigOne/icon.png")}
              />
            </Pressable>
            <Button
              title={
                isSinhala
                  ? ChooseBigOneDS.screenTitle.sin
                  : ChooseBigOneDS.screenTitle.eng
              }
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
              title={
                isSinhala
                  ? ChooseTheColorDS.screenTitle.sin
                  : ChooseTheColorDS.screenTitle.eng
              }
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
              title={
                isSinhala
                  ? ChooseOddOneDS.screenTitle.sin
                  : ChooseOddOneDS.screenTitle.eng
              }
              onPress={() => navigation.navigate("StartOddPuzzle")}
            />
          </View>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  icon1: {
    width: 200,
    height: 200,
  },
  btn: {
    width: 207,
    marginHorizontal: 30,
    borderWidth: 4,
    borderColor: "white",
    marginRight: 50,
    marginLeft: 50,
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomePuzzle;
