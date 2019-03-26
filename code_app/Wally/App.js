import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
//import LogIn from "./screens/log-in";
import Home from "./screens/home-page";

const AppStack = createStackNavigator({
  Home: { screen: Home }
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