import axios from "axios";
import { UseUserContext } from "../useHook/useUserContext";

export const UseBackendAPI = () => {
  const BACKENDURL = "https://uee-backend-hvq8.onrender.com";

  const { user } = UseUserContext();
  const { token } = user;

  return {
    signup: async function (insertionData) {
      try {
        const info = await axios.post(
          `${BACKENDURL}/api/users/signup`,
          insertionData
        );
        return info.data;
      } catch (err) {
        console.log(err);
      }
    },

    login: async function (insertionData) {
      try {
        const info = await axios.post(
          `${BACKENDURL}/api/users/login`,
          insertionData
        );
        return info.data;
      } catch (err) {
        console.log(err);
      }
    },

    saveProgress: async (progressData) => {
      try {
        const { data } = await axios.post(
          `${BACKENDURL}/api/progress`,
          progressData
        );
        return data;
      } catch (err) {
        console.log(err);
      }
    },
  };
};
