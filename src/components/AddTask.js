import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  Modal,
} from "react-native";
import React, { useState } from "react";

const Addtask = ({ handleAddTaskButton, handleHideModal, visible }) => {
  const [task, setTask] = useState("");
  // handle input values
  const handleInputValue = (inputTask) => {
    setTask(inputTask);
  };

  const addTask = () => {
    if (!task) {
      return Alert.alert("Please Add a Task");
    }
    handleAddTaskButton(task);
  };
  return (
    <Modal animationType="slide" visible={visible}>
      <View>
        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={handleInputValue}
            style={styles.inputBox}
            placeholder="Add Your Task"
          />
          <View style={styles.btnGroup}>
            <View style={styles.btn}>
              <Button onPress={addTask} title="Add Task" />
            </View>
            <View style={styles.btn}>
              <Button title="Cancel" onPress={handleHideModal} />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  inputBox: {
    width: "75%",
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 10,
    padding: 5,
    paddingLeft: 15,
  },
  btnGroup: {
    flexDirection: {
      flexDirection: "row",
      marginTop: 20,
    },
    btn: {
      width: "40%",
      marginHorizontal: 20,
    },
  },
});

export default Addtask;
