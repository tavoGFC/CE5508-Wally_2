import * as React from "react";
import { Text } from "react-native";

export default class SettingsPage extends React.Component {
  static navigationOptions = {
    title: "Configuracion"
  };
  render() {
    return <Text>Pagina de configuracion</Text>;
  }
}
