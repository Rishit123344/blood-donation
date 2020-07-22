import * as firebase from 'firebase'
require ('@firebase/firestore')
 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyCZVU-Mit3Uv9xdm3ZtAPazhT0lRR5WSeM",
  authDomain: "elderly-app-7ffea.firebaseapp.com",
  databaseURL: "https://elderly-app-7ffea.firebaseio.com",
  projectId: "elderly-app-7ffea",
  storageBucket: "elderly-app-7ffea.appspot.com",
  messagingSenderId: "925028425169",
  appId: "1:925028425169:web:6bc2a0d6de714a86f254f0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()