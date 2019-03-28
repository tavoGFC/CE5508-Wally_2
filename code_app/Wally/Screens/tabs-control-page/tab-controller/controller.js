import * as React from "react";
import {
  Alert,
  ActivityIndicator,
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  dismissKeyboard
} from 'react-native';

export default class TabController extends React.Component {
  static navigationOptions = {
    title: "Controlar Wally"
  };
  render() {
    const handlePress = () => false
    return (
      <View style={styles.container}>
        
        <TouchableOpacity onPress={handlePress}> 
          <Text style = {styles.actions}>
              Abrir Tapa
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePress}> 
          <Text style = {styles.actions}>
              Cerrar Tapa
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePress}> 
          <Text style = {styles.actions}>
              Comprimir Basura
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: "center"
  },
  actions: {
    height: 35,
    width: 160,
    backgroundColor: '#db256b',
    borderColor: 'white',
    borderRadius: 30,
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    padding: 8,
    marginTop: 5,
    marginBottom: 5,
    textAlign:'center',
  }
});
