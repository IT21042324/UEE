import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveLoginInfo = async (loginInfo) => {
  const settings = await getSettings();

  if (settings) mergeSettings(loginInfo);
  else saveSettings(loginInfo);
};

export const saveSettings = async (settings) => {
  try {
    const jsonValue = JSON.stringify(settings);
    await AsyncStorage.setItem("settings", jsonValue);
  } catch (e) {
    console.error("Settings storing error");
  }
};

export const removeStudentInfo = async () => {
  try {
    // Get the current settings from AsyncStorage
    const settings = await AsyncStorage.getItem("settings");

    // Parse the JSON string into an object
    const settingsObj = JSON.parse(settings);

    // Delete the studentInfo property
    delete settingsObj.studentInfo;

    // Convert the object back to a JSON string
    const newSettings = JSON.stringify(settingsObj);

    // Save the updated settings back to AsyncStorage
    await AsyncStorage.setItem("settings", newSettings);

    console.log("Successfully removed studentInfo from AsyncStorage.");
  } catch (e) {
    console.error(`Error removing studentInfo from AsyncStorage: ${e}`);
  }
};

export const getSettings = async () => {
  try {
    const settings = await AsyncStorage.getItem("settings");
    return settings != null ? JSON.parse(settings) : null;
  } catch (e) {
    console.error("Settings retreiving error");
  }
};

export const mergeSettings = async (dataToMerge) => {
  try {
    await AsyncStorage.mergeItem("settings", JSON.stringify(dataToMerge));
  } catch (err) {
    console.error(e);

    console.error("Problem with merging data");
  }
};

export const removeSetting = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (e) {
    console.error(e);

    console.error("Problem with removing data");
    return false;
  }
};

const getAllKeys = async () => {
  let keys = [];
  try {
    keys = await AsyncStorage.getAllKeys();
  } catch (e) {
    console.error(e);

    console.error("Mutliple keys retreiving error");
  }

  console.log(keys);
  return keys;
};

// export const clearSeatAllocations = async () => {
//   const keys = await getAllKeys();

//   try {
//     await AsyncStorage.multiRemove(keys);
//   } catch (e) {
//     console.error(e);
//     console.error("Error trying too remove data");
//   }

//   console.log("Done");
// };

// // A helper function to check if any of the existing keys has a previous checkInDate than the new one
// const checkPreviousDate = async (keys, newDate) => {
//   // Loop through the keys
//   for (let key of keys) {
//     // Get the value for each key
//     const value = await getSeatData(key);

//     // Get the checkInDate for each value
//     const oldDate = new Date(value.checkInDate);

//     // Compare the dates
//     if (oldDate < newDate) {
//       // Return true if any previous date is found
//       return true;
//     }
//   }

//   // Return false if no previous date is found
//   return false;
// };
