import * as React from 'react';
import { Text } from 'react-native';

import stylesSettings from '../../styles/styles';
import MQTTClient from '../../../components/mqtt';

export default class SettingsPage extends React.Component {
  static navigationOptions = {
    title: 'Configuración'
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.containerTabController}>
        <Text style={styles.titleTabDashboard}>Ajustes de Wally:</Text>
        <View style={styles.containerTabController}>
          <Text style={styles.descriptionWarningController}>
            Ajuste el peso tara de las pesas de Wally.
          </Text>
          <TouchableOpacity
            onPress={() => {
              MQTTClient('tare');
            }}
          >
            <Text style={styles.button}>Ajustar Peso Tara</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = stylesSettings;
