import { Modal, Text, View, StyleSheet, Button } from "react-native";
import { Card } from "react-native-paper";

function SuccessModel({ visible, onClose, points, navigation, progress }) {
  function OnFinishHandler() {
    console.log(progress);
    navigation.navigate("PuzzleSelection");
  }
  return (
    <>
      <Modal visible={visible} animationType="slide">
        <Card style={styles.modalContainer}>
          <Card.Content style={styles.contentContainer}>
            <Text style={styles.headerText}>Congratulations!</Text>
            <Text style={styles.descriptionText}>
              You have earned {points} points.✴️
            </Text>
            <View style={styles.btnContainerFinish}>
              <Button
                color="red"
                title="Finish"
                onPress={() => OnFinishHandler()}
              />
            </View>
            <View style={styles.btnContainerNext}>
              <Button title="Next" onPress={onClose} />
            </View>
          </Card.Content>
        </Card>
      </Modal>
    </>
  );
}
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  contentContainer: {
    width: "80%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  descriptionText: {
    fontSize: 16,
    marginBottom: 20,
  },

  btnContainerFinish: {
    flexDirection: "row",
    marginTop: 16,
    marginRight: "20%",
  },
  btnContainerNext: {
    flexDirection: "row",
    marginTop: "-5%",
    marginLeft: "20%",
  },
});

export default SuccessModel;
