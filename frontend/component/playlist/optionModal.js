import React from "react";
import {
  Modal,
  StatusBar,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { colorVariants } from "../../constants/globalConstants";

export const OptionModal = ({
  visible,
  currentItem,
  onCloseHandler,
  options,
}) => {
  const { title } = currentItem;
  return (
    <View>
      <StatusBar hidden />
      <Modal transparent visible={visible} animationType="slide">
        <View style={styles.modal}>
          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>
          <View style={styles.optionContainer}>
            {options.map((optn) => {
              return (
                <TouchableWithoutFeedback
                  key={optn.title}
                  onPress={optn.onPress}
                >
                  <Text style={styles.option}>{optn.title}</Text>
                </TouchableWithoutFeedback>
              );
            })}
          </View>
        </View>

        <TouchableWithoutFeedback onPress={onCloseHandler}>
          <View style={styles.modalBg} />
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: colorVariants.APP_BG,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    zIndex: 1000,
  },
  optionContainer: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 20,
    paddingBottom: 0,
    color: colorVariants.FONT_MEDIUM,
  },
  option: {
    fontSize: 16,
    fontWeight: "bold",
    paddingVertical: 10,
    color: colorVariants.FONT,
    letterSpacing: 1,
  },
  modalBg: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    height: "100%",
    backgroundColor: colorVariants.MODAL_BG,
  },
});
