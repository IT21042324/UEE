import { useContext, useState } from "react";
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
    setDispatchToMute();
    setInitialSpeechText(speechText);
    stopSpeaking();
  };

  const unMute = () => {
    setDispatchToUnMute();

    if (initialSpeechText) {
      setSpeechText(initialSpeechText);
    }
    startSpeaking();
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