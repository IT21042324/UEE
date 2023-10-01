import { Platform, StatusBar, StyleSheet } from "react-native";
import {
  colorVariants,
  flexValues,
  fontFamily,
  fontSize,
  fontWeight,
  margin,
} from "../constants/globalConstants";

export const globalStyles = StyleSheet.create({
  container: {
    backgroundColor: colorVariants.white,
    flex: flexValues.full,
    width: "100%",
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
  },
  titleText: {
    fontFamily: fontFamily.titleText,
    fontSize: fontSize.xxxLarge,
    color: colorVariants.darkGray,
  },
  subTitleText: {
    fontFamily: fontFamily.subTitleText,
    fontSize: fontSize.xLarge,
    color: colorVariants.black,
  },
  normalText: {
    fontFamily: fontFamily.subTitleText,
    fontSize: fontSize.large,
    color: colorVariants.black,
  },
  errorText: {
    color: colorVariants.crimson,
    fontWeight: fontWeight.bold,
    marginTop: margin.formErrorText,
  },
});
