var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
    apiKey: "AIzaSyCqEHCURjJNlcKNgNms_mVrTp6uNcDO41E",
    authDomain: "parking-shybois.firebaseapp.com",
    projectId: "parking-shybois",
    storageBucket: "parking-shybois.appspot.com",
    messagingSenderId: "306274038981",
    appId: "1:306274038981:web:dc8e683fcdaba351b3acac",
    measurementId: "G-7MLR29NEE1"
  };
if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;
}

