import * as Font from "expo-font";
import { globalStyles } from "./styles/global";
import Navigator from "./routes/navigation";
import { Layout as RapiLayout } from "react-native-rapi-ui";
import { MenuProvider } from "react-native-popup-menu";
import { ThemeProvider } from "react-native-elements";
import { SafeAreaView } from "react-native";
import { useEffect, useState } from "react";
import { AppGeneralSettingsContextProvider } from "./context/generalSettingsContext";
import { CustomToast } from "./component/games/customToast";
import { SpeechContextProvider } from "./context/speechContext";
import * as SplashScreen from "expo-splash-screen";
import Toast from "react-native-toast-message";
import { UserContextProvider } from "./context/userContext";
import { PaperProvider } from "react-native-paper";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await SplashScreen.preventAutoHideAsync();
      await Font.loadAsync({
        "ubuntu-regular": require("./assets/fonts/Ubuntu-Regular.ttf"),
        "ubuntu-bold": require("./assets/fonts/Ubuntu-Bold.ttf"),
      });
      setFontsLoaded(true);
      await SplashScreen.hideAsync();
    }
    loadFonts();
  }, []);

  if (fontsLoaded) {
    return (
      <SafeAreaView style={globalStyles.container}>
        <PaperProvider>
          <RapiLayout>
            <MenuProvider>
              <ThemeProvider>
                <UserContextProvider>
                  <AppGeneralSettingsContextProvider>
                    <SpeechContextProvider>
                      <Toast />
                      <Navigator />
                      <CustomToast />
                    </SpeechContextProvider>
                  </AppGeneralSettingsContextProvider>
                </UserContextProvider>
              </ThemeProvider>
            </MenuProvider>
          </RapiLayout>
        </PaperProvider>
      </SafeAreaView>
    );
  } else {
    return null;
  }
}
