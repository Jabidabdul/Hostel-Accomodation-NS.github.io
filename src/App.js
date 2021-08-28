// import React, { useState } from 'react';
// import './App.css';
// import './css/hostelchoo.css'
// // import ChooseHostel from './components/ChooseHostel';
// import ChooseHostelName from './components/ChooseHostelName';
// import Floor from './components/Floor';
// import FloorRooms from './components/FloorRooms';
// import { googleProvider, facebookProvider } from './config/authMethods';
// import socialMediaAuth from './service/auth';

// function App() {
//   let [hostelType, setHostelType] = useState(null);

//   function hostelNames(e) {
//     let name = e.target.getAttribute("name")
//     if (name === "girls") {
//       setHostelType("girls");
//     }
//     else if (name === "boys") {
//       setHostelType("boys");
//     }
//   }
//   console.log(hostelType);

//   const handleOnClick = async (provider) => {
//     const res = await socialMediaAuth(provider)
//     setHostelType("mainPage")
//     console.log(res);
//   }

//   function pickHostel() {
//     setHostelType("hostelPage")
//   }
//   return (
//     <div className="App">

//       {hostelType == null && <div className="authButton">
//         <h2>Hostel Allocation</h2>
//         <h5>Please Sign In: </h5>
//         <button onClick={() => handleOnClick(googleProvider)}>google</button>
//         <button onClick={() => handleOnClick(facebookProvider)}>facebook</button>
//       </div>}


//       {hostelType == "mainPage" &&
//         <div className="mainContainer">
//           <h1>Choose Your Hostel</h1>
//           <div className="internalMain">
//             <div onClick={hostelNames} name="girls" className="Container">Girls Hostel</div>
//             <div onClick={hostelNames} name="boys" className="Container">Boys Hostel</div>
//           </div>
//         </div>
//       }

//       {hostelType == "boys" &&
//         <ChooseHostelName openHostel={pickHostel} boysHostels={["B1", "B2", "B3", "B4", "B5", "B6"]} />
//       }
//       {hostelType == "girls" &&
//         <ChooseHostelName openHostel={pickHostel} boysHostels={["G1", "G2", "G3", "G4", "G5", "G6"]} />
//       }
//       {hostelType == "hostelPage" &&
//         <Floor id={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
//       }
//     </div >
//   );
// }



// export default App;

import ChooseHostel from './ChooseHostel';
import Booked from './Booked'
import React from "react";
import firebase from "firebase";
import Login from "./Login";

import HostelNo from './HostelNo';
import GirlsHostel from './GirlsHostel'
import BoysHostel from './BoysHostel'
//import App from './App.css'
// import Booked from "./Booked"
// import HostelNo from "./HostelNo";
//  import Room from "./BoysHostel";
//  import ChooseHostel from "./ChooseHostel"
//  import GirlsHostel from './GirlsHostel'
//  import BoysHostel from './BoysHostel'
// const firebaseConfig = {
//   apiKey: "AIzaSyA21qVe1tP0N3XjDWKfl68WPh-i6XEbRkU",
//   authDomain: "hostel-booking-app-3e95f.firebaseapp.com",
//   projectId: "hostel-booking-app-3e95f",
//   storageBucket: "hostel-booking-app-3e95f.appspot.com",
//   messagingSenderId: "816628285913",
//   appId: "1:816628285913:web:bcb55474d32735f53a59c8",
//   measurementId: "G-PKEKWGYE3D"
// };
// //export const auth = firebaseConfig.auth()
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();


export default function App() {


  return (
    <div>
      <Login />
      {/* <Booked /> */}
      {/* <ChooseHostel /> */}
      {/* <BoysHostel /> */}
      {/* <GirlsHostel /> */}
      {/* <HostelNo />
      <Room />  */}
    </div>
  );
}


