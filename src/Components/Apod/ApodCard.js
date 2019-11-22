import React from "react";

const ApodCard = (props) => {
    return (
        <div>
            <p>{props.date}</p>
            <p>{props.title}</p>
            <img src={props.url}/>
        </div>
    );    
}

export default ApodCard;