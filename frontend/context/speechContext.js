import { useReducer, createContext } from "react";

export const SpeechContext = createContext();

export const SpeechContextProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "setSpeechText":
        return {
          speechText: action.payload,
        };
      case "clearSpeechText":
        return {
          speechText: "",
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    speechText: "",
  });

  return (
    <SpeechContext.Provider value={{ speechText: state.speechText, dispatch }}>
      {children}
    </SpeechContext.Provider>
  );
};
