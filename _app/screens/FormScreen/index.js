import { StyleSheet, View } from "react-native";
import React from "react";
import InputFields from "./sections/InputFields";
import { useSelector } from "react-redux";

const FormScreen = () => {
  return (
    <View style={styles.container}>
      <InputFields />
    </View>
  );
};

export default FormScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
});
