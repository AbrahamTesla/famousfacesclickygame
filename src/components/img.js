import React from "react";


const Images = (props)=> {

       
        return (
            <div className = "images">
                <div onClick={() => props.clicked(props.id)} className="img-container" >         
                    <img alt={props.name} src={require("../images/" + props.image)}/>
                </div>
            </div>
        )
    };
    

export default Images;  