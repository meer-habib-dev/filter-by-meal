import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FormScreen from "../screens/FormScreen";
import UsersScreen from "../screens/UsersScreen";

const ScreenStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={FormScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="UsersScreen"
        component={UsersScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default ScreenStack;

const styles = StyleSheet.create({});
