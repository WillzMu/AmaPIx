//firebase configuration
const firebase = require('firebase/app')
require('firebase/auth');
require('firebase/database');
require('firebase/storage');


var config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
  };
  firebase.initializeApp(config);;
var Firebase = firebase;
console.log(process.env.databaseURL)
export default Firebase;