import React from "react";

const InfoCard = (props) => {
    return (
        <div>
            <p>{props.explanation}</p>
            <p>Copyright: {props.copyright}</p>
        </div>
    );    
}

export default InfoCard;