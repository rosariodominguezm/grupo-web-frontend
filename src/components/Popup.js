import React from "react";

const Popup = (props) => {
    return (
        <div className="popup-box">
        <div id="box">
            <button className="close-icon" onClick={props.handleClose}>
            x
            </button>
            {props.content}
            <br></br>
            <button className="prev-icon" onClick={props.handlePrev}>
                Atrás
            </button>
            <button className="next-icon" onClick={props.handleNext}>
            Siguiente
            </button>
            
            

            
        </div>
        </div>
    );
}

export default Popup;