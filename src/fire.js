import firebase from 'firebase'
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
    apiKey: "AIzaSyB8ZJ4Q4_4fhTF6zuaY9KnPEATH4RpxYDk",
    authDomain: "altering-time.firebaseapp.com",
    databaseURL: "https://altering-time.firebaseio.com",
    projectId: "altering-time",
    storageBucket: "altering-time.appspot.com",
    messagingSenderId: "423933237396",
    appId: "1:423933237396:web:e9a56a5a3e32a58ea3bc81"
};
var fire = firebase.initializeApp(config);
export default fire;