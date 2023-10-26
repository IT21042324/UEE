import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { screenTitles } from "../constants/commonStrings";

export const CustomHeaderBackButton = ({ navigation, title }) => {
  const navigationHandler = () => {
    if (title === screenTitles.StorySelection || title === "PlayList")
      navigation.replace("StudentSelection");
    else if (storyTitleValidator(title)) navigation.replace("StorySelection");
  };

  const storyTitleValidator = (title) => {
    return (
      title === screenTitles.CinderellaStory ||
      title === screenTitles.RapunzelStory ||
      title === screenTitles.HerculesStory
    );
  };

  return (
    <TouchableOpacity>
      <Ionicons
        name="ios-arrow-back-outline"
        size={35}
        color="black"
        onPress={navigationHandler}
      />
    </TouchableOpacity>
  );
};
