import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomePage from "./screens/home-page";
import LogIn from "./screens/log-in";
import SignUp from "./screens/sign-up";

const AppStack = createStackNavigator({
  LogIn: { screen: LogIn },
  SignUp: { screen: SignUp },
  Home: { screen: HomePage }
});

const App = createAppContainer(AppStack);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});