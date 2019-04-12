import * as React from 'react';
import { FlatList, ActivityIndicator, Text, View } from 'react-native';

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
    return fetch('http://10.10.10.228:8000/api/v1/stats/latestStats')
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson
          },
          function() {}
        );
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
      const dataWally = this.state.dataSource.map((val, key) => {
        return (
          <View key={key} style={styles.description}>
            <Text>Mes: {val.Month} </Text>
            <Text>{val.leftScale} kg de basura </Text>
            <Text>{val.leftScale} kg de material reciclable </Text>
          </View>
        );
      });
    }
    return <View style={styles.containerDashboard}>{dataWally}</View>;
  }
}

const styles = stylesTabDashboard;
