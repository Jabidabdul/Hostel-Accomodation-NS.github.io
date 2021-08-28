import firebase from "firebase";
const socialMedia = (provider) => {
    return (
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((res) => {

                return (res.user)
            })
            .catch((er) => {
                return false;
            })
    )
}

export default socialMedia