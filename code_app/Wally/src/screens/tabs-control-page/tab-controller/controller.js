import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import stylesTabController from '../../../styles/styles';
import MQTTClient from '../../../components/mqtt';

export default class TabController extends React.Component {
  static navigationOptions = {
    title: 'Controlar Wally'
  };

  constructor(props) {
    super(props);
    this.mqttCommands = MQTTClient();
  }

  _sendDataToServer = () => {
    this.mqttCommands;
    console.info("Hice un algo.")
  }

  render() {
    const handlePress = () => false;
    return (
      <View style={styles.containerTabController}>
        <TouchableOpacity onPress={this._sendDataToServer}>
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
