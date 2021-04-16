import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";

function Nasa() {

const [data, setData] = useState("");


const ImageStyle = styled.img`
border: 5px solid black;
&:hover {
    padding: 5px;
}
`

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
            <ImageStyle src={data.url}></ImageStyle>
        </div> );
    
};

export default Nasa;