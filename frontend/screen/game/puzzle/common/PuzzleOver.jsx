import { Modal, Text, View, StyleSheet, Button } from "react-native";

function PuzzleOver({ visible, onClose, points, navigation, progress }) {
  function OnFinishHandler() {
    console.log(progress);
    navigation.navigate("Home");
  }
  return (
    <>
      <Modal visible={visible} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.contentContainer}>
            <Text style={styles.headerText}>Congratulations!</Text>
            <Text style={styles.headerTextWin}>🎊 You Win 🎊</Text>
            <Text style={styles.headerTextWin}>Total points : {points} 🥇</Text>
            <Text style={styles.descriptionText}>
              Thank you for Playing this Game!
            </Text>
            <View style={styles.btnContainer}>
              <Button
                title="Finish"
                style={styles.buttonText}
                onPress={() => OnFinishHandler()}
              />
            </View>
          </View>
        </View>
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
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  headerTextWin: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  headerTextScore: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
  },
  descriptionText: {
    fontSize: 16,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    color: "blue",
    marginBottom: 10,
    width: 100,
    marginHorizontal: 16,
  },

  btnContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
});

export default PuzzleOver;
