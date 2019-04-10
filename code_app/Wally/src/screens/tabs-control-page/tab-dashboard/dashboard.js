import * as React from 'react';
import { FlatList, ActivityIndicator, Text, View } from 'react-native';

import stylesTabDashboard from '../../../styles/styles';

export default class TabDashboard extends React.Component {
  static navigationOptions = {
    title: 'Estadísticas Wally'
  };

  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  };

  componentDidMount() {
    return fetch('http://192.168.1.8:8000/api/v1/allStats')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function () {

        });

      })
      .catch((error) => {
        console.error(error);
      });
  }



  render() {

    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }

    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => <Text style={styles.description}> {item.Month}: {item.leftScale} kg de basura, {item.rightScale} kg de material reciclable.</Text>}
          keyExtractor={({ id }, index) => id}
        />
      </View>
    );
  }
}

const styles = stylesTabDashboard;
