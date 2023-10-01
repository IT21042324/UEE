import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Header } from "../component/header";
import { screenTitles } from "../constants/strings";
import { colorVariants } from "../constants/globalConstants";
import { StorySelectionScreen } from "../screen/game/storySelection";
import { CinderellaStoryPage } from "../screen/game/story/cinderellaStory";

const screens = {
  StoreSelection: {
    screen: StorySelectionScreen,
    navigationOptions: {
      headerTitle: () => <Header title={screenTitles.StorySelection} />,
    },
  },
  CinderellaStory: {
    screen: CinderellaStoryPage,

    navigationOptions: {
      headerTitle: () => <Header title={screenTitles.CinderellaStory} />,
    },
  },
};

const stackNavigator = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: colorVariants.black,
    headerStyle: {
      height: 70,
    },
  },
});

export default createAppContainer(stackNavigator);
