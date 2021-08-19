import React from "react";
import Select from 'react-select';

const CustomSelect = ({ 
    name,
    placeholder,
    className,
    options,
    cls,
    labelCls,
}) => {
    return (
      <div className={`select--container ${cls}`}>
        <div htmlFor={name} className={labelCls}>{name}</div>
        <Select 
          name={name} 
          prefixClassName={className} 
          placeholder={placeholder} 
          options={options}
        />
      </div>
    );
}

export default CustomSelect