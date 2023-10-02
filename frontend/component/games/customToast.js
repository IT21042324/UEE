// App.jsx
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";

/*
  1. Create the config
*/
export const toastConfig = {
  /*
    Overwrite 'success' type,
    by modifying the existing `BaseToast` component
  */
  success: (props) => (
    <BaseToast
      {...props}
      style={{ backgroundColor: "green", height: 80, width: "100%" }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        color: "white",
        fontSize: 40,
        fontWeight: "400",
      }}
    />
  ),
  /*
    Overwrite 'error' type,
    by modifying the existing `ErrorToast` component
  */
  error: (props) => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: 17,
      }}
      text2Style={{
        fontSize: 15,
      }}
    />
  ),

  tomatoToast: ({ text1, props }) => (
    <View style={{ height: 500, width: "100%", backgroundColor: "orange" }}>
      <Text>{text1}</Text>
      <Text>{props.uuid}</Text>
    </View>
  ),
};

/*
  2. Pass the config as prop to the Toast component instance
*/
export function CustomToast() {
  return <Toast config={toastConfig} />;
}
