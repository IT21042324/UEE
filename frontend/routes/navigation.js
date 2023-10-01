import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Header } from "../component/header";
import { screenTitles } from "../constants/strings";
import { colorVariants } from "../constants/globalConstants";
import { StorySelectionScreen } from "../screen/game/story/storySelection";

const screens = {
  StoreSelection: {
    screen: StorySelectionScreen,
    navigationOptions: {
      headerTitle: () => <Header title={screenTitles.StorySelection} />,
    },
  },
};

const stackNavigator = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: colorVariants.white,
    headerStyle: {
      height: 70,
    },
  },
});

export default createAppContainer(stackNavigator);
