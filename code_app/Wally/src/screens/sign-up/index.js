import * as React from 'react';
import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

//import createFirebaseClient from '../../components/firebase';
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
    //this.firebaseClient = createFirebaseClient();
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

  /*  _signUp = async () => {
    try {
      await firebaseClient
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password);

      this.setState({
        response: 'Cuenta creada.'
      });
      this.props.navigation.navigate('Home');
    } catch (error) {
      this.setState({
        response: error.toString()
      });
    }
  }; */

  _submitInformation = () => {
    /* if (
      this.validateName() &&
      this.validateEmail() &&
      this.validatePassword()
    ) {
      this.props.navigation.navigate('Home');
      //this._signUp();
    } else {
      Alert.alert('Los datos ingresados son incorrectos. ');
    } */
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
          onPress={() => this.props.navigation.navigate('Home')}
        >
          <Text style={styles.button}>REGISTRARSE</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = stylesSignUp;
