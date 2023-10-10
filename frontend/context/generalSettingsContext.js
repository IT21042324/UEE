import { useReducer, createContext } from "react";

export const AppGeneralSettingsContext = createContext();

export const AppGeneralSettingsContextProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "mute":
        return {
          ...state,
          muted: true,
        };
      case "unmute":
        return {
          ...state,
          muted: false,
        };
      case "setLanguage":
        return {
          ...state,
          language: action.payload.language,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    muted: false,
    language: "english",
  });

  return (
    <AppGeneralSettingsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppGeneralSettingsContext.Provider>
  );
};
