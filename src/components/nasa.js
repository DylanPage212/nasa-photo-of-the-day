import React, {useState, useEffect} from "react";
import axios from "axios";

function Nasa() {

const [data, setData] = useState("");

useEffect(() => {
    axios
.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
.then(res => {
    console.log(res);
    setData(res.data);
})
.catch(err => {
    console.log(err);
})
}, [] )

   return (
        <div className="Nasa">
            <img src={data.url}></img>
        </div> );
    
};

export default Nasa;