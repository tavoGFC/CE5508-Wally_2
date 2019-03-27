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

export default class SignUp extends React.Component {
  static navigationOptions = {
    title: "Registrese en Wally."
  };

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      response: "",
      Firebase: this.props.Firebase
    };

    this.validateName = this.validateName.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
  }

  _signup = async () => {
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password);

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
      Alert.alert("servi");
    } else {
      Alert.alert("me mame");
    }
  };

  validateName() {
    if (this.state.name === "") {
      //this.setState({ validated: false });
      //Alert.alert("El nombre no puede ser vacío. ");
      return false;
    } else {
      //this.setState({ validated: true });
      //Alert.alert("El nombre es válido. ");
      return true;
    }
  }

  validateEmail() {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(this.state.email) === false) {
      //this.setState({ validated: false });
      //Alert.alert("El correo es inválido. ");
      return false;
    } else {
      //this.setState({ validated: true });
      //Alert.alert("El correo es válido. ");
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
            placeholder="Ingrese su nombre."
            value={this.state.searchNameUser}
            placeholderTextColor="#656565"
            onChange={this._onSearchNameUser}
          />
          <TextInput
            underlineColorAndroid={"transparent"}
            style={styles.searchInput}
            placeholder="Ingrese su correo."
            value={this.state.searchEmailUser}
            placeholderTextColor="#656565"
            onChange={this._onSearchEmailUser}
          />
          <TextInput
            underlineColorAndroid={"transparent"}
            style={styles.searchInput}
            placeholder="Ingrese su clave."
            value={this.state.searchPasswordUser}
            placeholderTextColor="#656565"
            onChange={this._onSearchPasswordUser}
            secureTextEntry={true}
          />
          <TextInput
            underlineColorAndroid={"transparent"}
            style={styles.searchInput}
            placeholder="Confirme su clave."
            value={this.state.searchConfirmPasswordUser}
            placeholderTextColor="#656565"
            onChange={this._onSearchConfirmPasswordUser}
            secureTextEntry={true}
          />
        </View>
        <Button
          color="#48BBEC"
          title="Registrarse"
          onPress={this._submitInformation}
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
    marginBottom: 5,
    fontSize: 18,
    color: "#656565",
    textAlign: "center"
  }
});
