import firebaseDB from '../firebase';

const auth = {
	/* General Authentication methods */
	signOut: () => firebaseDB.auth().signOut(),
	getCurrentUser: () => firebaseDB.auth().currentUser,
	signUp: () => firebaseDB.auth().signInAnonymously()
};

export default auth;
