import { useReducer, createContext } from "react";

export const SpeechContext = createContext();

export const SpeechContextProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "setSpeechText":
        return { ...state, speechText: action.payload.speechText };
      case "clearSpeechText":
        return { ...state, speechText: "" };
      case "setVoice":
        return { ...state, voice: action.payload.voice };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    speechText: "",
    voice: {},
  });

  return (
    <SpeechContext.Provider value={{ ...state, dispatch }}>
      {children}
    </SpeechContext.Provider>
  );
};
