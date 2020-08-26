import React, {TextareaHTMLAttributes} from 'react';

import './style.css';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    label: string;
    name: string;
    descrip?: string;
} 

const Textarea: React.FC<TextareaProps> = ({ label, name, descrip, ...rest }) => {
    return(
        <div className="textarea-block">
            <div className="label-block">
                <label htmlFor={name}>{label}</label>
                <p>{descrip}</p>
            </div>
            <textarea id={name} {...rest} />
        </div>

    );
}

export default Textarea;