import { useContext, useEffect } from "react";
import { UserContext } from "../context/userContext";

export const UseUserContext = () => {
  const { dispatch, user } = useContext(UserContext);

  function setUser(user) {
    dispatch({
      type: "SetUser",
      payload: user,
    });
  }

  const doesUserExistInContext = () => {
    return user && user?.userName;
  };

  return {
    dispatch,
    user,
    setUser,
    doesUserExistInContext,
  };
};
