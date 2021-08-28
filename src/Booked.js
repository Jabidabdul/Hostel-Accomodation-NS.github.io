import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import Topbar from './TopBar';
import './Booked.css'
const Booked = (props) => {




    return (
        <>
            <Topbar Name={props.Name} Photo={props.Photo} />

            <div className="bookedDiv">
                <div className="finalBox">
                    <h2>Thankyou {props.Name}</h2>
                    <h3>Your room details are as follows:</h3>
                    {(props.girl) ? <h3>Hostel No: G{props.value2}</h3> :
                        <h3>Hostel No: B{props.value2}</h3>}
                    <h3>Room No: {props.value1}</h3>
                </div>

            </div>
        </>
    )
}

export default Booked