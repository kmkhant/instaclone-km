// Import the functions you need from the SDKs you need
import {
	initializeApp,
	getApp,
	getApps,
} from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCw4aJDcefo2fTFqUnKfSb3ms059OAdOxg",
	authDomain: "instaclone-km.firebaseapp.com",
	projectId: "instaclone-km",
	storageBucket: "instaclone-km.appspot.com",
	messagingSenderId: "1013165536691",
	appId: "1:1013165536691:web:85c6372245f1183809c7c6",
};

// Initialize Firebase
const app = !getApps().length
	? initializeApp(firebaseConfig)
	: getApp();

const db = getFirestore();
const storage = getStorage();

module.exports = {
	app,
	db,
	storage,
};
