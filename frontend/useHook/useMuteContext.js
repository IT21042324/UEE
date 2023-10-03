import { useContext } from "react";
import { MuteContext } from "../context/muteContext";

export const UseMuteContext = () => {
  const muteContext = useContext(MuteContext);
  const { dispatch, muted } = muteContext;

  const mute = () => {
    dispatch({ type: "mute" });
  };

  const unMute = () => {
    dispatch({ type: "unmute" });
  };

  return { dispatch, muted, mute, unMute };
};
