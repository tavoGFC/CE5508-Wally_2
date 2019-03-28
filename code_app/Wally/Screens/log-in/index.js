import * as React from "react";
import {
  Alert,
  ActivityIndicator,
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

import Firebase from "../../connections/firebase";
import TrashIcon from "../../assets/trash.png";

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
            style={styles.textInput}
            placeholder="Correo"
            value={this.state.searchUser}
            placeholderTextColor="#656565"
            onChange={this._onSearchEmailUser}
          />
          <TextInput
            underlineColorAndroid={"transparent"}
            style={styles.textInput}
            placeholder="******************"
            value={this.state.searchPassword}
            placeholderTextColor="#656565"
            onChange={this._onSearchPasswordUser}
            secureTextEntry={true}
          />
          <TouchableOpacity onPress={this._logIn}> 
            <Text style = {styles.button}>
            Ingresar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._onSignUpPressed}> 
            <Text style = {styles.button}>
            Registrarse
            </Text>
          </TouchableOpacity>
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
    alignItems: "center",
    backgroundColor: "white",
    marginTop: 5,
    padding: 10
  },
  title: {
    fontSize: 50,
    marginBottom: 15,
    textAlign: "center"
  },
  description: {
    color: "#772a2a",
    fontSize: 18,
    marginBottom: 5,
    textAlign: "center"
  },
  flowRight: {
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "column"
  },
  textInput: {
    borderColor: "#772a2a",
    borderRadius: 8,
    borderWidth: 1,
    color: "#000000",
    fontSize: 18,
    height: 36,
    justifyContent: "space-between",
    marginRight: 5,
    marginTop: 10,
    padding: 1,
    paddingBottom: 6,
    textAlign: "center",
    width: "50%"
  },
  image: {
    height: "50%",
    resizeMode: "center",
    width: "50%"
  },
  button: {
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
    width: 160
  }
});
