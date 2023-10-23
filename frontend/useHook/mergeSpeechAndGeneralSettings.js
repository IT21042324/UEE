import { LogBox } from "react-native";
import { UseAppGeneralSettingsContext } from "./generalSettingsContext";
import { UseSpeechContext } from "./useSpeechContext";

export const UseGeneralSpeechCombination = () => {
  const { muted } = UseAppGeneralSettingsContext();
  const speechContext = UseSpeechContext();

  const startSpeaking = async (thingsToSay) => {
    console.ignoredYellowBox = ["Warning: Each"];
    speechContext.setSpeechText(thingsToSay);

    if (!muted) {
      await speechContext.startSpeaking(thingsToSay);
    }
  };

  return {
    ...speechContext,
    stopSpeaking: speechContext.stopSpeaking,
    startSpeaking,
  };
};
