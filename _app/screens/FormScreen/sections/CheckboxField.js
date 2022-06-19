import { StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { CheckBox } from "@rneui/themed";
import { useDispatch } from "react-redux";
import {
  setActive,
  setBored,
  setSuperActive,
} from "../../../redux/slices/inputSlice";
import { useSelector } from "react-redux";

const CheckboxField = () => {
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [checkbox3, setCheckbox3] = useState(false);
  const dispatch = useDispatch();
  const status = useSelector((state) => state.input);
  const { active, superActive, bored } = status;
  return (
    <View>
      <TouchableOpacity style={styles.checkboxContainer}>
        <CheckBox
          title={"Active"}
          checked={checkbox1 || active !== 0}
          checkedColor="orange"
          onPress={() => {
            setCheckbox1(!checkbox1);
            dispatch(setActive(!checkbox1 ? 10 : 0));
          }}
          containerStyle={{
            backgroundColor: "white",
            paddingVertical: 1,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.checkboxContainer}>
        <CheckBox
          title={"Super Active"}
          checked={checkbox2 || superActive !== 0}
          checkedColor="orange"
          onPress={() => {
            setCheckbox2(!checkbox2);
            dispatch(setSuperActive(!checkbox2 ? 10 : 0));
          }}
          containerStyle={{
            backgroundColor: "white",
            paddingVertical: 1,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.checkboxContainer}>
        <CheckBox
          title={"Bored"}
          checked={checkbox3 || bored !== 0}
          checkedColor="orange"
          onPress={() => {
            setCheckbox3(!checkbox3);
            dispatch(setBored(!checkbox3 ? 5 : 0));
          }}
          containerStyle={{
            backgroundColor: "white",

            paddingVertical: 1,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CheckboxField;

const styles = StyleSheet.create({
  checkboxContainer: {
    width: "100%",
    backgroundColor: "white",
    marginVertical: 10,
    borderRadius: 50,
    textAlign: "left",
    borderWidth: 1,
    borderColor: "gray",
    zIndex: -1,
  },
});
