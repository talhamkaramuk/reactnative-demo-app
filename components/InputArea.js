import { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import logo from "../assets/icons8-pen-100.png";

function InputArea(props) {
  const [enteredTodo, setEnteredTodo] = useState("");

  function inputHandler(enteredTodo) {
    setEnteredTodo(enteredTodo);
  }

  function addTodoHandler() {
    props.buttonHandler(enteredTodo);
    setEnteredTodo("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={logo} style={styles.logo} />
        <TextInput
          style={styles.textInput}
          placeholder="Alışveriş yap, toplantıya katıl..."
          onChangeText={inputHandler}
          value={enteredTodo}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Ekle" onPress={addTodoHandler} color="#5e0acc" />
          </View>
          <View style={styles.button}>
            <Button title="İptal" onPress={props.closeModal} color="#aaa" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    width: "90%",
    borderBottomWidth: 1,
    borderRadius: 10,
    borderColor: "#ccc",
    paddingHorizontal: 8,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: "25%",
    marginHorizontal: 8,
  },
  logo: {
    width: 80,
    height: 80,
    margin: 24,
  },
});

export default InputArea;
