import { StyleSheet, Text, View } from "react-native";
import React from "react";

export const PlayList = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>Audio List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
