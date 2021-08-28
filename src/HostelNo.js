import React, { useEffect, useState } from 'react'
import GirlsHostel from './GirlsHostel'
import BoysHostel from './BoysHostel'
import { propTypes } from 'react-bootstrap/esm/Image';
import BoysRoom from './BoysHostel';
import GirlsRoom from './GirlsHostel';
import './HostelNo.css'
import Topbar from './TopBar';
const HostelNo = (props) => {

    let [hostelSelect, setHostel] = useState("");
    let [hostelSelected, setHostelSelected] = useState(false);
    function chooseHostel(e) {
        setHostel(e.target.value)
        console.log(hostelSelect)
        setHostelSelected(true)
        console.log(props.hostel)
    }
    function enterHostelNo() {
        return (
            <>
                <Topbar Name={props.Name} Photo={props.Photo} />
                <div className="mainContainer">
                    <div className="Box">
                        <h2>Choose a Hostel</h2>
                        <div className="chooseHostel">
                            <button id="B1" value={1} onClick={chooseHostel}>{(props.hostel === "boy") ? 'B1' : 'G1'}</button>
                            <button id="B2" value={2} onClick={chooseHostel}>{(props.hostel === "boy") ? 'B2' : 'G2'}</button>
                            <button id="B3" value={3} onClick={chooseHostel}>{(props.hostel === "boy") ? 'B3' : 'G3'}</button>
                            <button id="B4" value={4} onClick={chooseHostel}>{(props.hostel === "boy") ? 'B4' : 'G4'}</button>
                            <button id="B5" value={5} onClick={chooseHostel}>{(props.hostel === "boy") ? 'B5' : 'G5'}</button>
                            <button id="B6" value={6} onClick={chooseHostel}>{(props.hostel === "boy") ? 'B6' : 'G6'}</button>
                        </div>
                    </div>


                </div >
            </>
        )
    }
    console.log(props.hostel)
    return (
        <>
            {(hostelSelected) ? ((props.hostel === 'boy') ? <BoysRoom Name={props.Name} Photo={props.Photo} hostel={hostelSelect} /> : <GirlsRoom Name={props.Name} Photo={props.Photo} hostel={hostelSelect} />) : enterHostelNo()}
        </>
    )
}
export default HostelNo