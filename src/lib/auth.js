import { app } from './firebase.js';

import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from './export.js';

const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  console.log(user);
  if (user != null) {
    console.log('logged in!');
  } else {
    console.log('No user');
  }
});

const loginEmailPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log(userCredential);
  } catch (error) {
    alert ('Sua senha esta incorreta')
  }
};

const createAccount = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    //console.log(userCredential.user);
  } catch (error) {
    console.log(error);
  }
};

const logout = async () => {
  await signOut(auth);
};

const provider = new GoogleAuthProvider();
const signInGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
    })
    .catch((error) => {
      //const errorCode = error.code;
      //const errorMessage = error.message;
      //const email = error.customData.email;
      //const credential = GoogleAuthProvider.credentialFromError(error);
    });
};

export {
  auth,
  loginEmailPassword,
  createAccount,
  logout,
  signInGoogle,
};