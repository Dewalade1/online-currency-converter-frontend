import React from "react";

const CustomButton = ({ 
    cls,
    name,
    value,
    className
}) => {
    return (
      <div className={cls}>
        <button name={name} value={value} className={className}> {name} </button>
      </div>
    );
}

export default CustomButton