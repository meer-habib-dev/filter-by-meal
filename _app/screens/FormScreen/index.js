import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import InputFields from "./sections/InputFields";
import { useSelector } from "react-redux";

const FormScreen = () => {
  const status = useSelector((state) => state.input);

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
