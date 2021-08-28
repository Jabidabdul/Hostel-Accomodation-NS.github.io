import React, { useState } from 'react'
import { propTypes } from 'react-bootstrap/esm/Image';
import Booked from './Booked';
import Topbar from './TopBar';
import './Hostel.css'

function BoysRoom(props) {

    let [boyRoom, setBoyRoom] = useState("");
    let [floor, setFloor] = useState("");
    //let hostel = props.hostel

    // localStorage.setItem('')
    function selectRoom(e) {
        setBoyRoom(e.target.value)
        console.log(boyRoom)
        localStorage.setItem('roomNo', boyRoom)
        console.log(localStorage.getItem('roomNo'))
        setFloor(true)
        console.log(props.hostel)
    }
    console.log(floor.floorSelect)
    return (
        (floor) ? <Booked value1={boyRoom} Name={props.Name} Photo={props.Photo} value2={props.hostel} girl={false} /> :
            <>
                <Topbar Name={props.Name} Photo={props.Photo} />
                <div className="Hostel">
                    <div className="roomBox">
                        <h2>Boys Hostel:Choose a Floor B{props.hostel}</h2>
                        <select id="floor">
                            <option value={0} id="Ground" onClick={() => setFloor('0')}>Ground Floor</option>
                            <option value={1} id="First" onClick={() => setFloor('1')}>1st Floor</option>
                            <option value={2} id="Second" onClick={() => setFloor('2')}>2st Floor</option>
                        </select>
                        <button value={1} id="Room01" onClick={selectRoom}>1</button>
                        <button value={2} id="Room02" onClick={selectRoom}>2</button>
                        <button value={3} id="Room03" onClick={selectRoom}>3</button>
                        <button value={4} id="Room04" onClick={selectRoom}>4</button>
                        <button value={5} id="Room05" onClick={selectRoom}>5</button>
                        <button value={6} id="Room06" onClick={selectRoom}>6</button>
                        <button value={7} id="Room07" onClick={selectRoom}>7</button>
                        <button value={8} id="Room08" onClick={selectRoom}>8</button>
                        <button value={9} id="Room09" onClick={selectRoom}>9</button>
                        <button value={10} id="Room010" onClick={selectRoom}>10</button>
                    </div>

                </div>
            </>
    )
}
export default BoysRoom
