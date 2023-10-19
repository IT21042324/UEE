import axios from "axios";

export const UseBackendAPI = () => {
  const BACKENDURL = "https://uee-backend-hvq8.onrender.com";

  return {
    signup: async function (insertionData) {
      try {
        const info = await axios.post(
          `${BACKENDURL}/api/users/signup`,
          insertionData
        );
        console.log(2);
        return info.data;
      } catch (err) {
        console.log(3);
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
  };
};
