import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

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
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Alışveriş yap, toplantıya katıl..."
        onChangeText={inputHandler}
        value={enteredTodo}
      />
      <Button title="Ekle" onPress={addTodoHandler} color="#5e0acc" />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  textInput: {
    width: "80%",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#ccc",
    marginRight: 8,
    padding: 8,
  },
});

export default InputArea;
