import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Header } from "../component/header";
import { screenTitles } from "../constants/commonStrings";
import { colorVariants } from "../constants/globalConstants";
import { LoginAndSignup } from "../screen/LoginAndSignup";
import { GameCompletion } from "../screen/game/gameCompletion";
import StartPuzzle from "../screen/game/puzzle/ChooseBigOne/StartPuzzle";
import StartColorPuzzle from "../screen/game/puzzle/ChooseTheColor/StartColorPuzzle";
import StartOddPuzzle from "../screen/game/puzzle/ChooseTheOddOne/StartOddPuzzle";
import HomePuzzle from "../screen/game/puzzle/HomePuzzle";
import { CinderellaStoryPage } from "../screen/game/story/cinderellaStory";
import { HerculesStoryPage } from "../screen/game/story/herculesStory";
import { RapunzelStoryPage } from "../screen/game/story/rapunzelStory";
import { StorySelectionScreen } from "../screen/game/storySelection";
import LoadingScreen from "../screen/loading";
import { StudentSelectionScreen } from "../screen/studentSelection";
import { PlayListNavigator } from "../screen/game/playlist/playListNavigator";

const screens = {
  LoginAndSignup: {
    screen: LoginAndSignup,
    navigationOptions: {
      headerTitle: () => <Header title={"Welcome"} />,
      headerLeft: () => null,
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
    navigationOptions: ({ navigation }) => ({
      headerTitle: () => (
        <Header title={screenTitles.StorySelection} navigation={navigation} />
      ),
      headerLeft: () => null,
    }),
  },
  CinderellaStory: {
    screen: CinderellaStoryPage,

    navigationOptions: ({ navigation }) => ({
      headerTitle: () => (
        <Header title={screenTitles.CinderellaStory} navigation={navigation} />
      ),
      headerLeft: () => null,
    }),
  },
  RapunzelStory: {
    screen: RapunzelStoryPage,

    navigationOptions: ({ navigation }) => ({
      headerTitle: () => (
        <Header title={screenTitles.RapunzelStory} navigation={navigation} />
      ),
      headerLeft: () => null,
    }),
  },
  HerculesStory: {
    screen: HerculesStoryPage,

    navigationOptions: ({ navigation }) => ({
      headerTitle: () => (
        <Header title={screenTitles.HerculesStory} navigation={navigation} />
      ),
      headerLeft: () => null,
    }),
  },
  GameCompletion: {
    screen: GameCompletion,

    navigationOptions: {
      headerTitle: () => <Header title={screenTitles.GameCompletion} />,
      headerLeft: () => null,
    },
  },
  PlayListSelection: {
    screen: PlayListNavigator,
    navigationOptions: {
      headerTitle: () => <Header title={"PlayList"} />,
      headerLeft: () => null,
    },
  },
  //// Puzzle ////
  PuzzleSelection: {
    screen: HomePuzzle,
  },

  StartPuzzle: {
    screen: StartPuzzle,
  },

  StartColorPuzzle: {
    screen: StartColorPuzzle,
  },

  StartOddPuzzle: {
    screen: StartOddPuzzle,
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
