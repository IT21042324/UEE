import { useContext } from "react";
import { MuteContext } from "../context/muteContext";

export const UseMuteContext = () => {
  const muteContext = useContext(MuteContext);
  const { dispatch, muted } = muteContext;

  return { dispatch, muted };
};
