import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

export const createUser = (formData, isBuyer) => {
  createUserWithEmailAndPassword(auth, formData.email, formData.password)
    .then((userCredential) => {
      const user = userCredential.user;
      const userType = isBuyer ? "buyer" : "seller";
      addDoc(collection(db, "users"), {
        userId: user.uid,
        userType,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: user.email,
      })
        .then((docRef) => console.log(docRef))
        .catch((e) => console.log(e));
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};

export const signInUser = (formData, isBuyer) => {
  signInWithEmailAndPassword(auth, formData.email, formData.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};
