import React, { useState, useEffect } from "react";
import axios from "axios";
import InfoCard from "./InfoCard";

const Info = () => {
    const [setInfo, setInfoState] = useState([]);
    useEffect(() => {
        axios .get("https://api.nasa.gov/planetary/apod?api_key=FPBef7Oo0aqdfjANjMbeVYQaDnBSszQP5yf2sOCW")
            .then(response => {
                setInfoState(response.data)
                console.log(response);
            })
            .catch (error => {console.log(error);
            });
    },[]);

    return (
      <div>
        <InfoCard 
        explanation = {setInfo.explanation}
        copyright = {setInfo.copyright} 
        />
      </div>  
    );
}

export default Info;