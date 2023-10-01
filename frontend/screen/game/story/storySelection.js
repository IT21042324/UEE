import { StyleSheet, View } from "react-native";
import { StoryOptionCard } from "../../../component/games/story/storyOptionCard";
import { FlatList } from "react-native";
import { storySelectionOptions } from "../../../constants/strings";
import { Divider } from "@rneui/themed";

export const StorySelectionScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={storySelectionOptions}
        keyExtractor={(item) => item.ref}
        numColumns={3}
        renderItem={({ item }) => (
          <StoryOptionCard option={item.ref} title={item.title} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 30,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
