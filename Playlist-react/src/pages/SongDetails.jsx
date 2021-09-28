import React from "react";
import { useParams } from "react-router";

function SongDetails() {
    const param = useParams();
    // console.log(param);
    return ( 
        <h1>Hello from page Details {param.id}</h1>
    );
}

export default SongDetails;