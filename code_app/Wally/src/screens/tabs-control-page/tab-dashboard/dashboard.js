import * as React from 'react';
import {
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  Text,
  View
} from 'react-native';

import stylesTabDashboard from '../../../styles/styles';

export default class TabDashboard extends React.Component {
  static navigationOptions = {
    title: 'Estadísticas Wally'
  };

  constructor(props) {
    super(props);
    this.state = { isLoading: true, refreshing: false };
  }

  componentDidMount() {
    return fetch('http://192.168.43.84:8000/api/v1/stats/newestStats')
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
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={() => this.componentDidMount()}
            />
          }
        >
          <View style={styles.containerTabDashboard}>
            <Text style={styles.titleTabDashboard}>Estadísticas de Wally</Text>
            <View style={styles.containerTabDashboard}>
              <Text style={styles.descriptionTabDashboard}>
                Mes:
                {this.state.dataSource.Month}
              </Text>
              <Text style={styles.descriptionTabDashboard}>
                Material desechable:
                {this.state.dataSource.leftScale} g
              </Text>
              <Text style={styles.descriptionTabDashboard}>
                Material reciclable:
                {this.state.dataSource.rightScale} g
              </Text>
            </View>
          </View>
        </ScrollView>
      );
    }
  }
}

const styles = stylesTabDashboard;
