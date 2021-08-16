import React from "react";

const CustomButton = ({ 
    name,
    value,
}) => {
    return (
      <div>
        <button name={name}> {name} </button>
      </div>
    );
}

export default CustomButton