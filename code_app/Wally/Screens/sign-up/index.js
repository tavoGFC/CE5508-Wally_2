import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  ActivityIndicator,
  AppRegistry,
  dismissKeyboard,
  TouchableWithoutFeedback
} from "react-native";

//import Firebase from "../../connections/firebase";

export default class SignUp extends React.Component {
  static navigationOptions = {
    title: "Registrese en Wally."
  };

  constructor(props) {
    super(props);
    //Firebase.init();

    this.state = {
      isLoading: false,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      response: ""
    };
  }

  render() {
    const spinner = this.state.isLoading ? (
      <ActivityIndicator size="large" />
    ) : null;
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Bienvenido. Por favor ingrese datos.
        </Text>
        <TextInput
          underlineColorAndroid={"transparent"}
          style={styles.searchInput}
          placeholder="Ingrese su nombre."
          value={this.state.searchUser}
          placeholderTextColor="#656565"
          onChange={this._onSearchEmailUser}
        />
        <TextInput
          underlineColorAndroid={"transparent"}
          style={styles.searchInput}
          placeholder="Ingrese su apellido."
          value={this.state.searchUser}
          placeholderTextColor="#656565"
          onChange={this._onSearchEmailUser}
        />
        <TextInput
          underlineColorAndroid={"transparent"}
          style={styles.searchInput}
          placeholder="Ingrese su correo."
          value={this.state.searchUser}
          placeholderTextColor="#656565"
          onChange={this._onSearchEmailUser}
        />
        <TextInput
          underlineColorAndroid={"transparent"}
          style={styles.searchInput}
          placeholder="Ingrese su clave."
          value={this.state.searchUser}
          placeholderTextColor="#656565"
          onChange={this._onSearchEmailUser}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flowRight: {
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "stretch"
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    width: "100%",
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#48BBEC",
    borderRadius: 8,
    color: "#48BBEC"
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: "center"
  },
  description: {
    //marginButton: 5,
    fontSize: 18,
    color: "#656565",
    textAlign: "center"
  }
});
