import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";
import { toast } from "react-hot-toast";
 
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
        .then((docRef) => toast.success('Redirecting...'))
        .catch((e) => console.log(e));
    })
    .catch((error) => {
      toast.error("An error occurred...");
      return
    });
};

export const signInUser = (formData, isBuyer) => {
  signInWithEmailAndPassword(auth, formData.email, formData.password)
    .then((userCredential) => {
     toast.success("Redirecting...");
     return
    })
    .catch((error) => {
     toast.error("An error occurred...");
     return;
    });
};
