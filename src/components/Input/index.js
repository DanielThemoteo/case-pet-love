import React from 'react';

import './styles.css'

function Input({name, label, value, placeholder, maxLength, ...rest}){
    return(
        <div className="input-group">
            <label htmlFor={name} >{label}</label>
            <input name={name} value={value} placeholder={placeholder} maxLength={maxLength} {...rest} />
        </div>
    );
}

export default Input;