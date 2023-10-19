import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { fontFamily } from "../constants/globalConstants";
import { UseBackendAPI } from "../api/useBackendAPI";
import { UseUserContext } from "../useHook/useUserContext";
import Toast from "react-native-toast-message";
import { getSettings, saveLoginInfo } from "../asyncStorage/asyncStorage";
import { EnglishString } from "../constants/strings";
import { SinhalaString } from "../constants/sinhalaString";

export const LoginAndSignup = ({ navigation }) => {
  const [strings, setStrings] = useState(EnglishString());

  useEffect(() => {
    async function loadStrings() {
      const settings = await getSettings();
      if (settings?.language) {
        if (settings.language === "si-LK") setStrings(SinhalaString());
      }
    }
    loadStrings();
  }, []);

  useEffect(() => {
    async function loadSettings() {
      const settings = await getSettings();

      console.log(settings);
      if (settings?.studentInfo) {
        setUser(settings.studentInfo);
        navigation.navigate("LoadingScreen");
      }
    }

    loadSettings();
  }, []);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showTeacherSignup, setShowTeacherSignup] = useState(true);
  const [loginErrors, setLoginErrors] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { signup, login } = UseBackendAPI();
  const { setUser } = UseUserContext();

  const handleLogin = async () => {
    setIsLoading(true);
    const userInfo = await login({
      userName,
      password,
    });
    setIsLoading(false);

    if (userInfo?.userType === "student") {
      setUser(userInfo);

      saveLoginInfo({
        studentInfo: userInfo,
      });
      navigation.navigate("LoadingScreen");
    } else {
      Toast.show({
        type: "error",
        text1: strings.loginAndSignup.invalidCredentials,
      });
    }
  };

  const handleTeacherSignup = async () => {
    setIsLoading(true);
    const userInfo = await signup({
      userName,
      password,
      userType: "teacher",
    });
    setIsLoading(false);

    if (userInfo) {
      setUser(userInfo);

      saveLoginInfo({
        studentInfo: userInfo,
      });
    } else {
      Toast.show({
        type: "error",
        text1: strings.loginAndSignup.credentialsExist,
      });
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>
        {showTeacherSignup
          ? strings.loginAndSignup.enterCredentialsToLogin
          : strings.loginAndSignup.quickSignup}
      </Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder={strings.loginAndSignup.userName}
          value={userName}
          onChangeText={setUserName}
        />
        <TextInput
          style={styles.input}
          placeholder={strings.loginAndSignup.password}
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
            <Text style={styles.signupLinkText}>
              {strings.loginAndSignup.signUpTeacher}
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.signupLink}
            onPress={() => setShowTeacherSignup(true)}
          >
            <Text style={styles.signupLinkText}>
              {strings.loginAndSignup.login}
            </Text>
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
          {isLoading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : showTeacherSignup ? (
            <Text style={styles.loginButtonText}>
              {strings.loginAndSignup.btnLogin}
            </Text>
          ) : (
            <Text style={styles.loginButtonText}>
              {strings.loginAndSignup.btnSignup}
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    flexGrow: 1,
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
