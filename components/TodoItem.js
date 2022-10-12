import { Pressable, StyleSheet, Text, View } from "react-native";

function TodoItem(props) {
  return (
    <View style={styles.todoItem}>
      <Pressable
        onPress={props.deleteTodo.bind(this, props.id)}
        android_ripple={{ color: "#2c065e" }}
      >
        <Text style={styles.todoText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default TodoItem;

const styles = StyleSheet.create({
  todoItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  todoText: {
    color: "#fff",
    padding: 8,
  },
});
