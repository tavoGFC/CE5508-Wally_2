import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  /*  general elements for all screens */
  button: {
    backgroundColor: '#32CD32',
    borderColor: 'white',
    borderRadius: 10,
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    height: 25,
    marginBottom: '3%',
    marginTop: '3%',
    padding: 8,
    textAlign: 'center',
    width: 160
  },
  description: {
    color: 'green',
    fontSize: 18,
    marginBottom: 5,
    textAlign: 'center'
  },
  flowRight: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flexDirection: 'column'
  },
  image: {
    height: '30%',
    resizeMode: 'contain',
    width: '60%'
  },
  textInput: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderRadius: 8,
    color: '#000000',
    fontSize: 18,
    height: 36,
    justifyContent: 'space-between',
    marginRight: 5,
    marginTop: 10,
    padding: 1,
    paddingBottom: 6,
    textAlign: 'center',
    width: '60%'
  },
  /*  specific elements for certain screens */
  // logIn screen
  containerLogIn: {
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: '10%',
    padding: '10%'
  },
  descriptionLogIn: {
    color: 'green',
    fontSize: 14,
    marginTop: 15,
    marginBottom: 5,
    textAlign: 'center'
  },
  imageTitle: {
    height: '35%',
    resizeMode: 'contain',
    width: '100%'
  },
  titleLogIn: {
    fontSize: 50,
    marginBottom: 15,
    textAlign: 'center'
  },
  // signUp screen
  containerSignUp: {
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 40,
    padding: 30
  },
  titleSignUp: {
    fontSize: 50,
    marginBottom: 30,
    textAlign: 'center'
  },
  // homePage screen
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: '10%'
  },
  imageThumbnail: {
    alignItems: 'center',
    height: 100,
    resizeMode: 'contain',
    width: 100
  },
  gridViewColumns: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    flex: 1,
    height: 100,
    justifyContent: 'center',
    margin: 2
  },
  // controller tab screen
  containerTabController: {
    alignItems: 'center',
    marginTop: 10,
    padding: 30
  },
  descriptionWarningController: {
    color: 'black',
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center'
  },
  // dashboard tab screen
  containerTabDashboard: {
    alignItems: 'center',
    marginTop: 10,
    padding: 30
  },
  descriptionTabDashboard: {
    color: 'green',
    fontSize: 22,
    marginBottom: 5,
    marginTop: 5,
    textAlign: 'center'
  },
  titleTabDashboard: {
    color: 'black',
    fontSize: 30,
    marginBottom: 0,
    textAlign: 'center'
  }
});

export default styles;
