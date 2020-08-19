import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg'
//import greenRocket from '../../assets/images/icons/green-rocket.svg';

import './style.css'

interface PageHeaderProps{
    title: string;
    description?: string;
    info?: any;
}

const PageHeader: React.FC <PageHeaderProps> = (props) => {
    return(
        <header className="page-header">
                <div className="top-bar-container">
                    <Link to="/">
                        <img src={backIcon} alt="Voltar"/>
                    </Link>
                    <img src={logoImg} alt="Logo Proffy"/>
                </div>
                <div className="header-content">
                    <strong>{props.title}</strong>
                    <div className="header-children">
                        <div className="header-title">
                            {props.description && <p>{props.description}</p>}
                        </div>
                        {props.info}
                    </div>
                    {props.children}
                </div>
                
            </header>
    );
}

export default PageHeader;