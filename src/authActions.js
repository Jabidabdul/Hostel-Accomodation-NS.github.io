import React from "react";
export const signIn = credentials => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    console.log(credentials)
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then((sucess) => {
        console.log(sucess)
        return true;
      })
      .catch(err => {
        alert('Sorry')
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "SIGNOUT_SUCCESS" });
      });
  };
};

export const signUp = newUser => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(resp => {
        return firestore
          .collection("users")
          .doc(resp.user.uid)
          .set({
            name: newUser.name,
            initials: newUser.firstName[0] + newUser.lastName[0]
          });
      })
      .then((sucess) => {
        console.log(sucess)
        return true
      })
      .catch(err => {
        return false
      });
  };
};