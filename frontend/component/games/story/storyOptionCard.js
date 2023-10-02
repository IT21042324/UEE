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
    //use a second parameter as a object to pass data between screens
    navigation.navigate(`${title}Story`);
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
    height: 300,
    margin: 40,
    borderWidth: 2,
    padding: 10,
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
