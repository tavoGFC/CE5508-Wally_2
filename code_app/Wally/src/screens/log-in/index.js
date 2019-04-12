import * as React from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import wallyTitle from '../../../assets/wallyTitle.png';
import stylesLogIn from '../../styles/styles';

export default class LogIn extends React.Component {
  static navigationOptions = {
    title: 'Basurero Inteligente: Wally'
  };

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      email: '',
      password: '',
      response: ''
    };

    this.validateData = this.validateData.bind(this);
    this.wait = this.wait.bind(this);
  }

  /* _logIn = () => {
    try {
      this._verifyUser();
      this.setState({
        response: '¡Bienvenido!'
      });
      //wait(7000);
      if (this.state.password === this.state.userPassword) {
        this.props.navigation.navigate('Home');
      } else {
        Alert.alert('Correo o contraseñas son incorrectos, intente de nuevo');
      }
    } catch (error) {
      this.setState({
        response: error.toString()
      });
      console.info(this.state.response);
    }
  }; */

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
    this.props.navigation.navigate('SignUp');
  };

  _submitData = () => {
    if (this.validateData()) {
      this._logIn();
    } else {
      Alert.alert(
        'Por favor ingrese un correo y una contraseña ya registrados.'
      );
    }
  };

  validateData() {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (
      this.state.email === '' ||
      (reg.test(this.state.email) === false && this.state.password === '')
    ) {
      return false;
    } else {
      return true;
    }
  }
  _logIn = async () => {
    try {
      await fetch(
        `http://10.10.10.228:8000/api/v1/users/findOne?email=${
          this.state.email
        }`
      )
        .then(response => response.json())
        .then(responseJson => {
          const parseResponse = JSON.stringify(responseJson);
          this.setState({
            userPassword: JSON.parse(
              parseResponse.substring(1, parseResponse.length - 1)
            ).password
          });
        });

      this.setState({
        response: '¡Bienvenido!'
      });
      //wait(7000);
      if (this.state.password === this.state.userPassword) {
        this.props.navigation.navigate('Home');
      } else {
        Alert.alert('Correo o contraseñas son incorrectos, intente de nuevo.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }
  }

  render() {
    const spinner = this.state.isLoading ? (
      <ActivityIndicator size='large' />
    ) : null;
    return (
      <View style={styles.containerLogIn}>
        <Image source={wallyTitle} style={styles.imageTitle} />
        <View style={styles.flowRight}>
          <TextInput
            autoCorrect={false}
            keyboardType='email-address'
            onChange={this._onSearchEmailUser}
            placeholder='Correo'
            placeholderTextColor='#656565'
            style={styles.textInput}
            underlineColorAndroid={'transparent'}
            value={this.state.searchUser}
          />
          <TextInput
            autoCorrect={false}
            onChange={this._onSearchPasswordUser}
            placeholder='Contraseña'
            placeholderTextColor='#656565'
            secureTextEntry={true}
            style={styles.textInput}
            underlineColorAndroid={'transparent'}
            value={this.state.searchPassword}
          />
          <TouchableOpacity onPress={this._submitData}>
            <Text style={styles.button}>INGRESAR</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._onSignUpPressed.bind(this)}>
            <Text style={styles.button}>REGISTRARSE</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.descriptionLogIn}>{this.state.response}</Text>
        {spinner}
      </View>
    );
  }
}

const styles = stylesLogIn;
