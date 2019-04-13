import * as React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

import stylesTabDashboard from '../../../styles/styles';

export default class TabDashboard extends React.Component {
  static navigationOptions = {
    title: 'Estadísticas Wally'
  };

  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    return fetch('http://172.20.10.2:8000/api/v1/stats/newestStats')
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson != '') {
          const parseResponse = JSON.stringify(responseJson);
          if (parseResponse != '') {
            this.setState(
              {
                isLoading: false,
                dataSource: JSON.parse(parseResponse)
              },
              function() {}
            );
          }
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    } else {
      return (
        <View style={styles.containerTabDashboard}>
          <Text style={styles.titleTabDashboard}>Estadísticas de Wally</Text>
          <View style={styles.containerTabDashboard}>
            {
              <Text style={styles.descriptionTabDashboard}>
                <Text>
                  {'\n'}
                  Mes:
                  {'\n'}
                  {this.state.dataSource.Month}
                  {'\n'}
                </Text>
                <Text>
                  {'\n'}
                  Material desechable:
                  {'\n'}
                  {this.state.dataSource.leftScale} kg
                  {'\n'}
                </Text>
                <Text>
                  {'\n'}
                  Material reciclable:
                  {'\n'}
                  {this.state.dataSource.rightScale} kg
                  {'\n'}
                </Text>
              </Text>
            }
          </View>
        </View>
      );
    }
  }
}

const styles = stylesTabDashboard;
