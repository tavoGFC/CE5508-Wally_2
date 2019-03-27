import * as React from "react";
import {
  Alert,
  ActivityIndicator,
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  dismissKeyboard
} from 'react-native';

//import Firebase from "../../connections/firebase";

export default class LogIn extends React.Component {
  static navigationOptions = {
    title: "Basurero Inteligente: Wally"
  };

  constructor(props) {
    super(props);

    

    this.state = {
      isLoading: false,
      email: "",
      password: "",
      response: ""
    };

    //this.logIn = this.logIn.bind(this);
  }

  logIn = async() =>  {
    //console.info(this.state.email);
    //console.info(this.state.password);
    //DismissKeyboard();
    try {
      this.props.Firebase.init();
      await Firebase.auth().signInWithEmailAndPassword(
        this.state.email,
        this.state.password
      );

      this.setState({
        response: "Bienvenido!"
      });
      this.props.navigation.navigate("Home");
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

  _onSignUpPressed = () => {
    //Alert.alert("Registrarse");
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
          <Button 
          onPress={this.logIn} 
          color="#48BBEC" 
          title="Ingresar">
          </Button>
          <Button
            onPress={this._onSignUpPressed}
            color="#48BBEC"
            title="Registrarse"
            >
          </Button>
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
