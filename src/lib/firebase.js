import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const contentConfig = {
    apiKey: 'AIzaSyB4_duL_tnVCBKT8FC0JnRKxfAfps4yoNc',
    authDomain: 'pixelperfectiondev.firebaseapp.com',
    projectId: 'pixelperfectiondev',
    storageBucket: 'pixelperfectiondev.appspot.com',
    messagingSenderId: '370215131349',
    appId: '1:370215131349:web:ddc963461996c7c8006a5c',
    measurementId: 'G-P0BTHPHFEB'
};

// Authentication lives in its own Firebase project, so it needs a second app.
const authConfig = {
    apiKey: 'AIzaSyAf_4ZVV4m4VSQ0OPp7PyICyaRP8zUOZro',
    authDomain: 'auth-d83c4.firebaseapp.com',
    projectId: 'auth-d83c4',
    storageBucket: 'auth-d83c4.appspot.com',
    messagingSenderId: '740417341364',
    appId: '1:740417341364:web:cf6bc05ba82bc1e5ca94e1'
};

const contentApp = initializeApp(contentConfig);
const authApp = initializeApp(authConfig, 'authApp');

export const db = getFirestore(contentApp);
export const storage = getStorage(contentApp);
export const auth = getAuth(authApp);
