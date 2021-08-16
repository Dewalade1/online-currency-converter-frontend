import React from "react";
import Select from 'react-select';

const CustomSelect = ({ 
    name,
    placeholder,
}) => {
    return (
      <div>
          <div>{name}</div>
        <Select name={name} placeholder={placeholder}/>
      </div>
    );
}

export default CustomSelect