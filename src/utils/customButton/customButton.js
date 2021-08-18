import React from "react";

const CustomButton = ({ 
    name,
    value,
    className
}) => {
    return (
      <div>
        <button name={name} value={value} className={className}> {name} </button>
      </div>
    );
}

export default CustomButton