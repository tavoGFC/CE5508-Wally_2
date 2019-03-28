import * as React from "react";
import {
  Alert,
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

export default class SignUp extends React.Component {
  static navigationOptions = {
    title: "Registrese en Wally"
  };

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      response: ""
    };

    this.validateName = this.validateName.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
  }

  _signUp = async () => {
    try {
      await Firebase.auth().createUserWithEmailAndPassword(
        this.state.email,
        this.state.password
      );

      this.setState({
        response: "Cuenta creada."
      });
      this.props.navigation.navigate("Home");
    } catch (error) {
      this.setState({
        response: error.toString()
      });
    }
  };

  _onSearchNameUser = event => {
    this.setState({
      name: event.nativeEvent.text
    });
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

  _onSearchConfirmPasswordUser = event => {
    this.setState({
      confirmPassword: event.nativeEvent.text
    });
  };

  _submitInformation = () => {
    if (
      this.validateName() &&
      this.validateEmail() &&
      this.validatePassword()
    ) {
      this._signUp();
    } else {
      Alert.alert("Los datos ingresados son incorrectos. ");
    }
  };

  validateName() {
    if (this.state.name === "") {
      return false;
    } else {
      return true;
    }
  }

  validateEmail() {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(this.state.email) === false) {
      return false;
    } else {
      return true;
    }
  }

  validatePassword() {
    if (this.state.password !== this.state.confirmPassword) {
      return false;
    }
    if (this.state.password === "" || this.state.confirmPassword === "") {
      return false;
    } else {
      return true;
    }
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
        <View style={styles.flowRight}>
          <TextInput
            underlineColorAndroid={"transparent"}
            style={styles.searchInput}
            placeholder="Nombre"
            value={this.state.searchNameUser}
            placeholderTextColor="#656565"
            onChange={this._onSearchNameUser}
          />
          <TextInput
            underlineColorAndroid={"transparent"}
            style={styles.searchInput}
            placeholder="Correo"
            value={this.state.searchEmailUser}
            placeholderTextColor="#656565"
            onChange={this._onSearchEmailUser}
          />
          <TextInput
            underlineColorAndroid={"transparent"}
            style={styles.searchInput}
            placeholder="Contraseña"
            value={this.state.searchPasswordUser}
            placeholderTextColor="#656565"
            onChange={this._onSearchPasswordUser}
            secureTextEntry={true}
          />
          <TextInput
            underlineColorAndroid={"transparent"}
            style={styles.searchInput}
            placeholder="Repetir Contraseña "
            value={this.state.searchConfirmPasswordUser}
            placeholderTextColor="#656565"
            onChange={this._onSearchConfirmPasswordUser}
            secureTextEntry={true}
          />
        </View>
        <Button
          color="#772a2a"
          title="Registrarse"
          onPress={this._submitInformation}
        />
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
    width: "60%",
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
