import React from "react";

const CustomCard = ({className, children}) => {
    return(
        <div className={`card ${className}`}>{children}</div>
    )
}

export default CustomCard