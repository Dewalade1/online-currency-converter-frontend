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
      <div className={cls}>
          <div htmlFor={name} className={labelCls}>{name}</div>
        <Select 
          name={name} 
          className={className} 
          placeholder={placeholder} 
          options={options}
        />
      </div>
    );
}

export default CustomSelect