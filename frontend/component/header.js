import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";
import { Ionicons } from "@expo/vector-icons";
import { UseAppGeneralSettingsContext } from "../useHook/generalSettingsContext";

export const Header = ({ title, muteButton }) => {
  const { muted, mute, unMute } = UseAppGeneralSettingsContext();

  const muteOnPressHandler = () => {
    muted ? unMute() : mute();
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.volumeIcon} onPress={muteOnPressHandler}>
        {muted ? (
          <Ionicons name="volume-mute" size={40} color="black" />
        ) : (
          <Ionicons name="volume-high" size={40} color="black" />
        )}
      </TouchableOpacity>
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
});
