import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";

export default function TryAgain({ showing }) {
  return (
    <>
      {showing && (
        <View style={styles.toastContainer}>
          <Image
            style={styles.toastIcon}
            source={require("../../../../assets/puzzle/toast/ErrorIcon.png")}
          />
          <Text style={styles.toastText}>Try Again !!!</Text>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  toastIcon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  toastContainer: {
    position: "absolute",

    width: "60%",
    padding: 10,
    borderRadius: 18,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#fae1db",
    borderColor: "#d9100a",
  },
  toastText: {
    marginLeft: 14,
    fontSize: 24,
    color: "#d9100a",
  },
});
