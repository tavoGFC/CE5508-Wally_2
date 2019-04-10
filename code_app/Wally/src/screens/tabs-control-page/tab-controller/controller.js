import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import stylesTabController from '../../../styles/styles';
import MQTTClient from '../../../components/mqtt';
//import { test1, test2, test3 } from '../../../components/testFile';

export default class TabController extends React.Component {
  static navigationOptions = {
    title: 'Controlar Wally'
  };

  render() {
    return (
      <View style={styles.containerTabController}>
        <TouchableOpacity
          onPress={() => {
            MQTTClient('abrir');
          }}
        >
          <Text style={styles.button}>Abrir Tapa</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            MQTTClient('cerrar');
          }}
        >
          <Text style={styles.button}>Cerrar Tapa</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            MQTTClient('presionar');
          }}
        >
          <Text style={styles.button}>Comprimir Basura</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = stylesTabController;
