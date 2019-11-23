import React, { useState, useEffect } from "react";
import axios from "axios";
import ApodCard from "./ApodCard";


const Apod = () => {
    const [setApod, setApodState] = useState([]);
    useEffect(() => {
        axios .get("https://api.nasa.gov/planetary/apod?api_key=FPBef7Oo0aqdfjANjMbeVYQaDnBSszQP5yf2sOCW")
            .then(response => {
                setApodState(response.data)
                console.log(response);
            })
            .catch (error => {console.log(error);
            });
    },[]);

    return (
      <div>
        <ApodCard 
        date = {setApod.date}
        title = {setApod.title}
        url = {setApod.url} 
        />
      </div>  
    );
}

export default Apod;