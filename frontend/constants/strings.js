import {
  cinderellaOption,
  cinderellaStoryImages,
} from "../assets/images/imageIndex";
import { herculesOption } from "../assets/images/imageIndex";
import { rapunzelOption } from "../assets/images/imageIndex";

export const screenTitles = {
  StorySelection: "Story Selection",
  CinderellaStory: "Cinderella",
};

export const storySelectionOptions = [
  { title: "Cinderella", ref: cinderellaOption },
  { title: "Rapunzel", ref: rapunzelOption },
  { title: "Hercules", ref: herculesOption },
];
export const CinderellaStoryContent = [
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
          question: "How do Cinderella's stepsisters treat her in the story?",
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
          options: ["A grand ball", "A picnic", "A parade", "A birthday party"],
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
          question: "What did the fairy turn Cinderella's plain clothes into?",
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
          question: "What happened when Cinderella tried on the glass slipper?",
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
];

export const RapunzelStoryContent = [
  {
    imageId: "",
    passageId: 1,
    passageContent:
      "Once upon a time, in a tall tower hidden deep in the forest, there lived a beautiful girl named Rapunzel. She had the most radiant, long hair you could ever imagine, but she had never set foot outside the tower because an evil witch kept her trapped there.",
    questionBank: {
      easy: [],
      medium: [],
      hard: [],
    },
  },
  {
    imageId: "",
    passageId: 2,
    passageContent:
      "Rapunzel's only company in the tower was the witch who raised her. The witch would climb Rapunzel's long hair to reach the tower. Rapunzel spent her days reading books and singing songs to pass the time.",
    questionBank: {
      easy: [],
      medium: [],
      hard: [],
    },
  },
  {
    imageId: "",
    passageId: 3,
    passageContent:
      "One day, a brave prince happened to hear Rapunzel's beautiful singing while he was passing through the forest. He found the tower but didn't know how to reach Rapunzel. He decided to wait and see if he could learn the secret.",
    questionBank: {
      easy: [],
      medium: [],
      hard: [],
    },
  },
  {
    imageId: "",
    passageId: 4,
    passageContent:
      "The prince soon discovered the witch's secret. He called out to Rapunzel, and she lowered her long, golden hair. The prince climbed up, and they fell in love. But the witch found out and was very angry.",
    questionBank: {
      easy: [],
      medium: [],
      hard: [],
    },
  },
  {
    imageId: "",
    passageId: 5,
    passageContent:
      "The witch cast a spell and sent Rapunzel far away. The prince was heartbroken. He searched for Rapunzel and eventually found her. Their love was so strong that it broke the witch's spell, and they lived happily ever after. And that's the end of our magical story of Rapunzel!",
    questionBank: {
      easy: [],
      medium: [],
      hard: [],
    },
  },
];

export const HerculesStoryContent = [
  {
    imageId: "",
    passageId: 1,
    passageContent:
      "Long ago, in ancient Greece, there was a baby named Hercules. He was no ordinary baby because he was the son of Zeus, the king of the gods. But an evil sorceress tricked him and made him forget his true identity.",
    questionBank: {
      easy: [],
      medium: [],
      hard: [],
    },
  },
  {
    imageId: "",
    passageId: 2,
    passageContent:
      "As Hercules grew up, he became incredibly strong, but he didn't know why. He felt different from others in his village. So, he set out on a quest to discover who he really was and to prove himself a true hero.",
    questionBank: {
      easy: [],
      medium: [],
      hard: [],
    },
  },
  {
    imageId: "",
    passageId: 3,
    passageContent:
      "Hercules faced many challenges and performed incredible feats, like defeating fierce monsters and solving impossible puzzles. Along the way, he made friends and learned important lessons about bravery and kindness.",
    questionBank: {
      easy: [],
      medium: [],
      hard: [],
    },
  },
  {
    imageId: "",
    passageId: 4,
    passageContent:
      "Hercules eventually discovered his divine heritage and realized he could become a true hero by using his incredible strength for good. He defeated the evil sorceress who had tricked him and became a hero in the eyes of all of Greece.",
    questionBank: {
      easy: [],
      medium: [],
      hard: [],
    },
  },
  {
    imageId: "",
    passageId: 5,
    passageContent:
      "Hercules's courage, kindness, and strength made him a legendary hero, and he rejoined his family on Mount Olympus as a true god. He learned that it's not just strength that makes a hero, but the goodness in their heart. And that's the end of the amazing story of Hercules!",
    questionBank: {
      easy: [],
      medium: [],
      hard: [],
    },
  },
];
