import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyCYGVofrerkHU2UuIpawwT4gGN69p_tACs",
  authDomain: "ce5508-wally.firebaseapp.com",
  databaseURL: "https://ce5508-wally.firebaseio.com",
  projectId: "ce5508-wally",
  storageBucket: "ce5508-wally.appspot.com",
  messagingSenderId: "590492033004"
};

firebase.initializeApp(config);
firebase.default.auth;

export default firebase;
/* 
export default class Firebase {
  static auth;

  static init() {
    firebase.initializeApp(config);
    Firebase.auth = firebase.default.auth;
  }
} */
