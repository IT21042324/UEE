import { useContext, useEffect, useState } from "react";
import { SpeechContext } from "../context/speechContext";
import * as Speech from "expo-speech";

export const UseSpeechContext = () => {
  const speechContext = useContext(SpeechContext);
  const { dispatch, speechText, voice } = speechContext;

  const speechOptions = {
    rate: 0.8,
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
    const text = thingsToSay || speechText;
    setSpeechText(text);

    const options = voice?.name
      ? { voice: voice.name, ...speechOptions }
      : { ...speechOptions };
    Speech.speak(text, options);
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
