import * as Speech from "expo-speech";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, Text } from "react-native";
import { getSettings, mergeSettings } from "../asyncStorage/asyncStorage";
import { UseUserContext } from "../useHook/useUserContext";

export default function LoadingScreen({ navigation }) {
  const [loading, setLoading] = useState(true);

  const [language, setLanguage] = useState("en-US");

  const [isLoadingLanguage, setIsLoadingLanguage] = useState(true);

  const { setUser, doesUserExistInContext } = UseUserContext();

  useEffect(() => {
    setIsLoadingLanguage(true);

    const loadLanugageSettings = async () => {
      const settings = await getSettings();

      settings?.language
        ? setLanguage(settings.language)
        : mergeSettings({ language: "en-US" });

      !doesUserExistInContext() && setUser(settings.studentInfo);

      setIsLoadingLanguage(false);
    };
    loadLanugageSettings();
  }, []);

  useEffect(() => {
    const loadVoices = async () => {
      const voices = await Speech.getAvailableVoicesAsync();

      if (voices.length) {
        const voice = voices.find((v) => v.language === language);

        // setVoice(voice);

        await mergeSettings({ voice });

        setLoading(false);
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

          // setVoice(voice1);
          await mergeSettings({ voice: voice1 });

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
      navigation.replace("StudentSelection");
    }
  }, [loading]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>Loading voices...</Text>
      <ActivityIndicator size="large" color="#0000ff" />
    </ScrollView>
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
