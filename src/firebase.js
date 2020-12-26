import firebase from 'firebase';

// With firebase, these credentials do not need to be hidden from users
const app = firebase.initializeApp({
	apiKey: 'AIzaSyDN5JjO6oBn0YXv62xVaTMEfDgQ4Bg-sYE',
	authDomain: 'firepoll-48b10.firebaseapp.com',
	projectId: 'firepoll-48b10',
	storageBucket: 'firepoll-48b10.appspot.com',
	messagingSenderId: '26324358530',
	appId: '1:26324358530:web:3121683cef69f94918ab9b',
	measurementId: 'G-PDZTK1QGKB',
});

const db = app.firestore();

export { db };
