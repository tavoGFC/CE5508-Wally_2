import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import stylesTabController from "../../../styles/styles";

export default class TabController extends React.Component {
  static navigationOptions = {
    title: "Controlar Wally"
  };

  render() {
    const handlePress = () => false;
    return (
      <View style={styles.containerTabController}>
        <TouchableOpacity onPress={handlePress}>
          <Text style={styles.button}>Abrir Tapa</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePress}>
          <Text style={styles.button}>Cerrar Tapa</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePress}>
          <Text style={styles.button}>Comprimir Basura</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = stylesTabController;
