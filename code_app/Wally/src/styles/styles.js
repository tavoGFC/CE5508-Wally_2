import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  /*  general elements for all screens */
  button: {
    backgroundColor: "green",
    borderColor: "white",
    borderRadius: 30,
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    height: 35,
    marginBottom: "3%",
    marginTop: "3%",
    padding: 8,
    textAlign: "center",
    width: 160
  },
  description: {
    color: "green",
    fontSize: 18,
    marginBottom: 5,
    textAlign: "center"
  },
  flowRight: {
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "column"
  },
  image: {
    height: "50%",
    resizeMode: "center",
    width: "50%"
  },
  textInput: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#772a2a",
    borderRadius: 8,
    color: "#000000",
    fontSize: 18,
    height: 36,
    justifyContent: "space-between",
    marginRight: 5,
    marginTop: 10,
    padding: 1,
    paddingBottom: 6,
    textAlign: "center",
    width: "60%"
  },
  /*  specific elements for certain screens */
  // logIn screen
  containerLogIn: {
    alignItems: "center",
    backgroundColor: "white",
    marginTop: 5,
    padding: 10
  },
  titleLogIn: {
    fontSize: 50,
    marginBottom: 15,
    textAlign: "center"
  },
  // signUp screen
  containerSignUp: {
    alignItems: "center",
    backgroundColor: "white",
    marginTop: 40,
    padding: 30
  },
  titleSignUp: {
    fontSize: 50,
    marginBottom: 30,
    textAlign: "center"
  },
  // homePage screen
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    paddingTop: "35%"
  },
  imageThumbnail: {
    alignItems: "center",
    height: 100,
    resizeMode: "contain",
    width: 100
  },
  gridViewColumns: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    height: 100,
    justifyContent: "center",
    margin: 2
  },
  // controller tab screen
  containerTabController: {
    alignItems: "center",
    marginTop: 65,
    padding: 30
  },
  // dashboard tab screen
  containerDashboard: {
    alignItems: "center",
    marginTop: 65,
    padding: 30
  }
});

export default styles;
