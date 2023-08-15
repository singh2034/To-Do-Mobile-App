import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

const TaskItem = ({ index, item, handleDelete }) => {
  return (
    <Pressable
      android_ripple={{ color: "#cccccc" }}
      onPress={handleDelete.bind(this, item.id)}
    >
      <View>
        <Text style={styles.taskItem}>
          {index + 1} : {item.task}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    margin: 10,
    padding: 20,
    borderRadius: 20,
    backgroundColor: "#03ac13",
    color: "#fff",
  },
});

export default TaskItem;
