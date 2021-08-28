
import socialMedia from './auth'
import { facebookProvider, googleProvider } from './authMethods'
import { useState } from 'react'
import ChooseHostel from './ChooseHostel'
import { Router, Link } from 'react-router-dom';
import Booked from './Booked'
import './Login.css'


const Login = () => {

    let [emailCheck, setemailverified] = useState(false)
    const [bookedalready, setBookedAlready] = useState(true);
    let [userImage, setUserImage] = useState("");
    let [userName, setUserName] = useState("")

    const handleOnClick = async (provider) => {
        const res = await socialMedia(provider);
        const responseJSON = res.toJSON()
        setemailverified(true)
        // console.log(responseJSON.email)
        // console.log(responseJSON.displayName)
        // console.log(responseJSON.photoURL)
        setUserImage(responseJSON.photoURL)
        setUserName(responseJSON.displayName)
        // if(localStorage.getItem("name")==="res"){
        //     setBooked(true)
        // }
        // console.log(res);

    }



    return (

        (emailCheck) ? ((!bookedalready) ?
            <Booked Name={userName} Photo={userImage} /> :
            <ChooseHostel Name={userName} Photo={userImage} />
        ) :
            <>

                <header>
                    <div className="left-header"><img src="" alt="NS Logo" ></img></div>
                    <h2>Hostel Acoomodation Platform</h2>
                </header>
                <div className="mainBox">
                    <div className="main">

                        <button class="fb btn" onClick={() => handleOnClick(facebookProvider)} value={emailCheck}>Facebook</button>
                        <button class="google btn" onClick={() => handleOnClick(googleProvider)} value={emailCheck}>Google</button>
                    </div>
                </div>


            </>
    )
}
export default Login