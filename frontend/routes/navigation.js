import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Header } from "../component/header";
import { screenTitles } from "../constants/strings";
import { colorVariants } from "../constants/globalConstants";
import { StorySelectionScreen } from "../screen/game/storySelection";
import { CinderellaStoryPage } from "../screen/game/story/cinderellaStory";
import { RapunzelStoryPage } from "../screen/game/story/rapunzelStory";
import { HerculesStoryPage } from "../screen/game/story/herculesStory";
import { GameCompletion } from "../screen/game/gameCompletion";

const screens = {
  StorySelection: {
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
  RapunzelStory: {
    screen: RapunzelStoryPage,

    navigationOptions: {
      headerTitle: () => <Header title={screenTitles.RapunzelStory} />,
    },
  },
  HerculesStory: {
    screen: HerculesStoryPage,

    navigationOptions: {
      headerTitle: () => <Header title={screenTitles.HerculesStory} />,
    },
  },
  GameCompletion: {
    screen: GameCompletion,

    navigationOptions: {
      headerTitle: () => <Header title={screenTitles.GameCompletion} />,
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
