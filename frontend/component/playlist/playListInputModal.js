import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import {
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { colorVariants } from "../../constants/globalConstants";

const PlayListInputModal = ({ visible, onClose, onSubmit }) => {
  const [playListName, setPlayListName] = useState("");

  const handleOnSubmit = () => {
    if (!playListName.trim()) {
      onClose();
    } else {
      onSubmit(playListName);
      setPlayListName("");
      onClose();
    }
  };

  return (
    <Modal visible={visible} animationType="fade" transparent>
      <View style={styles.modalContainer}>
        <View style={styles.inputContainer}>
          <Text style={{ color: colorVariants.ACTIVE_BG }}>
            Create New Playlist
          </Text>
          <TextInput
            value={playListName}
            onChangeText={(text) => setPlayListName(text)}
            style={styles.input}
          />
          <AntDesign
            name="check"
            size={24}
            color={colorVariants.ACTIVE_FONT}
            style={styles.submitIcon}
            onPress={handleOnSubmit}
          />
        </View>
      </View>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={[StyleSheet.absoluteFillObject, styles.modalBG]} />
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: width - 20,
    height: 200,
    borderRadius: 10,
    backgroundColor: colorVariants.ACTIVE_FONT,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: width - 40,
    borderBottomWidth: 1,
    borderBottomColor: colorVariants.ACTIVE_BG,
    fontSize: 18,
    paddingVertical: 5,
  },
  submitIcon: {
    padding: 10,
    backgroundColor: colorVariants.ACTIVE_BG,
    borderRadius: 50,
    marginTop: 15,
  },
  modalBG: {
    backgroundColor: colorVariants.MODAL_BG,
    zIndex: -1,
  },
});

export default PlayListInputModal;
