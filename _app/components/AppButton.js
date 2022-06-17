import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const AppButton = ({ title, style, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    width: "100%",
    backgroundColor: "black",
    borderRadius: 10,
    marginTop: 20,
  },
  title: {
    color: "white",
    textAlign: "center",
  },
});
