import { View, StyleSheet, Text, Image } from "react-native";
import { globalStyles } from "../styles/global";

export const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <View>
        <Text style={globalStyles.titleText}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    letterSpacing: 1,
  },
});
