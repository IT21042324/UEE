import { Animated, FlatList, StyleSheet, Text, View } from "react-native";
import { EnglishString } from "../constants/strings";
import { StudentMainManuSelectionCard } from "../component/studentSelectionCard";
import { Divider } from "@rneui/themed";
import { ExpandingDot } from "react-native-animated-pagination-dots";
import { useEffect, useRef, useState } from "react";
import { UseSpeechContext } from "../useHook/useSpeechContext";
import { SettingsModal } from "../component/settingsModal";
import { UseAppGeneralSettingsContext } from "../useHook/generalSettingsContext";
import { getSettings } from "../asyncStorage/asyncStorage";
import { SinhalaString } from "../constants/sinhalaString";

export const StudentSelectionScreen = ({ navigation }) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const { startSpeaking, stopSpeaking } = UseSpeechContext();
  const { muted } = UseAppGeneralSettingsContext();

  const [strings, setStrings] = useState(EnglishString());

  useEffect(() => {
    async function loadStrings() {
      const settings = await getSettings();
      if (settings?.language) {
        if (settings.language === "si-LK") setStrings(SinhalaString());
      }
    }
    loadStrings();

    const onFocus = navigation.addListener("didFocus", () => {
      if (!muted) {
        stopSpeaking();
        const speak = async () => {
          await startSpeaking(strings.studentSelectionSpeech.english);
        };
        speak();
      }
    });

    const onBlur = navigation.addListener("willBlur", () => {
      stopSpeaking();
    });

    return () => {
      onFocus.remove();
      onBlur.remove();
    };
  }, []);

  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = (status) => {
    setModalVisible(status);
  };

  return (
    <View style={styles.mainContainer}>
      {modalVisible && <SettingsModal toggleModal={toggleModal} />}

      <View styles={styles.welcomeContiner}>
        <Text style={styles.welcomeContinerText}>Welcome Nimal</Text>
        <Divider width={2} />
      </View>

      <View style={{ flex: 1 }}>
        <FlatList
          data={strings.studentSelectionOptions}
          keyExtractor={(item) => item.title}
          contentContainerStyle={styles.flatListStyle}
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            }
          )}
          horizontal
          decelerationRate={"normal"}
          scrollEventThrottle={4}
          renderItem={({ item }) => (
            <StudentMainManuSelectionCard
              Icon={item.Icon}
              title={item.title}
              navigation={navigation}
              toggleModal={toggleModal}
            />
          )}
          snapToAlignment={"start"}
          snapToInterval={400}
        />

        <ExpandingDot
          data={strings.studentSelectionOptions}
          expandingDotWidth={30}
          scrollX={scrollX}
          inActiveDotOpacity={0.6}
          dotStyle={{
            width: 10,
            height: 10,
            backgroundColor: "#347af0",
            borderRadius: 5,
            marginHorizontal: 5,
          }}
          containerStyle={{
            position: "absolute",
            bottom: 30,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 10,
    padding: 10,
    alignItems: "center",
  },
  flatListStyle: {
    flexDirection: "row",
    alignSelf: "center",
  },
  welcomeContiner: {
    backgroundColor: "red",
    width: "100%",
  },
  welcomeContinerText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#000",
    width: "100%",
    marginTop: 30,
  },
  popup: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
});
