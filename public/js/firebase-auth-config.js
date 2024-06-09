// Unique Firebase configuration for authentication
const authFirebaseConfig = {
    apiKey: "AIzaSyAf_4ZVV4m4VSQ0OPp7PyICyaRP8zUOZro",
    authDomain: "auth-d83c4.firebaseapp.com",
    projectId: "auth-d83c4",
    storageBucket: "auth-d83c4.appspot.com",
    messagingSenderId: "740417341364",
    appId: "1:740417341364:web:cf6bc05ba82bc1e5ca94e1"
};

// Initialize Firebase with the unique configuration for authentication
const authApp = firebase.initializeApp(authFirebaseConfig, "authApp");
const auth = firebase.auth(authApp);
