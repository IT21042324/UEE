import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";
import { Ionicons } from "@expo/vector-icons";
import { UseAppGeneralSettingsContext } from "../useHook/generalSettingsContext";
import { UseSpeechContext } from "../useHook/useSpeechContext";
import { CustomHeaderBackButton } from "./headerBackButton";
import { screenTitles } from "../constants/commonStrings";

export const Header = ({ title, navigation }) => {
  const { muted, mute, unMute } = UseAppGeneralSettingsContext();
  const { speechText } = UseSpeechContext();

  const muteOnPressHandler = () => {
    muted ? unMute(speechText) : mute();
  };

  return (
    <View style={styles.header}>
      {title !== "Welcome" &&
        title !== screenTitles.MainMenu &&
        title !== "Loading" && (
          <TouchableOpacity style={styles.backBtn} onPress={muteOnPressHandler}>
            <CustomHeaderBackButton navigation={navigation} title={title} />
          </TouchableOpacity>
        )}

      {title !== "Welcome" && (
        <TouchableOpacity
          style={styles.volumeIcon}
          onPress={muteOnPressHandler}
        >
          {muted ? (
            <Ionicons name="volume-mute" size={40} color="black" />
          ) : (
            <Ionicons name="volume-high" size={40} color="black" />
          )}
        </TouchableOpacity>
      )}

      <View>
        <Text style={globalStyles.titleText}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    letterSpacing: 1,
  },
  volumeIcon: {
    position: "absolute",
    right: 0,
  },
  backBtn: {
    marginRight: 30,
    left: 0,
  },
});
