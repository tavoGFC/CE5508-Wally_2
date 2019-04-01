import * as React from "react";
import { Text } from "react-native";

import stylesSettings from "../../styles/styles";

export default class SettingsPage extends React.Component {
  static navigationOptions = {
    title: "Configuración"
  };
  render() {
    return <Text style={styles.description}>CONFIGURACIONES</Text>;
  }
}

const styles = stylesSettings;
