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

import Firebase from "../../connections/firebase";

export default class LogIn extends React.Component {
  static navigationOptions = {
    title: "Basurero Inteligente: Wally"
  };

  constructor(props) {
    super(props);

    Firebase.init();

    this.state = {
      isLoading: false,
      email: "",
      password: "",
      response: ""
    };

    this.logIn = this.logIn.bind(this);
  }

  async logIn() {
    //console.info(this.state.email);
    //console.info(this.state.password);
    //DismissKeyboard();
    try {
      await Firebase.auth().signInWithEmailAndPassword(
        this.state.email,
        this.state.password
      );

      this.setState({
        response: "Bienvenido!"
      });
      this.props.navigation.push("Home");
    } catch (error) {
      this.setState({
        response: error.toString()
      });
      console.info(this.state.response);
    }
  }

  _onSearchEmailUser = event => {
    this.setState({
      email: event.nativeEvent.text
    });
  };

  _onSearchPasswordUser = event => {
    this.setState({
      password: event.nativeEvent.text
    });
  };

  _onSignUpPressed() {
    this.props.navigation.navigate("SignUp");
  }

  /*
  _onSearchPressed = () => {
    if (
      this.state.searchUser === "randy" &&
      this.state.searchPassword === "randy123"
    ) {
      this.props.navigation.navigate("Home");
    } else {
      this.setState({
        message: "El usuario no existe. Favor de intentar de nuevo."
      });
    }
  };

  _onSearchTextUser = event => {
    this.setState({
      searchUser: event.nativeEvent.text
    });
  };

  _onSearchTextPassword = event => {
    this.setState({
      searchPassword: event.nativeEvent.text
    });
  };
  */

  render() {
    const spinner = this.state.isLoading ? (
      <ActivityIndicator size="large" />
    ) : null;
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Por favor ingrese su usuario y contraseña.
        </Text>
        <View style={styles.flowRight}>
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
            placeholder="******************"
            value={this.state.searchPassword}
            placeholderTextColor="#656565"
            onChange={this._onSearchPasswordUser}
          />
          <Button onPress={this.logIn} color="#48BBEC" title="Ingresar" />
          <Button
            //onPress={this.props.navigation.navigate("SignUp")}
            color="#48BBEC"
            title="Registrarse"
          />
        </View>
        <Text style={styles.description}>{this.state.message}</Text>
        {spinner}
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
    width: "50%",
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
