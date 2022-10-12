import { useState } from "react";
import uuid from "react-native-uuid";
import { Button, FlatList, StyleSheet, View } from "react-native";
import TodoItem from "./components/TodoItem";
import InputArea from "./components/InputArea";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startModalHandler() {
    setModalIsVisible(true);
  }

  function endModalHandler() {
    setModalIsVisible(false);
  }

  function buttonHandler(enteredTodo) {
    // setTodos([...todos, enteredTodo]); <<<<Good but not the best>>>>
    setTodos((currentTodo) => [
      ...currentTodo,
      { text: enteredTodo, id: uuid.v4() },
    ]);
    endModalHandler();
  }

  function deleteHandler(id) {
    setTodos((currentTodo) => {
      return currentTodo.filter((todo) => todo.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <Button title="Yeni" color="#5e0acc" onPress={startModalHandler} />
      <InputArea
        buttonHandler={buttonHandler}
        visible={modalIsVisible}
        closeModal={endModalHandler}
      />
      <View style={styles.contentContainer}>
        <FlatList
          data={todos}
          renderItem={(itemData) => {
            return (
              <TodoItem
                text={itemData.item.text}
                deleteTodo={deleteHandler}
                id={itemData.item.id}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  contentContainer: {
    flex: 3,
  },
});
