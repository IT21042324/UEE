import { useReducer, createContext } from "react";

export const MuteContext = createContext();

export const MuteContextProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "mute":
        return {
          muted: true,
        };
      case "unmute":
        return {
          muted: false,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    muted: false,
  });

  return (
    <MuteContext.Provider value={{ muted: state.muted, dispatch }}>
      {children}
    </MuteContext.Provider>
  );
};
