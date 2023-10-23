import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import Toast from "react-native-toast-message";
import {
  getSettings,
  mergeSettings,
  removeStudentInfo,
} from "../asyncStorage/asyncStorage";
import {
  colorVariants,
  fontFamily,
  fontStyle,
} from "../constants/globalConstants";
import { SinhalaString } from "../constants/sinhalaString";
import { EnglishString } from "../constants/strings";
import { UseGeneralSpeechCombination } from "../useHook/mergeSpeechAndGeneralSettings";

export const SettingsModal = ({ toggleModal, navigation }) => {
  const [strings, setStrings] = useState(EnglishString());

  useEffect(() => {
    async function loadStrings() {
      const settings = await getSettings();
      if (settings?.language) {
        if (settings.language === "si-LK") setStrings(SinhalaString());
      }
    }
    loadStrings();
  }, []);

  const [selectedLanguage, setSelectedLanguage] = useState("en-US");
  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  const { stopSpeaking } = UseGeneralSpeechCombination();

  const onSaveBtnHandler = async () => {
    await mergeSettings({ language: selectedLanguage });

    stopSpeaking();

    navigation.replace("LoadingScreen");

    toggleModal(false);

    Toast.show({
      type: "success",
      position: "bottom",
      text1: "Settings Saved",
      visibilityTime: 1000,
    });
  };

  const onLogoutBtnHandler = async () => {
    Alert.alert(
      strings.settingsModal.logout,
      strings.settingsModal.logoutConfirmation,
      [
        {
          text: strings.settingsModal.cancel,
          onPress: () => console.log(strings.settingsModal.cancelPress),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: async () => {
            await removeStudentInfo();

            stopSpeaking();

            toggleModal(false);
            navigation.replace("LoginAndSignup");
          },
        },
      ]
    );
  };

  return (
    <View style={{ flex: 1, position: "absolute" }}>
      <Modal style={styles.modal} isVisible={true}>
        <View style={styles.modalContent}>
          <View style={styles.header}>
            <Text style={styles.headerText}>
              {strings.settingsModal.settings}
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: 100,
              }}
            >
              <MaterialCommunityIcons
                name="logout"
                size={40}
                color="red"
                onPress={onLogoutBtnHandler}
              />

              <AntDesign
                name="closecircleo"
                size={40}
                color="red"
                onPress={() => toggleModal(false)}
              />
            </View>
          </View>

          <View style={styles.body}>
            <Text style={styles.label}>
              {strings.settingsModal.selectedLanguage}
            </Text>

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
            <Text style={styles.saveBtnText}>
              {strings.settingsModal.saveSettings}
            </Text>
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
  logoutBtnContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colorVariants.red,
    width: 200,
    padding: 10,
    marginTop: 20,
    left: 20,
  },
  logoutBtnText: {
    fontFamily: fontFamily.normalText,
    fontSize: 20,
    color: colorVariants.white,
  },
});
