import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseApp = firebase.initializeApp({
		apiKey: "AIzaSyBOkbwtg2WFrDkO_eck7qU01Onsekw5ALo",
		authDomain: "very-hot-burgers-a54c1.firebaseapp.com",
		databaseURL: "https://very-hot-burgers-a54c1-default-rtdb.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database())

export {firebaseApp}

export default base