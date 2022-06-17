import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import DatePicker from "react-native-styled-datepicker";
import { AntDesign } from "@expo/vector-icons";
import { CheckBox } from "@rneui/themed";
import AppButton from "../../../components/AppButton";
import { useNavigation } from "@react-navigation/native";
const status = [
  { id: 0, status: "Active", checked: false },
  { id: 1, status: "Super Active", checked: false },
  { id: 2, status: "Bored", checked: false },
];
const InputFields = () => {
  const [openCalendar, setOpenCalendar] = useState(false);
  const [endcalendar, setEndcalendar] = useState(false);
  const [startingDate, setStartingDate] = useState();
  const [endingDate, setEndingDate] = useState();
  const [checkbox1, setCheckbox1] = useState(status);
  const [checkbox2, setCheckbox2] = useState(status);
  const [checkbox3, setCheckbox3] = useState(status);
  const navigation = useNavigation();
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.text}>Pick Dates</Text>
      <View style={styles.formDate}>
        <TextInput
          onFocus={() => setOpenCalendar(true)}
          onPressIn={() => setOpenCalendar(true)}
          onBlur={() => {
            console.log("callig"), setOpenCalendar(false);
          }}
          style={styles.input}
          placeholder="From"
          editable
          defaultValue={startingDate}
        />
      </View>
      <View style={styles.formDate}>
        <TextInput
          onFocus={() => setEndcalendar(true)}
          onPressIn={() => setEndcalendar(true)}
          onBlur={() => {
            console.log("callig"), setEndcalendar(false);
          }}
          style={styles.input}
          placeholder="From"
          editable
          defaultValue={endingDate}
        />
      </View>
      {openCalendar && (
        <DatePicker
          onChange={(e) => {
            setStartingDate(e);
            setOpenCalendar(false);
          }}
        />
      )}
      {endcalendar && (
        <DatePicker
          onChange={(e) => {
            setEndingDate(e);
            setEndcalendar(false);
          }}
        />
      )}

      <TouchableOpacity style={styles.checkboxContainer}>
        <CheckBox
          title={"Active"}
          checked={checkbox1}
          // checked={index === acitveIndex ? true : false}
          onPress={() => {
            setCheckbox1(!checkbox1);
          }}
          containerStyle={{
            backgroundColor: "orange",
            paddingVertical: 5,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.checkboxContainer}>
        <CheckBox
          title={"Super Active"}
          checked={checkbox2}
          // checked={index === acitveIndex ? true : false}
          onPress={() => {
            setCheckbox2(!checkbox2);
          }}
          containerStyle={{
            backgroundColor: "orange",
            paddingVertical: 5,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.checkboxContainer}>
        <CheckBox
          title={"Bored"}
          checked={checkbox3}
          // checked={index === acitveIndex ? true : false}
          onPress={() => {
            setCheckbox3(!checkbox3);
          }}
          containerStyle={{
            backgroundColor: "orange",

            paddingVertical: 5,
          }}
        />
      </TouchableOpacity>

      <AppButton
        title={"Generate Report"}
        onPress={() => navigation.navigate("UsersScreen")}
      />
    </View>
  );
};

export default InputFields;

const styles = StyleSheet.create({
  fieldContainer: {
    width: "100%",
    backgroundColor: "white",
    height: "60%",
    borderRadius: 10,
    padding: 20,
  },
  text: {
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    borderRadius: 10,
  },
  formDate: {
    marginVertical: 10,
  },
  checkboxContainer: {
    width: "100%",
    backgroundColor: "orange",
    marginVertical: 10,
    borderRadius: 50,
    textAlign: "left",
  },
});
