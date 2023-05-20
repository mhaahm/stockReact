import React from "react";
import {createPortal} from "react-dom"
import "./Popup.css";

const Popup = (props) => {
    return createPortal(<div className="popup-box">
        <div className="box">
            <div style={{backgroundColor: "#e3e1dc",padding: "3px"}}>
                <h4 style={
                    { textAlign: "left",paddingTop: "9px",paddingLeft:"19px" }
                }>{ props.title }</h4>
                <span className="close-icon" onClick={props.onClose}> x </span>
            </div>
            <div className="box-content" style={{textAlign: "left"}}>
                { props.content }
            </div>

        </div>
    </div>,document.body)
}

export default Popup