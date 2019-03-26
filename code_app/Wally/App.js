import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "react-navigation";

const App = createStackNavigator({
  Login: {screen: LoginPage},
  Home: {screen: SearchPage},
  Results: {screen: SearchResults}
})


export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
