import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomePage from "./screens/home-page";
import LogIn from "./screens/log-in";
import SignUp from "./screens/sign-up";
import Settings from "./screens/settings-page";
import TabsControl from "./screens/tabs-control-page"; 

const AppStack = createStackNavigator({
  Home: { screen: HomePage },
  Settings : { screen: Settings },
  TabsControl: { screen: TabsControl }
  /*
  LogIn: { screen: LogIn },
  SignUp: { screen: SignUp },
  Home: { screen: HomePage }
  */
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