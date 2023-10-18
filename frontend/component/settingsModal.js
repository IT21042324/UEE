import React, { useState } from "react";
import { Button, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { Picker } from "@react-native-picker/picker";
import {
  colorVariants,
  fontFamily,
  fontStyle,
} from "../constants/globalConstants";
import { AntDesign } from "@expo/vector-icons";
import {
  getSettings,
  mergeSettings,
  saveSettings,
} from "../asyncStorage/asyncStorage";
import Toast from "react-native-toast-message";

export const SettingsModal = ({ toggleModal }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  const onSaveBtnHandler = async () => {
    const settings = await getSettings();

    if (settings) {
      await mergeSettings({ language: selectedLanguage });
    } else await saveSettings({ language: selectedLanguage });

    console.log(settings, selectedLanguage);

    toggleModal(false);

    Toast.show({
      type: "success",
      position: "bottom",
      text1: "Settings Saved",
      visibilityTime: 1000,
    });
  };

  return (
    <View style={{ flex: 1, position: "absolute" }}>
      <Modal style={styles.modal} isVisible={true}>
        <View style={styles.modalContent}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Settings</Text>
            <AntDesign
              name="closecircleo"
              size={40}
              color="red"
              onPress={() => toggleModal(false)}
            />
          </View>

          <View style={styles.body}>
            <Text style={styles.label}>Select language:</Text>

            <Picker
              selectedValue={selectedLanguage}
              onValueChange={handleLanguageChange}
              style={styles.picker}
            >
              <Picker.Item
                label="English"
                value="en-US"
                style={{
                  fontSize: 20,
                  fontStyle: fontStyle.normal,
                }}
              />
              <Picker.Item
                label="සිංහල"
                value="si-LK"
                style={{
                  fontSize: 20,
                  fontStyle: fontStyle.normal,
                }}
              />
            </Picker>
          </View>
          <TouchableOpacity
            style={styles.savebtnContainer}
            onPress={onSaveBtnHandler}
          >
            <Text style={styles.saveBtnText}>Save Settings</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
  },
  modalContent: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 100,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  headerText: {
    fontSize: 40,
    fontWeight: "bold",
    fontFamily: fontFamily.titleText,
  },
  body: {
    padding: 20,
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
    fontFamily: fontFamily.normalText,
  },
  picker: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  savebtnContainer: {
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colorVariants.dodgerblue,
    width: 200,
    padding: 10,
    top: 120,
    alignSelf: "center",
  },
  saveBtnText: {
    fontFamily: fontFamily.normalText,
    fontSize: 20,
    color: colorVariants.white,
  },
});
