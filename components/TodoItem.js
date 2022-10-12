import { Pressable, StyleSheet, Text } from "react-native";

function TodoItem(props) {
  return (
    <Pressable>
      <Text style={styles.todoItem}>{props.text}</Text>
    </Pressable>
  );
}

export default TodoItem;

const styles = StyleSheet.create({
  todoItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "#fff",
  },
});
