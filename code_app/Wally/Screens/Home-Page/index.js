import * as React from 'react';
import {
  Alert,
  ActivityIndicator,
  Button,
  FlatList, 
  Image, 
  StyleSheet,
  Text, 
  TextInput,
  TouchableHighlight, 
  View 
  } from 'react-native';
import IconDumpster from '../../assets/iconBasurero3.png';
import IconSettings from '../../assets/iconConfig.png';

export default class HomePage extends React.Component {
  static navigationOptions = {
    title: 'Pagina Principal'
  }

  constructor() {
    super();
    this.state = {
      dataSource: [
        {key: 'One', image: IconDumpster},
        {key: 'Two', image: IconSettings}
      ]
    };
  }

  _selectGridItem (item) {
   //Alert.alert(item);
    if (item === 'One'){
      this.props.navigation.navigate("TabsControl");
    }
    else if (item === 'Two'){
      this.props.navigation.navigate("Settings");
    }
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <View style={styles.gridViewColumns}>
              <TouchableHighlight  onPress={this._selectGridItem.bind(this, item.key)}>
              <Image style={styles.imageThumbnail} source={item.image}></Image>
              </TouchableHighlight>
            </View>
          )}
          numColumns={2}
        />
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  
  mainContainer: {
    justifyContent: 'center',
    flex: 1,
    paddingTop: '35%',
  },
  imageThumbnail: {
    alignItems: 'center',
    resizeMode: 'contain',
    width: 100,
    height: 100,
  },
  gridViewColumns: {
    justifyContent: 'center',
    flex:1,
    alignItems: 'center',
    height: 100,
    margin: 2,
    backgroundColor: '#fff'
  }
});