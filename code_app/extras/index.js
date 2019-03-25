import * as React from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
  TextInput, 
  Button, 
  Image, 
  ActivityIndicator
} from 'react-native';

export default class LogIn extends React.Component {

  static navigationOptions = {
    title: 'Ingresa al Sistema de Compra de Casas'
  }

  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      password: 'randy123',
      userName: 'randy',
    }
  }

  _onSearchPressed = () => {
    if(this.state.searchUser === 'randy' && this.state.searchPassword === 'randy123'){
      this.props.navigation.navigate('Home')
    }else{
      this.setState({ message: 'El usuario no existe. Favor de intentar de nuevo.'})
    }
  }

  _onSeacrhTextUser = (event) => {
    this.setState({
      searchUser: event.nativeEvent.text,
    })
  }

  _onSeacrhTextPassword = (event) => {
    this.setState({
      searchPassword: event.nativeEvent.text
    })
  }

  render() {
    const spinner = this.state.isLoading ? <ActivityIndicator size='large' />: null
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
        Bienvenido. Por favor ingrese su usuario y contraseña.
        </Text>
        <View style={styles.flowRight}>
          <TextInput
            underlineColorAndroid={'transparent'}
            style={styles.searchInput}
            placeholder="Ingrese su Usuario"
            value={this.state.searchUser}
            placeholderTextColor="#656565"
            onChange={this._onSeacrhTextUser}
          />
          <TextInput
            underlineColorAndroid={'transparent'}
            style={styles.searchInput}
            placeholder="*************"
            value={this.state.searchPassword}
            placeholderTextColor="#656565"
            onChange={this._onSeacrhTextPassword}
          />
          <Button 
            onPress={this._onSearchPressed}
            color="#48BBEC"
            title="Ingresar"
          />
        </View>
        <Text style={styles.description}>
        {this.state.message}
        </Text>
        {spinner}        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flowRight: {
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    width: "100%",
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC',
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center',
  },
  description: {
    marginButtom: 5,
    fontSize: 18,
    color:  "#656565",
    textAlign: 'center',
  },
});