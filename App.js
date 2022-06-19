import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import ScreenStack from "./_app/navigation/ScreenStack";
import { store } from "./_app/redux/store";
import { ToastProvider } from "react-native-toast-notifications";
export default function App() {
  return (
    <Provider store={store}>
      <ToastProvider>
        <NavigationContainer>
          <ScreenStack />
        </NavigationContainer>
      </ToastProvider>
    </Provider>
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
