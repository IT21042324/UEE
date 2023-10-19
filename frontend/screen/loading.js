import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import * as Speech from "expo-speech";
import { UseSpeechContext } from "../useHook/useSpeechContext";
import { getSettings, saveSettings } from "../asyncStorage/asyncStorage";

export default function LoadingScreen({ navigation, route }) {
  const [loading, setLoading] = useState(true);
  const { setVoice } = UseSpeechContext();

  const [language, setLanguage] = useState("en-US");

  const [isLoadingLanguage, setIsLoadingLanguage] = useState(true);

  const { load } = route?.params || {};

  console.log(load);

  useEffect(() => {
    setIsLoadingLanguage(true);

    const loadLanugageSettings = async () => {
      const settings = await getSettings();

      settings?.language
        ? setLanguage(settings.language)
        : saveSettings({ language: "en-US" });

      setIsLoadingLanguage(false);
    };
    loadLanugageSettings();
  }, [load]);

  useEffect(() => {
    const loadVoices = async () => {
      console.log(language);

      const voices = await Speech.getAvailableVoicesAsync();

      if (voices.length) {
        const voice = voices.find((v) => v.language === language);

        setVoice(voice);
        setLoading(false);
        console.log(voice);
      } else {
        console.log("No Voices Available. Trying again to get voices...");
        console.log("Waiting 1000ms");
        let tryAgainResult = [];
        for (let x = 0; x <= 10; x++) {
          await new Promise((resolve) => {
            setTimeout(() => {
              console.log("Trying Again. Retried ", x + 1, " times.");
              resolve(null);
            }, 1000);
          });
          const _availableVoices = await Speech.getAvailableVoicesAsync();
          if (_availableVoices.length) {
            tryAgainResult = _availableVoices;
            console.log("Apparently Had Success Trying. Voices");
            break;
          }
        }
        if (tryAgainResult.length) {
          const voice1 = tryAgainResult.find((v) => v.language === language);

          setVoice(voice1);
          setLoading(false);
          console.log(voice1);
        } else {
          console.log("No Voices Available. Ending the search...");
          setLoading(false);
        }
      }
    };
    loadVoices();
  }, [isLoadingLanguage]);

  useEffect(() => {
    if (!loading) {
      navigation.navigate("StudentSelection");
    }
  }, [loading]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Loading voices...</Text>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginBottom: 20,
    fontSize: 20,
  },
});
