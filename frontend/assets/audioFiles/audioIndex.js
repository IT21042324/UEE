import { Audio } from "expo-av";

export const hushLittleBaby = require("./hushLittleBaby.mp3");
export const alphabetIsFun = require("./alphabetIsFun.mp3");
export const jumpingMonsters = require("./jumpingMonsters.mp3");
export const twinkleTwinkle = require("./twinkle.mp3");
export const washingHands = require("./washingHands.mp3");
export const birthdayMusicalChair = require("./musicalChair.mp3");
export const tenInBed = require("./tenInBed.mp3");

export const mediaList = [
  {
    id: 1,
    title: "Hush Little Baby",
    album: "Kids Songs",
    url: hushLittleBaby,
  },
  {
    id: 2,
    title: "Alphabet is Fun",
    album: "Kids Songs",
    url: alphabetIsFun,
  },
  {
    id: 3,
    title: "Jumping Monsters",
    album: "Kids Songs",
    url: jumpingMonsters,
  },
  {
    id: 4,
    title: "Twinkle Twinkle",
    album: "Kids Songs",
    url: twinkleTwinkle,
  },
  {
    id: 5,
    title: "Washing Hands",
    album: "Kids Songs",
    url: washingHands,
  },
  {
    id: 6,
    title: "Birthday Musical Chair",
    album: "Kids Songs",
    url: birthdayMusicalChair,
  },
  {
    id: 7,
    title: "Ten In Bed",
    album: "Kids Songs",
    url: tenInBed,
  },
];

// Function to convert milliseconds to mm:ss format
const millisToMinutesAndSeconds = (millis) => {
  let minutes = Math.floor(millis / 60000);
  let seconds = ((millis % 60000) / 1000).toFixed(0);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

// Function to get the duration of an audio file
const getAudioDuration = async (audioFile) => {
  const { sound } = await Audio.Sound.createAsync(audioFile);
  const status = await sound.getStatusAsync();
  await sound.unloadAsync();
  return millisToMinutesAndSeconds(status.durationMillis);
};

// Function to add durations to the media list
export const addDurationsToMediaList = async (mediaList) => {
  for (let i = 0; i < mediaList.length; i++) {
    mediaList[i].duration = await getAudioDuration(mediaList[i].url);
  }
  return mediaList;
};
