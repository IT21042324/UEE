import { Image, StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { Divider } from "@rneui/themed";
import { globalStyles } from "../../../styles/global";

export const StoryOptionCard = ({ option, title, navigation }) => {
  const [selectedOption, setSelectedOption] = useState(3);

  useEffect(() => {
    setSelectedOption(option);
  }, [selectedOption]);

  const onPressHandler = () => {
    if (title === "Cinderella" || title === "සින්ඩරෙල්ලා")
      navigation.replace("CinderellaStory");
    else if (title === "Rapunzel" || title === "රපුන්සෙල්")
      navigation.replace("RapunzelStory");
    else if (title === "Hercules" || title === "හර්කියුලිස්")
      navigation.replace("HerculesStory");
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPressHandler}>
      <Image
        source={selectedOption}
        resizeMode="contain"
        style={styles.image}
      />
      <Divider
        inset={true}
        insetType="middle"
        color={"black"}
        width={5}
        style={{
          marginTop: 10,
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
    height: 350,
    margin: 40,
    borderWidth: 2,
    padding: 5,
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: "80%",
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
});
