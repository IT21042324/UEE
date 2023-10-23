import { useContext, useEffect, useState } from "react";
import { AppGeneralSettingsContext } from "../context/generalSettingsContext";
import { UseSpeechContext } from "./useSpeechContext";

export const UseAppGeneralSettingsContext = () => {
  const { startSpeaking, stopSpeaking } = UseSpeechContext();

  const appGeneralSettingsContext = useContext(AppGeneralSettingsContext);
  const { dispatch, muted, language } = appGeneralSettingsContext;

  const setDispatchToMute = () => {
    dispatch({ type: "mute" });
  };

  const setDispatchToUnMute = () => {
    dispatch({ type: "unmute" });
  };

  const mute = () => {
    stopSpeaking();

    setDispatchToMute();
  };

  const unMute = (thingsToSay) => {
    startSpeaking(thingsToSay);
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
