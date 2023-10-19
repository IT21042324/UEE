import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { fontFamily } from "../constants/globalConstants";
import { UseBackendAPI } from "../api/useBackendAPI";
import { UseUserContext } from "../useHook/useUserContext";

export const LoginAndSignup = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showTeacherSignup, setShowTeacherSignup] = useState(true);
  const [loginErrors, setLoginErrors] = useState("");

  const { signup, login } = UseBackendAPI();
  const { setUser } = UseUserContext();

  const handleLogin = () => {};

  const handleTeacherSignup = async () => {
    try {
      const signupDetails = await signup({
        userName,
        password,
        userType: "teacher",
      });

      setUser(signupDetails);
    } catch (err) {
      console.log("first");
      setLoginErrors("User name already exists");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {showTeacherSignup ? "Enter Your Credentials To Login" : "Quick Singup"}
      </Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="user name"
          value={userName}
          onChangeText={setUserName}
        />
        <TextInput
          style={styles.input}
          placeholder="password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        {loginErrors && (
          <View style={styles.verificationContainer}>
            <Text
              style={{
                fontFamily: fontFamily.normalText,
                fontSize: 15,
                color: "red",
              }}
            >
              {loginErrors}
            </Text>
          </View>
        )}

        {showTeacherSignup ? (
          <TouchableOpacity
            style={styles.signupLink}
            onPress={() => setShowTeacherSignup(false)}
          >
            <Text style={styles.signupLinkText}>sign up as a teacher?</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.signupLink}
            onPress={() => setShowTeacherSignup(true)}
          >
            <Text style={styles.signupLinkText}>login?</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            if (showTeacherSignup) {
              handleLogin();
            } else {
              handleTeacherSignup();
            }
          }}
        >
          {showTeacherSignup ? (
            <Text style={styles.loginButtonText}>Log In</Text>
          ) : (
            <Text style={styles.loginButtonText}>Sign Up</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 32,
  },
  form: {
    width: "80%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  verificationContainer: {
    marginTop: 20,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButton: {
    backgroundColor: "#007AFF",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  signupButton: {
    backgroundColor: "#ccc",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    marginBottom: 16,
  },
  signupButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  signupLink: {
    alignSelf: "flex-end",
    marginBottom: 16,
  },
  signupLinkText: {
    color: "#007AFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});