import { useContext, useEffect, useState } from "react";
import { AppGeneralSettingsContext } from "../context/generalSettingsContext";
import { UseSpeechContext } from "./useSpeechContext";

export const UseAppGeneralSettingsContext = () => {
  const { setSpeechText, startSpeaking, stopSpeaking, speechText } =
    UseSpeechContext();

  const appGeneralSettingsContext = useContext(AppGeneralSettingsContext);
  const { dispatch, muted, language } = appGeneralSettingsContext;

  const [initialSpeechText, setInitialSpeechText] = useState("");

  const setDispatchToMute = () => {
    dispatch({ type: "mute" });
  };

  const setDispatchToUnMute = () => {
    dispatch({ type: "unmute" });
  };

  const mute = () => {
    setInitialSpeechText(speechText);
    stopSpeaking();
    setDispatchToMute();
  };

  useEffect(() => {
    if (initialSpeechText) {
      setSpeechText(initialSpeechText);
    }
  }, [unMute]);

  const unMute = () => {
    startSpeaking(speechText);
    setDispatchToUnMute();
  };

  const setLanguage = (newLanguage) => {
    dispatch({ type: "setLanguage", payload: { language: newLanguage } });
  };

  return {
    dispatch,
    muted,
    language,
    mute,
    unMute,
    setDispatchToMute,
    setDispatchToUnMute,
    setLanguage,
  };
};
