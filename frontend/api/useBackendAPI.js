import axios from "axios";

export const UseBackendAPI = () => {
  return {
    signup: async (signupDetails) => {
      try {
        const { data } = await axios.post(
          "http://localhost:8084/api/users/signup",
          signupDetails
        );
        return data;
      } catch (err) {
        console.log(err);
      }
    },

    login: async (loginDetails) => {
      try {
        const { data } = await axios.post(
          "http://localhost:8084/api/users/login",
          loginDetails
        );
        return data;
      } catch (err) {
        console.log(err);
      }
    },
  };
};
