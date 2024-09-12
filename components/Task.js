import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Task = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(props.text);

  const handleEdit = () => {
    if (isEditing) {
      props.onEditConfirm(editText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={editText}
            onChangeText={setEditText}
            placeholderTextColor="#B0B0B0"
          />
        ) : (
          <Text style={styles.itemText}>{props.text}</Text>
        )}
      </View>
      <View style={styles.actions}>
        {/* Edit button */}
        <TouchableOpacity onPress={handleEdit}>
          <MaterialIcons
            name={isEditing ? "check" : "edit"}
            size={24}
            color="blue"
          />
        </TouchableOpacity>
        {/* Delete button */}
        <TouchableOpacity onPress={props.onDelete}>
          <MaterialIcons name="delete" size={24} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#55BCF6",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: "80%",
  },
  input: {
    maxWidth: "80%",
    padding: 5,
    backgroundColor: "#FFF",
    borderWidth: 0,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Task;
