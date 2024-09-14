import React from "react";

function SimpleButton({text, onClick}){
    return(
    <button className="custom-button" onClick={onClick}>
        {text}
    </button>
    );
}

export default SimpleButton;