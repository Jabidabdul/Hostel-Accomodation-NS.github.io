import React, { useEffect, useState } from 'react';
import HostelNo from './HostelNo';
import Topbar from './TopBar';
import GirlsHostel from './GirlsHostel'
import BoysHostel from './BoysHostel'
import { propTypes } from 'react-bootstrap/esm/Image';
import './ChooseHostel.css'

function Choose(props) {
    let [hostel, setHostel] = useState("");

    function enterHostel() {
        return (
            <>
                <Topbar Name={props.Name} Photo={props.Photo} />
                <div className="container">
                    <div >
                        <h2>Choose your hostel</h2>
                        <div className="buttons">
                            <div className="Girl" value={false} onClick={() => { setHostel('girl') }}>
                                <img src="" alt="" ></img>
                                Girls Hostel
                            </div>
                            <div className="Boy" value={true} onClick={() => { setHostel('boy') }} >
                                <img src="" alt="" ></img>
                                Boys Hostel
                            </div>
                        </div>
                    </div>


                    {/* <ChooseHostel value={choose} /> */}
                </div>
            </>
        )
    }
    return (
        <>
            {(hostel !== "") ?
                <HostelNo Name={props.Name} Photo={props.Photo} hostel={hostel} />
                :
                enterHostel()}
            {/* {(hostel ==="")? enterHostel():null }
        {(hostel === "girl")?<HostelNo hostel={hostel}/>: null}
        {(hostel === "boy")?<HostelNo hostel={hostel}/>: null}
         */}
        </>

    )
}
// const Choosen = (props)=>{
//     // let[choosen, setChoosen] = useState("");

//     // return (<BoysHostel />: <GirlsHostel />
//     // )
// }
export default Choose