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

export default class SettingsPage extends React.Component {
  static navigationOptions = {
    title: 'Configuracion'
  }
  render() {
    return (
      <Text>Pagina de configuracion</Text>
    );
  }
}


