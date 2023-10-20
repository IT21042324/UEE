import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Header } from "../component/header";
import { colorVariants } from "../constants/globalConstants";
import { StorySelectionScreen } from "../screen/game/storySelection";
import { CinderellaStoryPage } from "../screen/game/story/cinderellaStory";
import { RapunzelStoryPage } from "../screen/game/story/rapunzelStory";
import { HerculesStoryPage } from "../screen/game/story/herculesStory";
import { GameCompletion } from "../screen/game/gameCompletion";
import { StudentSelectionScreen } from "../screen/studentSelection";
import LoadingScreen from "../screen/loading";
import { screenTitles } from "../constants/commonStrings";
import { LoginAndSignup } from "../screen/LoginAndSignup";
import HomePuzzle from "../screen/game/puzzle/HomePuzzle";

const screens = {
  LoginAndSignup: {
    screen: LoginAndSignup,
    navigationOptions: {
      headerTitle: () => <Header title={"Welcome"} />,
    },
  },
  LoadingScreen: {
    screen: LoadingScreen,
    navigationOptions: {
      headerTitle: () => <Header title={"Loading"} />,
      headerLeft: () => null,
    },
  },
  StudentSelection: {
    screen: StudentSelectionScreen,
    navigationOptions: {
      headerTitle: () => <Header title={screenTitles.MainMenu} />,
      headerLeft: () => null,
    },
  },
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
  //// Puzzle ////
  PuzzleSelection: {
    screen: HomePuzzle,
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
