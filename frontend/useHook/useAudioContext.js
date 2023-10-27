import { useContext } from "react";
import { AudioContext } from "../context/audioProvider";

export const UseAudioContext = () => {
  const audioContext = useContext(AudioContext);

  return { ...audioContext };
};
