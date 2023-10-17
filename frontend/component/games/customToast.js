import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";
import { Text } from "react-native";
import { Feather } from "@expo/vector-icons";

export const toastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      style={{
        backgroundColor: "#4CAF50",
        borderRadius: 10,
        height: 80,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
      }}
    >
      <Feather name="check" size={30} color="white" />
      <Text
        style={{
          color: "white",
          fontSize: 30,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Correct Answer!
      </Text>
    </BaseToast>
  ),
  error: (props) => (
    <ErrorToast
      {...props}
      style={{
        backgroundColor: "#F44336",
        borderRadius: 10,
        height: 80,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
      text1Style={{
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
      }}
    >
      <Feather name="x" size={30} color="white" />
      <Text
        style={{
          color: "white",
          fontSize: 30,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Wrong Answer!
      </Text>
    </ErrorToast>
  ),
};

export function CustomToast() {
  return <Toast config={toastConfig} />;
}
