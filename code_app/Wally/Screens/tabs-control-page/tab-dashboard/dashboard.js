import * as React from "react";
import {
  Alert,
  ActivityIndicator,
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  dismissKeyboard
} from 'react-native';

export default class TabDashboard extends React.Component {
  static navigationOptions = {
    title: "Estadisiticas Wally"
  };
  
  render() {
    return (
      <View style={styles.container}>
        <Text>Enero: 10 kg de basura</Text>
        <Text>Febrero: 8 kg de basura</Text>
        <Text>Marzo: 5 kg de basura</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: "center"
  }
});