import * as React from 'react';
import {
  FlatList,
  Image,
  TouchableHighlight,
  View
} from 'react-native';

import iconDumpster from '../../../assets/iconBasurero3.png';
import iconSettings from '../../../assets/iconConfig.png';
import stylesHomePage from '../../styles/styles';

export default class HomePage extends React.Component {
  static navigationOptions = {
    title: 'Página Principal'
  };

  constructor() {
    super();
    this.state = {
      dataSource: [
        { key: 'One', image: iconDumpster },
        { key: 'Two', image: iconSettings }
      ]
    };
  }

  _selectGridItem(item) {
    if (item === 'One') {
      this.props.navigation.navigate('TabsControl');
    } else if (item === 'Two') {
      this.props.navigation.navigate('Settings');
    }
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <View style={styles.gridViewColumns}>
              <TouchableHighlight
                underlayColor={'#98FB98'}
                onPress={this._selectGridItem.bind(this, item.key)}
              >
                <Image style={styles.imageThumbnail} source={item.image} />
              </TouchableHighlight>
            </View>
          )}
          numColumns={2}
        />
      </View>
    );
  }
}

const styles = stylesHomePage;
