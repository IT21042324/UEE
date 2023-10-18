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
      case "setLanguage": {
        return { ...state, language: action.payload.language };
      }
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    speechText: "",
    voice: {},
    language: "en-US",
  });

  return (
    <SpeechContext.Provider value={{ ...state, dispatch }}>
      {children}
    </SpeechContext.Provider>
  );
};
