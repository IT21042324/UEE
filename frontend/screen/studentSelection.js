import { Animated, FlatList, StyleSheet, Text, View } from "react-native";
import {
  studentSelectionOptions,
  studentSelectionSpeech,
} from "../constants/strings";
import { StudentMainManuSelectionCard } from "../component/studentSelectionCard";
import { Divider } from "@rneui/themed";
import { ExpandingDot } from "react-native-animated-pagination-dots";
import { useEffect, useRef } from "react";
import { UseSpeechContext } from "../useHook/useSpeechContext";

export const StudentSelectionScreen = ({ navigation }) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const { startSpeaking } = UseSpeechContext();

  useEffect(() => {
    startSpeaking(studentSelectionSpeech.english);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <View styles={styles.welcomeContiner}>
        <Text style={styles.welcomeContinerText}>Welcome Nimal</Text>
        <Divider width={2} />
      </View>

      <View style={{ flex: 1 }}>
        <FlatList
          data={studentSelectionOptions}
          keyExtractor={(item) => item.ref}
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
            />
          )}
          snapToAlignment={"start"} // add this prop to align the items to the start of the list
          snapToInterval={400} // add this prop to snap to each item with a width of 400
        />

        <ExpandingDot
          data={studentSelectionOptions}
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
});
