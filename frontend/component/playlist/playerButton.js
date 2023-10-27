import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { colorVariants } from "../../constants/globalConstants";

const PlayerButton = (props) => {
  const {
    iconType,
    size = 40,
    iconColor = colorVariants.FONT,
    onPress,
  } = props;

  const getIconName = (type) => {
    switch (type) {
      case "PLAY":
        return "pausecircle";
      case "PAUSE":
        return "playcircleo";
      case "NEXT":
        return "forward";
      case "PREV":
        return "banckward";
    }
  };
  return (
    <AntDesign
      {...props}
      onPress={onPress}
      name={getIconName(iconType)}
      size={size}
      color={iconColor}
    />
  );
};

export default PlayerButton;
