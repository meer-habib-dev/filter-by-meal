import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppButton from "../../../components/AppButton";
import { useNavigation } from "@react-navigation/native";
import CheckboxField from "./CheckboxField";
import InputCalendarField from "./InputCalendarField";
import { useSelector } from "react-redux";
import { useToast } from "react-native-toast-notifications";

const InputFields = ({ onPress }) => {
  const navigation = useNavigation();
  const status = useSelector((state) => state.input);
  const toast = useToast();

  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.text}>USER ANALYZER</Text>
      <View>
        <Text style={styles.title}>Date Range:</Text>
        <InputCalendarField />
      </View>
      <View style={styles.checksContainer}>
        <Text style={styles.title}>Status:</Text>
        <CheckboxField />
      </View>

      <View style={styles.buttonContainer}>
        <AppButton
          title={"Generate Report"}
          onPress={() => {
            status.dateRange && navigation.navigate("UsersScreen");
            !status.dateRange &&
              toast.show("Date Range Required!", {
                type: "normal",
                placement: "bottom",
                duration: 4000,
                offset: 30,
                animationType: "slide-in",
              });
            // onPress();
          }}
        />
      </View>
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
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
  title: {
    fontWeight: "bold",
  },
  checksContainer: {
    zIndex: -1,
    marginTop: 10,
  },
  buttonContainer: {
    position: "absolute",
    width: "100%",
    bottom: 20,
    marginHorizontal: 20,
    zIndex: -1,
  },
});
