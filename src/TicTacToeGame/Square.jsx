import React from "react";

const Square=(props)=>{
    return(
        <div onClick={props.onClick}
        style={{border:"5px solid black",
    display:"flex",
    justifyContent:"center",
    alignItems:"center", 
    height:"100px",
    width:"100%"
    }} 
        className="square">
            <h1>{props.value}</h1>
        </div>
    )
}

export default Square