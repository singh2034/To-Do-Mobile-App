import {
  View,
  Text,
  StyleSheet,
  // ScrollView,
  FlatList,
  Button,
} from "react-native";
import React, { useState } from "react";
import TaskItem from "./components/TaskItem";
import Addtask from "./components/Addtask";

const Tasks = () => {
  const [showModal, setShowModal] = useState(false);

  const [taskList, setTaskList] = useState([]);

  // handle modal
  const handleModal = () => {
    setShowModal(true);
  };

  // hide modal
  const handleHideModal = () => {
    setShowModal(false);
  };

  // add task button
  const handleAddTaskButton = (task) => {
    setTaskList((prevTask) => [
      ...prevTask,
      { task: task, id: Math.random().toString() },
    ]);
    handleHideModal();
  };

  // handle delete
  const handleDelete = (id) => {
    setTaskList((currentList) => currentList.filter((t) => t.id !== id));
    console.log("Delete item called");
  };
  return (
    <View style={styles.container}>
      {showModal && (
        <Addtask
          handleHideModal={handleHideModal}
          addTask={handleAddTaskButton}
          visible={showModal}
        />
      )}
      <Button title="Add Task" onPress={handleModal} />
      <Text style={styles.border}></Text>
      {taskList.length > 0 ? (
        <Text style={styles.textTitle}>Your Tasks : </Text>
      ) : (
        <Text style={styles.textTitle}>You are all clean </Text>
      )}
      {/* <Text style={styles.textTitle}>Your Tasks</Text> */}

      {/* mapping the loop in it */}
      <FlatList
        data={taskList}
        renderItem={({ item, index }) => (
          <TaskItem handleDelete={handleDelete} item={item} index={index} />
        )}
        keyExtractor={(item, index) => {
          return index;
        }}
      />
      {/* <ScrollView>
      {taskList?.map((taskItem, index) => (
              <Text style={styles.taskItem} key={index}>
                {taskItem}
              </Text>
            ))}
      </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 15,
  },

  textTitle: {
    marginTop: 10,
    fontSize: 26,
    color: "#52b2bf",
    fontWeight: "bold",
  },
  border: {
    borderBottomWidth: 1,
    color: "#cccccc",
  },
});

export default Tasks;
