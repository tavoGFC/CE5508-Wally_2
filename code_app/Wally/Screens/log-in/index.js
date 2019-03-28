import * as React from "react";
import {
  Alert,
  ActivityIndicator,
  AppRegistry,
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  DismissKeyboard
} from "react-native";

import Firebase from "../../connections/firebase";
import TrashIcon from "../../assets/trash.png";

export default class LogIn extends React.Component {
  static navigationOptions = {
    title: "Basurero Inteligente: Wally"
    //headerForceInset: { top: "never", bottom: "never" }
  };

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      email: "",
      password: "",
      response: ""
    };
  }

  _logIn = async () => {
    try {
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
  };

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
    Alert.alert("Registrarse");
    this.props.navigation.navigate("SignUp");
  };

  render() {
    const spinner = this.state.isLoading ? (
      <ActivityIndicator size="large" />
    ) : null;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Wally</Text>
        <Text style={styles.description}>Ingrese su correo y contaseña. </Text>
        <View style={styles.flowRight}>
          <TextInput
            underlineColorAndroid={"transparent"}
            style={styles.searchInput}
            placeholder="Correo"
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
            secureTextEntry={true}
          />
          <Button onPress={this._logIn} color="#772a2a" title="Ingresar" />
          <Button
            onPress={this._onSignUpPressed}
            color="#772a2a"
            title="Registrarse"
          />
        </View>
        <Text style={styles.description}>{this.state.message}</Text>
        <Image source={TrashIcon} style={styles.image} />
        {spinner}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: "center",
    backgroundColor: "white"
  },
  title: {
    fontSize: 50,
    textAlign: "center",
    marginBottom: 30
  },
  description: {
    marginBottom: 5,
    fontSize: 18,
    color: "#772a2a",
    textAlign: "center"
  },
  flowRight: {
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "stretch"
  },
  searchInput: {
    justifyContent: "space-between",
    height: 36,
    padding: 1,
    marginRight: 5,
    marginTop: 10,
    width: "50%",
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#772a2a",
    borderRadius: 8,
    color: "#000000",
    paddingBottom: 6,
    textAlign: "center"
  },
  image: {
    width: "50%",
    height: "50%",
    resizeMode: "center"
  }
});
