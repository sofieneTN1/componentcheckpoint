import React from "react";

function Myname(props){

    return(
    <div className="container-fluid mt-2 text-center">
        <h5>{props.name}</h5>
    </div>

    )
}

export default Myname;