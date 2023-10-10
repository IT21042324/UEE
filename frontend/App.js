import * as Font from "expo-font";
import Toast from "react-native-toast-message";
import { globalStyles } from "./styles/global";
import Navigator from "./routes/navigation";
import { Layout as RapiLayout } from "react-native-rapi-ui";
import { MenuProvider } from "react-native-popup-menu";
import { ThemeProvider } from "react-native-elements";
import { SafeAreaView } from "react-native";
import { useState } from "react";
import { AppGeneralSettingsContextProvider } from "./context/generalSettingsContext";
import AppLoading from "expo-app-loading";
import { CustomToast } from "./component/games/customToast";
import { SpeechContextProvider } from "./context/speechContext";

const getFonts = () =>
  Font.loadAsync({
    "ubuntu-regular": require("./assets/fonts/Ubuntu-Regular.ttf"),
    "ubuntu-bold": require("./assets/fonts/Ubuntu-Bold.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <SafeAreaView style={globalStyles.container}>
        <RapiLayout>
          <MenuProvider>
            <ThemeProvider>
              <AppGeneralSettingsContextProvider>
                <SpeechContextProvider>
                  <Navigator />
                  <CustomToast />
                </SpeechContextProvider>
              </AppGeneralSettingsContextProvider>
            </ThemeProvider>
          </MenuProvider>
        </RapiLayout>
      </SafeAreaView>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={(error) => console.error(error)}
      />
    );
  }
}
