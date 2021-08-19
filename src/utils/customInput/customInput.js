import React from 'react';

const CustomInput = ({ 
    name,
    cls,
    className,
    placeholder,
    labelCls,
}) => {
    return (
      <div className={`input--container ${cls}`}>
        <div htmlFor={name} className={labelCls}>
          {name}
        </div>
        <input name={name} placeholder={placeholder} className={className} />
      </div>
    );
}

export default CustomInput;