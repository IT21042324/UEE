import { useContext } from "react";
import { SpeechContext } from "../context/speechContext";
import * as Speech from "expo-speech";

export const UseSpeechContext = () => {
  const speechContext = useContext(SpeechContext);
  const { dispatch, speechText } = speechContext;

  const setSpeechText = (payload) => {
    dispatch({ type: "setSpeechText", payload });
  };

  const clearSpeechText = () => {
    dispatch({ type: "clearSpeechText" });
  };

  const startSpeaking = (thingsToSay) => {
    setSpeechText(thingsToSay);

    if (speechText) {
      Speech.speak(speechText);
    } else {
      Speech.speak(thingsToSay);
    }
  };

  const stopSpeaking = () => {
    Speech.stop();
  };

  return {
    speechDispatch: dispatch,
    setSpeechText,
    clearSpeechText,
    speechText: speechContext.speechText,
    startSpeaking,
    stopSpeaking,
  };
};
