import React, {InputHTMLAttributes} from 'react';

import './style.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label: string;
    descrip?: string;
    name: string;
} 

const Input: React.FC<InputProps> = ({ label, descrip, name, ...rest }) => {
    return(
        <div className="input-block">
            <div className="label-block">
                <label htmlFor={name}>{label}</label>
                <p>{descrip}</p>
            </div>
            <input type="text" id={name} {...rest} />
        </div>

    );
}

export default Input;