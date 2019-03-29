import * as React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
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
    alignItems: "center",
    marginTop: 65,
    padding: 30
  },
  actions: {
    backgroundColor: '#db256b',
    borderColor: 'white',
    borderRadius: 30,
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    height: 35,
    marginBottom: 5,
    marginTop: 5,
    padding: 8,
    textAlign:'center',
    width: 160,
  }
});
