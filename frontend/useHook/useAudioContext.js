import { useContext, useEffect } from "react";
import { AudioContext } from "../context/audioProvider";
import { addDurationsToMediaList } from "../assets/audioFiles/audioIndex";

export const UseAudioContext = () => {
  const audioContext = useContext(AudioContext);

  return { ...audioContext };
};
