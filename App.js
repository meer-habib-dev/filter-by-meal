import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ScreenStack from "./_app/navigation/ScreenStack";
import FormScreen from "./_app/screens/FormScreen";

export default function App() {
  return (
    <NavigationContainer>
      <ScreenStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
