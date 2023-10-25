import { StyleSheet, Text, View } from "react-native";
import React from "react";

export const Player = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>Player</Text>
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
