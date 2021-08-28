
// import Classes from './Topbar.module.css';
import React from 'react'
import './TopBar.css'



const Topbar = (props) => {
    return (
        <header>
            <div className="left-header"><img alt="NS Logo" ></img></div>
            <div className="right-header"><h2>{props.Name}</h2>
                <div className="photo"><img src={props.Photo} alt="Picture" ></img></div>

                <select className="logout">
                    <option>Logout</option>
                    <option>About</option>
                </select>
            </div>
        </header>
    )
}

export default Topbar;