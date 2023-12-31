import { useContext, useEffect } from "react";
import { SpeechContext } from "../context/speechContext";
import * as Speech from "expo-speech";
import { getSettings } from "../asyncStorage/asyncStorage";
import { LogBox } from "react-native";

export const UseSpeechContext = () => {
  const speechContext = useContext(SpeechContext);
  const { dispatch, speechText, voice } = speechContext;

  const speechOptions = {
    rate: 0.6,
    pitch: 1,
  };

  const setSpeechText = (speechText) => {
    dispatch({ type: "setSpeechText", payload: { speechText } });
  };

  const clearSpeechText = () => {
    dispatch({ type: "clearSpeechText" });
  };

  const setVoice = (voiceObj) => {
    dispatch({ type: "setVoice", payload: { voice: voiceObj } });
  };

  const getVoice = () => {
    return voice;
  };

  const startSpeaking = async (thingsToSay) => {
    LogBox.ignoreAllLogs(true);
    const voice = await getSettings("voice");

    setSpeechText(thingsToSay);

    const options = voice?.name
      ? { voice: voice.name, ...speechOptions }
      : { ...speechOptions };

    Speech.speak(thingsToSay, options);

    LogBox.ignoreAllLogs(false);
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
    setVoice,
    getVoice,
  };
};
