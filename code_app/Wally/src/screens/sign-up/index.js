import * as React from 'react';
import {
  ActivityIndicator,
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import stylesSignUp from '../../styles/styles';

export default class SignUp extends React.Component {
  static navigationOptions = {
    title: 'Registrese en Wally'
  };

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      response: ''
    };

    this.validateName = this.validateName.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
  }

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

  _registerNewUser = () => {
    const formData = new FormData();
    formData.append('name', this.state.name);
    formData.append('email', this.state.email);
    formData.append('password', this.state.password);
    fetch('http://192.168.1.8:8000/api/v1/users/insert', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      body: formData
    });
  }

  _signUp = () => {
    try {
      this._registerNewUser();
      this.props.navigation.navigate('Home');
    } catch (error) {
      this.setState({
        response: error.toString()
      });
    }
  };

  _submitInformation = () => {
    if (
      this.validateName() &&
      this.validateEmail() &&
      this.validatePassword()
    ) {
      this._signUp();
    } else {
      Alert.alert('Los datos ingresados son incorrectos. ');
    }
  };

  validateName() {
    if (this.state.name === '') {
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
    if (this.state.password === '' || this.state.confirmPassword === '') {
      return false;
    } else {
      return true;
    }
  }

  render() {
    const spinner = this.state.isLoading ? (
      <ActivityIndicator size='large' />
    ) : null;
    return (
      <View style={styles.containerSignUp}>
        <Text style={styles.description}>
          Bienvenido. Por favor ingrese datos.
        </Text>
        <View style={styles.flowRight}>
          <TextInput
            underlineColorAndroid={'transparent'}
            style={styles.textInput}
            placeholder='Nombre'
            value={this.state.searchNameUser}
            placeholderTextColor='#656565'
            onChange={this._onSearchNameUser}
          />
          <TextInput
            underlineColorAndroid={'transparent'}
            style={styles.textInput}
            placeholder='Correo'
            value={this.state.searchEmailUser}
            placeholderTextColor='#656565'
            onChange={this._onSearchEmailUser}
          />
          <TextInput
            underlineColorAndroid={'transparent'}
            style={styles.textInput}
            placeholder='Contraseña'
            value={this.state.searchPasswordUser}
            placeholderTextColor='#656565'
            onChange={this._onSearchPasswordUser}
            secureTextEntry={true}
          />
          <TextInput
            underlineColorAndroid={'transparent'}
            style={styles.textInput}
            placeholder='Repetir Contraseña '
            value={this.state.searchConfirmPasswordUser}
            placeholderTextColor='#656565'
            onChange={this._onSearchConfirmPasswordUser}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity
          onPress={this._submitInformation}
        >
          <Text style={styles.button}>REGISTRARSE</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = stylesSignUp;
