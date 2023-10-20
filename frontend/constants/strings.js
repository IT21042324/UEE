import {
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

import {
  HerculesStoryImages,
  RapunzelStoryImages,
  cinderellaOption,
  cinderellaStoryImages,
  herculesOption,
  rapunzelOption,
} from "../assets/images/imageIndex";
import { colorVariants } from "./globalConstants";

export const EnglishString = () => {
  return {
    screenTitles: {
      MainMenu: "Main Menu",
      StorySelection: "Story Selection",
      CinderellaStory: "Cinderella",
      RapunzelStory: "Rapunzel",
      HerculesStory: "Hercules",
      GameCompletion: "Stats",
    },
    storySelectionOptions: [
      { title: "Cinderella", ref: cinderellaOption },
      { title: "Rapunzel", ref: rapunzelOption },
      { title: "Hercules", ref: herculesOption },
    ],
    gameStats: [
      { text: "Story Completion Time", value: 0, unit: "minutes" },
      { text: "Incorrect Attmepts", value: 0, unit: "attempts" },
      {
        text: "Time spent on a question on average",
        value: 0,
        unit: "minutes",
      },
      { text: "Final Verdict", value: "Excellent" },
    ],
    gameCompletionText: {
      proceedToMainMenu: "Proceed To Main Menu",
      statistics: "Statistics",
    },
    settingsModal: {
      logout: "Logout",
      logoutConfirmation: "Do you want to logout?",
      cancel: "Cancel",
      cancelPress: "Cancel Pressed",
      settings: "Settings",
      selectedLanguage: "Select Language",
      saveSettings: "Save Settings",
    },
    loginAndSignup: {
      invalidCredentials: "Invalid Credentials",
      credentialsExist: "Username already exists",
      enterCredentialsToLogin: "Enter Your Credentials To Login",
      quickSignup: "Quick Signup",
      userName: "user name",
      password: "password",
      signUpTeacher: "sign up as a teacher?",
      login: "login?",
      btnLogin: "Log In",
      btnSignup: "Sign Up",
    },

    gameCompletion: {
      excellentJobVerdict: "Excellent job! You got all the questions right!",
      greatJobVerdict: "Great job! You did really well!",
      goodJobVerdict:
        "Good job! You did okay, but there's room for improvement.",
      practiseVerdict: "Keep practicing! You'll get better with time.",
      excellent: "Excellent",
      great: "Great",
      good: "Good",
      practise: "need more practise",
      failureToast:
        "Couldnt save data to database. Please check your connection",
    },

    CinderellaStoryContent: [
      {
        imageId: cinderellaStoryImages.cinderellaImage1,
        passageId: 1,
        passageContent:
          "Once upon a time, in a kingdom far, far away, there lived a kind and gentle girl named Cinderella. She had the kindest heart, but she had to do all the chores in her big house because her stepmother and stepsisters were not very nice to her. The only joy she had was her dog Bruno",
        questionBank: {
          easy: [
            {
              questionId: 1,
              question: "Who is the girl in the picture?",
              options: [
                "Cinderella",
                "Stepmother",
                "Stepsister",
                "Fairy Godmother",
              ],
              correctAnswer: "Cinderella",
            },
            {
              questionId: 2,
              question: "How is Cinderella feeling in the picture?",
              options: ["Sad", "Happy", "Angry", "Scared"],
              correctAnswer: "Happy",
            },
            {
              questionId: 3,
              question: "What is Cinderella doing with her hand?",
              options: [
                "Petting her dog",
                "Holding a broom",
                "Waving hello",
                "Clapping her hands",
              ],
              correctAnswer: "Petting her dog",
            },
            {
              questionId: 4,
              question: "What color is Cinderella's dress in the picture?",
              options: ["Blue", "Pink", "Green", "Yellow"],
              correctAnswer: "Blue",
            },
            {
              questionId: 5,
              question: "What is the name of Cinderella's dog?",
              options: ["Bruno", "Max", "Spot", "Rex"],
              correctAnswer: "Bruno",
            },
          ],
          medium: [
            {
              questionId: 1,
              question:
                "Why does Cinderella have to do all the chores in her big house?",
              options: [
                "Because she likes to be clean",
                "Because her stepmother and stepsisters are not very nice to her",
                "Because she wants to impress the prince",
                "Because she has nothing else to do",
              ],
              correctAnswer:
                "Because her stepmother and stepsisters are not very nice to her",
            },
            {
              questionId: 2,
              question: "How does Cinderella's dog make her feel?",
              options: ["Loved", "Annoyed", "Afraid", "Bored"],
              correctAnswer: "Loved",
            },
            {
              questionId: 3,
              question: "Where does Cinderella live in the picture?",
              options: [
                "In a castle",
                "In a cottage",
                "In a forest",
                "In a village",
              ],
              correctAnswer: "In a cottage",
            },
            {
              questionId: 4,
              question: "What does Cinderella dream of in the story?",
              options: [
                "Going to the ball",
                "Becoming a princess",
                "Traveling the world",
                "All of the above",
              ],
              correctAnswer: "All of the above",
            },
            {
              questionId: 5,
              question:
                "How do Cinderella's stepsisters treat her in the story?",
              options: [
                "They are kind and gentle to her",
                "They are mean and rude to her",
                "They are helpful and supportive to her",
                "They are funny and playful with her",
              ],
              correctAnswer: "They are mean and rude to her",
            },
          ],
        },
      },
      {
        imageId: cinderellaStoryImages.cinderellaImage2,
        passageId: 2,
        passageContent:
          "One sunny day, word came from the royal palace about a grand ball. Everyone was invited, even Cinderella's stepsisters. They were so excited and spent days picking out fancy dresses and practicing their dance moves. But poor Cinderella wasn't allowed to go, and it made her very sad.",
        questionBank: {
          easy: [
            {
              questionId: 1,
              question: "What was happening at the royal palace?",
              options: [
                "A grand ball",
                "A picnic",
                "A parade",
                "A birthday party",
              ],
              correctAnswer: "A grand ball",
            },
            {
              questionId: 2,
              question: "Who was invited to the grand ball?",
              options: [
                "Only Cinderella",
                "Only the stepsisters",
                "Everyone",
                "Nobody",
              ],
              correctAnswer: "Everyone",
            },
            {
              questionId: 3,
              question: "How did Cinderella feel about not going to the ball?",
              options: ["Happy", "Excited", "Sad", "Angry"],
              correctAnswer: "Sad",
            },
          ],
          medium: [
            {
              questionId: 1,
              question: "Why were Cinderella's stepsisters excited?",
              options: [
                "They were going on a picnic",
                "They were going to the ball",
                "They were going to school",
                "They were going on a vacation",
              ],
              correctAnswer: "They were going to the ball",
            },
            {
              questionId: 2,
              question: "What did Cinderella's stepsisters spend days doing?",
              options: [
                "Reading books",
                "Playing games",
                "Picking out fancy dresses",
                "Cooking",
              ],
              correctAnswer: "Picking out fancy dresses",
            },
            {
              questionId: 3,
              question: "Why wasn't Cinderella allowed to go to the ball?",
              options: [
                "She didn't want to go",
                "She had other plans",
                "Her stepsisters didn't invite her",
                "It's not mentioned in the story",
              ],
              correctAnswer: "Her stepsisters didn't invite her",
            },
          ],
        },
      },
      {
        imageId: cinderellaStoryImages.cinderellaImage3,
        passageId: 3,
        passageContent:
          "Then, something magical happened! A beautiful fairy appeared, with a shimmering dress, a sparkling wand, and a sprinkle of magic dust. She turned Cinderella's plain clothes into a magnificent gown, and a pumpkin into a dazzling carriage, pulled by mice turned into horses!",
        questionBank: {
          easy: [
            {
              questionId: 1,
              question: "Who appeared to help Cinderella?",
              options: ["A fairy", "A queen", "A witch", "A princess"],
              correctAnswer: "A fairy",
            },
            {
              questionId: 2,
              question: "What did the fairy have in her hand?",
              options: ["A book", "A sparkling wand", "A flower", "A sword"],
              correctAnswer: "A sparkling wand",
            },
            {
              questionId: 3,
              question:
                "What did the fairy turn Cinderella's plain clothes into?",
              options: [
                "A magnificent gown",
                "A pumpkin",
                "A sparkling wand",
                "A flower",
              ],
              correctAnswer: "A magnificent gown",
            },
          ],
          medium: [
            {
              questionId: 1,
              question:
                "What did the fairy use to turn the pumpkin into a carriage?",
              options: ["Magic dust", "A sparkling wand", "A book", "A flower"],
              correctAnswer: "Magic dust",
            },
            {
              questionId: 2,
              question: "What were the mice turned into?",
              options: ["Carriage", "Horses", "Pumpkin", "Dresses"],
              correctAnswer: "Horses",
            },
            {
              questionId: 3,
              question:
                "How did Cinderella feel after her clothes were transformed?",
              options: ["Sad", "Angry", "Happy", "Bored"],
              correctAnswer: "Happy",
            },
          ],
        },
      },
      {
        imageId: cinderellaStoryImages.cinderellaImage4,
        passageId: 4,
        passageContent:
          "Cinderella arrived at the royal ball and met the handsome prince. They danced and twirled under the twinkling stars. But the fairy warned her that the magic would only last until midnight. When the big clock in the palace made a 'Ding-Dong' sound twelve times, Cinderella had to leave in a hurry. She left behind a glass slipper as she rushed away.",
        questionBank: {
          easy: [
            {
              questionId: 1,
              question: "Who did Cinderella meet at the ball?",
              options: ["Prince", "Fairy", "Witch", "Cat"],
              correctAnswer: "Prince",
            },
            {
              questionId: 2,
              question: "What did Cinderella leave behind?",
              options: ["Slipper", "Book", "Pumpkin", "Dress"],
              correctAnswer: "Slipper",
            },
            {
              questionId: 3,
              question: "Why did Cinderella have to leave in a hurry?",
              options: ["Magic ending", "Hungry", "Sleepy", "Bored"],
              correctAnswer: "Magic ending",
            },
          ],
          medium: [
            {
              questionId: 1,
              question: "What did the fairy warn Cinderella about?",
              options: ["Midnight", "Dance", "Prince", "Pumpkin"],
              correctAnswer: "Midnight",
            },
            {
              questionId: 2,
              question: "What sound did the clock make?",
              options: ["Ding-Dong", "Tick-Tock", "Chirp", "Meow"],
              correctAnswer: "Ding-Dong",
            },
            {
              questionId: 3,
              question: "At what time did Cinderella have to leave?",
              options: ["Midnight", "Noon", "Morning", "Dusk"],
              correctAnswer: "Midnight",
            },
          ],
        },
      },
      {
        imageId: cinderellaStoryImages.cinderellaImage5,
        passageId: 5,
        passageContent:
          "The prince found the glass slipper and went searching for the owner. When Cinderella tried it on, it fit perfectly! She was overjoyed. The prince knew she was the one he had been looking for. They got married in a grand ceremony, and Cinderella's stepmother and stepsisters were left in awe. Cinderella and the prince lived happily ever after, and that's the end of our magical story!",
        questionBank: {
          easy: [
            {
              questionId: 1,
              question: "Who found the glass slipper?",
              options: ["Prince", "Cinderella", "Fairy", "Mouse"],
              correctAnswer: "Prince",
            },
            {
              questionId: 2,
              question:
                "What happened when Cinderella tried on the glass slipper?",
              options: [
                "It fit perfectly",
                "It broke",
                "It was too big",
                "It disappeared",
              ],
              correctAnswer: "It fit perfectly",
            },
            {
              questionId: 3,
              question:
                "How did Cinderella feel when the glass slipper fit perfectly?",
              options: ["Overjoyed", "Angry", "Sad", "Confused"],
              correctAnswer: "Overjoyed",
            },
            {
              questionId: 4,
              question: "Who did Cinderella marry in a grand ceremony?",
              options: ["Prince", "Fairy", "Mouse", "Stepmother"],
              correctAnswer: "Prince",
            },
            {
              questionId: 5,
              question: "How did Cinderella feel when she got married?",
              options: ["Overjoyed", "Angry", "Sad", "Confused"],
              correctAnswer: "Overjoyed",
            },
          ],
          medium: [
            {
              questionId: 1,
              question:
                "What did the prince do when he knew Cinderella was the owner of the glass slipper?",
              options: [
                "Got married",
                "Went back to the palace",
                "Went to a party",
                "Bought more shoes",
              ],
              correctAnswer: "Got married",
            },
            {
              questionId: 2,
              question:
                "What was Cinderella's stepmother and stepsisters' reaction when she got married?",
              options: ["Happy", "Jealous", "Sad", "Excited"],
              correctAnswer: "Jealous",
            },
            {
              questionId: 3,
              question:
                "How did Cinderella and the prince live after getting married?",
              options: [
                "Happily ever after",
                "Unhappily ever after",
                "In a pumpkin",
                "In a tower",
              ],
              correctAnswer: "Happily ever after",
            },
          ],
        },
      },
    ],
    RapunzelStoryContent: [
      {
        imageId: RapunzelStoryImages.rapunzelImage1,
        passageId: 1,
        passageContent:
          "Once upon a time, in a tall tower hidden deep in the forest, there lived a beautiful girl named Rapunzel. She had the most radiant, long hair you could ever imagine, but she had never set foot outside the tower because an evil witch kept her trapped there.",
        questionBank: {
          easy: [
            {
              questionId: 1,
              question: "Who was Rapunzel's friend in the tower?",
              options: ["Witch", "Prince", "Dragon", "Fairy"],
              correctAnswer: "Witch",
            },
            {
              questionId: 2,
              question: "Where did Rapunzel live all her life?",
              options: ["Tower", "Castle", "Village", "Forest"],
              correctAnswer: "Tower",
            },
            {
              questionId: 3,
              question: "Why couldn't Rapunzel leave the tower?",
              options: ["Evil Witch", "Magic", "Prince", "Dance"],
              correctAnswer: "Evil Witch",
            },
            {
              questionId: 4,
              question: "What was special about Rapunzel's hair?",
              options: ["Long", "Short", "Red", "Curly"],
              correctAnswer: "Long",
            },
            {
              questionId: 5,
              question: "Did Rapunzel ever go outside?",
              options: ["No", "Yes", "Sometimes", "Always"],
              correctAnswer: "No",
            },
          ],
          medium: [
            {
              questionId: 1,
              question: "What did Rapunzel like to do in the tower?",
              options: ["Read", "Play", "Sleep", "Cry"],
              correctAnswer: "Read",
            },
            {
              questionId: 2,
              question: "How did the witch reach Rapunzel's tower?",
              options: ["Climbing", "Flying", "Magic", "Ladder"],
              correctAnswer: "Climbing",
            },
            {
              questionId: 3,
              question: "Why did Rapunzel stay in the tower?",
              options: ["Evil Witch", "Prince", "Fear", "Fun"],
              correctAnswer: "Evil Witch",
            },
            {
              questionId: 4,
              question: "Describe Rapunzel's hair.",
              options: ["Long", "Short", "Red", "Curly"],
              correctAnswer: "Long",
            },
            {
              questionId: 5,
              question: "Did Rapunzel ever go outside to play?",
              options: ["No", "Yes", "Sometimes", "Always"],
              correctAnswer: "No",
            },
          ],
          hard: [],
        },
      },
      {
        imageId: RapunzelStoryImages.rapunzelImage2,
        passageId: 2,
        passageContent:
          "Rapunzel's only company in the tower was the witch who raised her. The witch would climb Rapunzel's long hair to reach the tower. Rapunzel spent her days reading books and singing songs to pass the time.",
        questionBank: {
          easy: [
            {
              questionId: 1,
              question: "Who visited Rapunzel in the tower?",
              options: ["Witch", "Prince", "Dragon", "Fairy"],
              correctAnswer: "Witch",
            },
            {
              questionId: 2,
              question: "How did the witch reach Rapunzel's tower?",
              options: ["Climbing", "Flying", "Magic", "Ladder"],
              correctAnswer: "Climbing",
            },
            {
              questionId: 3,
              question: "What did Rapunzel do in the tower?",
              options: ["Read", "Play", "Sleep", "Cry"],
              correctAnswer: "Read",
            },
            {
              questionId: 4,
              question: "How did Rapunzel pass the time?",
              options: ["Reading", "Playing", "Sleeping", "Crying"],
              correctAnswer: "Reading",
            },
            {
              questionId: 5,
              question: "What was special about Rapunzel's hair?",
              options: ["Long", "Short", "Red", "Curly"],
              correctAnswer: "Long",
            },
          ],
          medium: [
            {
              questionId: 1,
              question: "Why did Rapunzel spend her days reading books?",
              options: ["Love", "Boredom", "Magic", "Fear"],
              correctAnswer: "Boredom",
            },
            {
              questionId: 2,
              question: "How did the witch reach the tower?",
              options: ["Magic", "Climbing", "Flying", "Ladder"],
              correctAnswer: "Climbing",
            },
            {
              questionId: 3,
              question: "What did Rapunzel like to do?",
              options: ["Read", "Play", "Sleep", "Cry"],
              correctAnswer: "Read",
            },
            {
              questionId: 4,
              question: "What did Rapunzel do to pass the time?",
              options: [
                "Reading books",
                "Singing songs",
                "Playing games",
                "Sleeping",
              ],
              correctAnswer: "Reading books",
            },
            {
              questionId: 5,
              question: "Describe Rapunzel's hair.",
              options: ["Long", "Short", "Red", "Curly"],
              correctAnswer: "Long",
            },
          ],
          hard: [],
        },
      },
      {
        imageId: RapunzelStoryImages.rapunzelImage3,
        passageId: 3,
        passageContent:
          "One day, a brave prince happened to hear Rapunzel's beautiful singing while he was passing through the forest. He found the tower but didn't know how to reach Rapunzel. He decided to wait and see if he could learn the secret.",
        questionBank: {
          easy: [
            {
              questionId: 1,
              question: "Who heard Rapunzel's singing in the forest?",
              options: ["Prince", "Witch", "Dragon", "Fairy"],
              correctAnswer: "Prince",
            },
            {
              questionId: 2,
              question: "Where did the prince find Rapunzel's tower?",
              options: ["Forest", "Castle", "Village", "River"],
              correctAnswer: "Forest",
            },
            {
              questionId: 3,
              question: "What did the prince decide to do?",
              options: ["Wait", "Leave", "Climb", "Sing"],
              correctAnswer: "Wait",
            },
            {
              questionId: 4,
              question: "What did the prince hope to learn?",
              options: ["Secret", "Song", "Magic", "Dance"],
              correctAnswer: "Secret",
            },
            {
              questionId: 5,
              question: "Why did the prince stop in the forest?",
              options: ["Hear singing", "Meet friends", "Find food", "Sleep"],
              correctAnswer: "Hear singing",
            },
          ],
          medium: [
            {
              questionId: 1,
              question: "Who found Rapunzel's tower in the forest?",
              options: ["Prince", "Witch", "Dragon", "Fairy"],
              correctAnswer: "Prince",
            },
            {
              questionId: 2,
              question: "Where did the prince decide to wait?",
              options: ["Forest", "Castle", "Village", "River"],
              correctAnswer: "Forest",
            },
            {
              questionId: 3,
              question: "What did the prince hope to learn about Rapunzel?",
              options: ["Secret", "Song", "Magic", "Dance"],
              correctAnswer: "Secret",
            },
            {
              questionId: 4,
              question: "Why did the prince stop in the forest?",
              options: ["Hear singing", "Meet friends", "Find food", "Sleep"],
              correctAnswer: "Hear singing",
            },
            {
              questionId: 5,
              question: "What did Rapunzel do in the tower?",
              options: ["Read", "Play", "Sing", "Dance"],
              correctAnswer: "Sing",
            },
          ],
          hard: [],
        },
      },
      {
        imageId: RapunzelStoryImages.rapunzelImage4,
        passageId: 4,
        passageContent:
          "The prince soon discovered the witch's secret. He called out to Rapunzel, and she lowered her long, golden hair. The prince climbed up, and they fell in love. But the witch found out and was very angry.",
        questionBank: {
          easy: [
            {
              questionId: 1,
              question: "Who found out the witch's secret?",
              options: ["Prince", "Witch", "Dragon", "Fairy"],
              correctAnswer: "Prince",
            },
            {
              questionId: 2,
              question: "What did the prince call out to Rapunzel?",
              options: ["Magic words", "Her name", "Help", "Spell"],
              correctAnswer: "Her name",
            },
            {
              questionId: 3,
              question: "How did Rapunzel help the prince reach her?",
              options: [
                "Lowered hair",
                "Flew to him",
                "Used magic",
                "Climbed down",
              ],
              correctAnswer: "Lowered hair",
            },
            {
              questionId: 4,
              question: "What happened when the prince and Rapunzel met?",
              options: ["Fell in love", "Fought", "Ran away", "Sang songs"],
              correctAnswer: "Fell in love",
            },
            {
              questionId: 5,
              question: "Why was the witch angry?",
              options: [
                "Lost her hair",
                "Found out",
                "Saw the prince",
                "Wanted to dance",
              ],
              correctAnswer: "Found out",
            },
          ],
          medium: [
            {
              questionId: 1,
              question: "Who discovered the witch's secret?",
              options: ["Witch", "Prince", "Dragon", "Fairy"],
              correctAnswer: "Prince",
            },
            {
              questionId: 2,
              question: "How did Rapunzel help the prince reach her?",
              options: [
                "Lowered hair",
                "Flew to him",
                "Used magic",
                "Climbed down",
              ],
              correctAnswer: "Lowered hair",
            },
            {
              questionId: 3,
              question: "What happened when the prince and Rapunzel met?",
              options: ["Fell in love", "Fought", "Ran away", "Sang songs"],
              correctAnswer: "Fell in love",
            },
            {
              questionId: 4,
              question: "Why did the witch get angry?",
              options: [
                "Lost her hair",
                "Found out",
                "Saw the prince",
                "Wanted to dance",
              ],
              correctAnswer: "Found out",
            },
            {
              questionId: 5,
              question: "What did Rapunzel do to help the prince?",
              options: [
                "Sang songs",
                "Lowered hair",
                "Used magic",
                "Flew to him",
              ],
              correctAnswer: "Lowered hair",
            },
          ],
          hard: [],
        },
      },
      {
        imageId: RapunzelStoryImages.rapunzelImage5,
        passageId: 5,
        passageContent:
          "The witch cast a spell and sent Rapunzel far away. The prince was heartbroken. He searched for Rapunzel and eventually found her. Their love was so strong that it broke the witch's spell, and they lived happily ever after. And that's the end of our magical story of Rapunzel!",
        questionBank: {
          easy: [
            {
              questionId: 1,
              question: "Who cast a spell on Rapunzel?",
              options: ["Witch", "Prince", "Dragon", "Fairy"],
              correctAnswer: "Witch",
            },
            {
              questionId: 2,
              question: "Why did the prince search for Rapunzel?",
              options: ["Love", "Magic", "Fear", "Adventure"],
              correctAnswer: "Love",
            },
            {
              questionId: 3,
              question: "What happened when the prince found Rapunzel?",
              options: ["Fell in love", "Fought", "Ran away", "Cried"],
              correctAnswer: "Fell in love",
            },
            {
              questionId: 4,
              question: "What did their love do to the witch's spell?",
              options: [
                "Broke it",
                "Made it stronger",
                "Changed it",
                "Nothing",
              ],
              correctAnswer: "Broke it",
            },
            {
              questionId: 5,
              question: "How did Rapunzel and the prince live happily?",
              options: ["Ever after", "Sadly", "Alone", "In the tower"],
              correctAnswer: "Ever after",
            },
          ],
          medium: [
            {
              questionId: 1,
              question: "Who cast a spell on Rapunzel?",
              options: ["Witch", "Prince", "Dragon", "Fairy"],
              correctAnswer: "Witch",
            },
            {
              questionId: 2,
              question: "Why did the prince search for Rapunzel?",
              options: ["Love", "Magic", "Fear", "Adventure"],
              correctAnswer: "Love",
            },
            {
              questionId: 3,
              question: "What happened when the prince found Rapunzel?",
              options: ["Fell in love", "Fought", "Ran away", "Cried"],
              correctAnswer: "Fell in love",
            },
            {
              questionId: 4,
              question: "What did their love do to the witch's spell?",
              options: [
                "Broke it",
                "Made it stronger",
                "Changed it",
                "Nothing",
              ],
              correctAnswer: "Broke it",
            },
            {
              questionId: 5,
              question: "How did Rapunzel and the prince live happily?",
              options: ["Ever after", "Sadly", "Alone", "In the tower"],
              correctAnswer: "Ever after",
            },
          ],
          hard: [],
        },
      },
    ],
    HerculesStoryContent: [
      {
        imageId: HerculesStoryImages.herculesImage1,
        passageId: 1,
        passageContent:
          "Long ago, in ancient Greece, there was a baby named Hercules. He was no ordinary baby because he was the son of Zeus, the king of the gods. But an evil sorceress tricked him and made him forget his true identity.",
        questionBank: {
          easy: [
            {
              questionId: 1,
              question: "Who is the story about?",
              options: ["Hercules", "Zeus", "A sorceress", "A king"],
              correctAnswer: "Hercules",
            },
            {
              questionId: 2,
              question: "Who was Hercules' father?",
              options: ["A king", "Zeus", "A sorceress", "A baby"],
              correctAnswer: "Zeus",
            },
            {
              questionId: 3,
              question: "Was Hercules a normal baby?",
              options: ["Yes", "No"],
              correctAnswer: "No",
            },
            {
              questionId: 4,
              question: "Did Hercules know he was the son of Zeus?",
              options: ["Yes", "No"],
              correctAnswer: "No",
            },
            {
              questionId: 5,
              question: "Who tricked Hercules?",
              options: ["A king", "Zeus", "A sorceress", "A baby"],
              correctAnswer: "A sorceress",
            },
            {
              questionId: 6,
              question: "Where did Hercules live?",
              options: [
                "In ancient Greece",
                "In Rome",
                "In Egypt",
                "In Persia",
              ],
              correctAnswer: "In ancient Greece",
            },
            {
              questionId: 7,
              question: "Was Zeus a god or a human?",
              options: ["God", "Human", "Both", "None"],
              correctAnswer: "God",
            },
          ],
          medium: [
            {
              questionId: 1,
              question: "Why was Hercules not an ordinary baby?",
              options: [
                "Because he was a king",
                "Because he was the son of Zeus, the king of the gods",
                "Because he was a sorceress",
                "Because he was a baby",
              ],
              correctAnswer:
                "Because he was the son of Zeus, the king of the gods",
            },
            {
              questionId: 2,
              question: "What did the evil sorceress do to Hercules?",
              options: [
                "She made him a king",
                "She made him forget his true identity",
                "She made him a sorceress",
                "She made him a baby",
              ],
              correctAnswer: "She made him forget his true identity",
            },
            {
              questionId: 3,
              question: "How did Hercules feel as a baby?",
              options: [
                "He felt like a king",
                "He felt like Zeus",
                "He felt different because he didn't know his true identity",
                "He felt like a sorceress",
              ],
              correctAnswer:
                "He felt different because he didn't know his true identity",
            },
            {
              questionId: 4,
              question: "What was special about Hercules' father?",
              options: [
                "He was a king",
                "He was the king of the gods",
                "He was a sorceress",
                "He was a baby",
              ],
              correctAnswer: "He was the king of the gods",
            },
            {
              questionId: 5,
              question: "Why didn't Hercules remember he was the son of Zeus?",
              options: [
                "Because he was a king",
                "Because an evil sorceress tricked him",
                "Because he was a sorceress",
                "Because he was a baby",
              ],
              correctAnswer: "Because an evil sorceress tricked him",
            },
          ],
          hard: [],
        },
      },
      {
        imageId: HerculesStoryImages.herculesImage2,
        passageId: 2,
        passageContent:
          "As Hercules grew up, he became incredibly strong, but he didn't know why. He felt different from others in his village. So, he set out on a quest to discover who he really was and to prove himself a true hero.",
        questionBank: {
          easy: [
            {
              questionId: 1,
              question: "Did Hercules feel different from others?",
              options: ["Yes", "No"],
              correctAnswer: "Yes",
            },
            {
              questionId: 2,
              question: "What did Hercules decide to do?",
              options: [
                "Go on a quest",
                "Stay in his village",
                "Become weak",
                "Forget about everything",
              ],
              correctAnswer: "Go on a quest",
            },
            {
              questionId: 3,
              question: "What was Hercules trying to find out on his quest?",
              options: [
                "Who he really was and how to be a true hero",
                "How to become weak",
                "How to stay in his village",
                "How to forget about everything",
              ],
              correctAnswer: "Who he really was and how to be a true hero",
            },
            {
              questionId: 4,
              question: "Was Hercules weak or strong?",
              options: ["Weak", "Strong", "Neither", "Both"],
              correctAnswer: "Strong",
            },
            {
              questionId: 5,
              question: "Did Hercules stay in his village?",
              options: ["Yes", "No"],
              correctAnswer: "No",
            },
          ],
          medium: [
            {
              questionId: 1,
              question:
                "Why did Hercules feel different from others in his village?",
              options: [
                "Because he was incredibly strong and didn't know why",
                "Because he wanted to go on a quest",
                "Because he wanted to stay in his village",
                "Because he wanted to become weak",
              ],
              correctAnswer:
                "Because he was incredibly strong and didn't know why",
            },
            {
              questionId: 2,
              question: "What was the purpose of Hercules' quest?",
              options: [
                "To discover who he really was and to prove himself a true hero",
                "To become weak",
                "To stay in his village",
                "To forget about everything",
              ],
              correctAnswer:
                "To discover who he really was and to prove himself a true hero",
            },
            {
              questionId: 3,
              question:
                "How did Hercules feel compared to others in his village?",
              options: [
                "He felt different",
                "He felt the same",
                "He felt superior",
                "He felt inferior",
              ],
              correctAnswer: "He felt different",
            },
            {
              questionId: 4,
              question: "What was Hercules hoping to prove on his quest?",
              options: [
                "That he was weak",
                "That he was a true hero",
                "That he could stay in his village",
                "That he could forget about everything",
              ],
              correctAnswer: "That he was a true hero",
            },
          ],
          hard: [],
        },
      },
      {
        imageId: HerculesStoryImages.herculesImage3,
        passageId: 3,
        passageContent:
          "Hercules faced many challenges and performed incredible feats, like defeating fierce monsters and solving impossible puzzles. Along the way, he made friends and learned important lessons about bravery and kindness.",
        questionBank: {
          easy: [
            {
              questionId: 1,
              question: "Did Hercules face challenges on his quest?",
              options: ["Yes", "No"],
              correctAnswer: "Yes",
            },
            {
              questionId: 2,
              question: "Did Hercules make friends on his journey?",
              options: ["Yes", "No"],
              correctAnswer: "Yes",
            },
            {
              questionId: 3,
              question: "Did Hercules defeat monsters on his quest?",
              options: ["Yes", "No"],
              correctAnswer: "Yes",
            },
            {
              questionId: 4,
              question: "Did Hercules learn anything on his journey?",
              options: ["Yes", "No"],
              correctAnswer: "Yes",
            },
            {
              questionId: 5,
              question: "Did Hercules solve puzzles on his quest?",
              options: ["Yes", "No"],
              correctAnswer: "Yes",
            },
          ],
          medium: [
            {
              questionId: 1,
              question: "What kind of feats did Hercules perform on his quest?",
              options: [
                "He defeated fierce monsters and solved impossible puzzles",
                "He made friends",
                "He learned about bravery and kindness",
                "All of the above",
              ],
              correctAnswer:
                "He defeated fierce monsters and solved impossible puzzles",
            },
            {
              questionId: 2,
              question: "What did Hercules learn on his journey?",
              options: [
                "Important lessons about bravery and kindness",
                "How to defeat monsters",
                "How to solve puzzles",
                "How to make friends",
              ],
              correctAnswer: "Important lessons about bravery and kindness",
            },
            {
              questionId: 3,
              question: "What kind of monsters did Hercules defeat?",
              options: [
                "Fierce monsters",
                "Friendly monsters",
                "Imaginary monsters",
                "Tiny monsters",
              ],
              correctAnswer: "Fierce monsters",
            },
            {
              questionId: 4,
              question:
                "What important lessons did Hercules learn on his journey?",
              options: [
                "About bravery and kindness",
                "About fear and rudeness",
                "About weakness and strength",
                "About ignorance and knowledge",
              ],
              correctAnswer: "About bravery and kindness",
            },
          ],
          hard: [],
        },
      },
      {
        imageId: HerculesStoryImages.herculesImage4,
        passageId: 4,
        passageContent:
          "Hercules eventually discovered his divine heritage and realized he could become a true hero by using his incredible strength for good. He defeated the evil sorceress who had tricked him and became a hero in the eyes of all of Greece.",
        questionBank: {
          easy: [
            {
              questionId: 1,
              question: "Did Hercules find out who he really was?",
              options: ["Yes", "No"],
              correctAnswer: "Yes",
            },
            {
              questionId: 2,
              question: "Did Hercules become a hero?",
              options: ["Yes", "No"],
              correctAnswer: "Yes",
            },
            {
              questionId: 3,
              question: "Did Hercules use his strength for good or bad?",
              options: ["Good", "Bad", "Both", "Neither"],
              correctAnswer: "Good",
            },
            {
              questionId: 4,
              question: "Who did Hercules defeat at the end of the story?",
              options: [
                "The evil sorceress",
                "His friends",
                "His family",
                "Himself",
              ],
              correctAnswer: "The evil sorceress",
            },
            {
              questionId: 5,
              question:
                "Did Hercules become a hero in the eyes of all of Greece?",
              options: ["Yes", "No"],
              correctAnswer: "Yes",
            },
          ],
          medium: [
            {
              questionId: 1,
              question: "How did Hercules become a true hero?",
              options: [
                "By using his incredible strength for good",
                "By defeating the evil sorceress",
                "By discovering his divine heritage",
                "All of the above",
              ],
              correctAnswer: "By using his incredible strength for good",
            },
            {
              questionId: 2,
              question:
                "What happened to the evil sorceress who had tricked him?",
              options: [
                "Hercules defeated her",
                "She became a hero",
                "She discovered her divine heritage",
                "She used her strength for good",
              ],
              correctAnswer: "Hercules defeated her",
            },
            {
              questionId: 3,
              question: "How did Hercules use his incredible strength?",
              options: [
                "For good",
                "For bad",
                "For both good and bad",
                "For neither good nor bad",
              ],
              correctAnswer: "For good",
            },
            {
              questionId: 4,
              question: "Who had tricked Hercules when he was a baby?",
              options: [
                "The evil sorceress",
                "His friends",
                "His family",
                "Himself",
              ],
              correctAnswer: "The evil sorceress",
            },
          ],
          hard: [],
        },
      },
      {
        imageId: HerculesStoryImages.herculesImage5,
        passageId: 5,
        passageContent:
          "Hercules's courage, kindness, and strength made him a legendary hero, and he rejoined his family on Mount Olympus as a true god. He learned that it's not just strength that makes a hero, but the goodness in their heart. And that's the end of the amazing story of Hercules!",
        questionBank: {
          easy: [
            {
              questionId: 1,
              question: "Where did Hercules go at the end of the story?",
              options: [
                "Mount Olympus",
                "His village",
                "On another quest",
                "Nowhere",
              ],
              correctAnswer: "Mount Olympus",
            },
            {
              questionId: 2,
              question: "Was Hercules a god at the end of the story?",
              options: ["Yes", "No"],
              correctAnswer: "Yes",
            },
            {
              questionId: 3,
              question: "Was Hercules a hero at the end of the story?",
              options: ["Yes", "No"],
              correctAnswer: "Yes",
            },
            {
              questionId: 4,
              question: "Where is Mount Olympus?",
              options: [
                "It's where the gods live",
                "It's in his village",
                "It's on another quest",
                "It's nowhere",
              ],
              correctAnswer: "It's where the gods live",
            },
            {
              questionId: 5,
              question: "Did Hercules learn anything at the end of the story?",
              options: ["Yes", "No"],
              correctAnswer: "Yes",
            },
          ],
          medium: [
            {
              questionId: 1,
              question: "What qualities made Hercules a legendary hero?",
              options: [
                "His courage, kindness, and strength",
                "His weakness",
                "His fear",
                "His rudeness",
              ],
              correctAnswer: "His courage, kindness, and strength",
            },
            {
              questionId: 2,
              question: "What did Hercules learn about being a hero?",
              options: [
                "That it's not just strength that makes a hero, but the goodness in their heart",
                "That only strength makes a hero",
                "That heroes are always rude",
                "That heroes are always scared",
              ],
              correctAnswer:
                "That it's not just strength that makes a hero, but the goodness in their heart",
            },
            {
              questionId: 3,
              question: "What made Hercules a legendary hero?",
              options: [
                "His courage, kindness, and strength",
                "His weakness",
                "His fear",
                "His rudeness",
              ],
              correctAnswer: "His courage, kindness, and strength",
            },
            {
              questionId: 4,
              question:
                "What does it take to be a hero, according to Hercules' story?",
              options: [
                "Not just strength, but also the goodness in one's heart",
                "Only strength",
                "Heroes are always rude",
                "Heroes are always scared",
              ],
              correctAnswer:
                "Not just strength, but also the goodness in one's heart",
            },
          ],
          hard: [],
        },
      },
    ],
    studentSelectionOptions: [
      {
        title: "Puzzle",
        Icon: (
          <MaterialCommunityIcons
            name="puzzle"
            size={200}
            color={colorVariants.dodgerblue}
          />
        ),
      },
      {
        title: "Story",
        Icon: (
          <Entypo
            name="open-book"
            size={200}
            color={colorVariants.dodgerblue}
          />
        ),
      },
      {
        title: "PlayList",
        Icon: (
          <MaterialCommunityIcons
            name="playlist-music"
            size={200}
            color={colorVariants.dodgerblue}
          />
        ),
      },
      {
        title: "Settings",
        Icon: (
          <MaterialIcons
            name="settings"
            size={200}
            color={colorVariants.dodgerblue}
          />
        ),
      },
    ],
    studentSelectionSpeech:
      "Welcome! You are in the main menu. Our first option is a fun Puzzle! Can you solve it? The second option is a magical Story. Are you ready to dive into a world of imagination? The third option is a Playlist. Let's listen to some cool tunes together! And last but not least, the fourth option is Settings. Here you can change things to make them just right for you! So, what will it be?",
    storySelectionSpeech:
      "You are in story-based games section! Now, it's time to pick a magical adventure. Your first choice is the enchanting tale of Cinderella, next is the high-flying journey of Rapunzel with her long golden hair, and last but not least, the mighty and brave Hercules. So, which fantastic journey will you embark on today? Cinderella, Rapunzel, or Hercules? I am waiting for your answer!",
  };
};
