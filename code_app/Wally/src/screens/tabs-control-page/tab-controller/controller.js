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
  }

  render() {
    return (
      <View style={styles.containerTabController}>
        <Text style={styles.titleTabDashboard}>Control de Wally</Text>
        <View style={styles.containerTabController}>
          <Text style={styles.descriptionWarningController}>
            Verifique que encima de Wally no haya ningún objeto.
          </Text>
          <TouchableOpacity
            onPress={() => {
              MQTTClient('open');
            }} 
          >
            <Text style={styles.button}>Abrir Tapa</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              MQTTClient('close');
            }}
          >
            <Text style={styles.button}>Cerrar Tapa</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              MQTTClient('compress');
            }}
          >
            <Text style={styles.button}>Comprimir Basura</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = stylesTabController;
