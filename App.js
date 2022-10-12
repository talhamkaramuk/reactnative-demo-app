import { useState } from "react";
import uuid from "react-native-uuid";
import { FlatList, StyleSheet, View } from "react-native";
import TodoItem from "./components/TodoItem";
import InputArea from "./components/InputArea";

export default function App() {
  const [todos, setTodos] = useState([]);

  function buttonHandler(enteredTodo) {
    // setTodos([...todos, enteredTodo]); <<<<Good but not the best>>>>
    setTodos((currentTodo) => [
      ...currentTodo,
      { text: enteredTodo, key: uuid.v4() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <InputArea buttonHandler={buttonHandler} />
      <View style={styles.contentContainer}>
        <FlatList
          data={todos}
          renderItem={(itemData) => {
            return <TodoItem text={itemData.item.text} />;
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
