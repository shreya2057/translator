import React from "react";

const TextField = ({title, type, className}) => {
    return (
        <div>
            <label> {title} </label> 
            <br/>
            <input type= {type} className={className}></input>
        </div>
     );
}
 
export default TextField;