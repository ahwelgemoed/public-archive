import firebase from 'firebase';
const config = {
  apiKey: 'AIzaSyAN0griPsgIMDhWdHbB17L14xQb08amcG4',
  authDomain: 'mtonode.firebaseapp.com',
  databaseURL: 'https://mtonode.firebaseio.com',
  projectId: 'mtonode',
  storageBucket: 'mtonode.appspot.com',
  messagingSenderId: '535542954851'
};
var Firebase = firebase.initializeApp(config);
// export default fire;

export default Firebase;
