import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
//import exitIcon from '../../assets/images/icons/exit.svg';

import api from '../../services/api';

import './styles.css';

function Landing (){
    const [ totalConnections, setTotalConnections ] = useState(0);

    useEffect(() => {
        api.get('connections')
        .then(response => {
            const {total} = response.data;
            setTotalConnections(total);
        })
    }, []);
    
    return (
        <div id="page-landing">
     {/*    <header>
                </div>
                    <Link to="/" className="avatar">
                        <img src={'https://avatars1.githubusercontent.com/u/60486364?s=460&u=62d7a70278f4484b041cd2c6658b4f2075b748e3&v=4'} alt="Kamila"/>
                        <p>Kamila Vieira</p>
                    </Link>
                    
                    <Link to="/" className="exit">
                        <img src={exitIcon} alt=""/>
                    </Link>
                 <div>
            </header>
                 */}
            <div id="page-landing-content" className="container">
                
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy Logo"/>
                    <h2>Sua Plataforma de Estudos Online. </h2>
                </div>
                <img 
                    src={landingImg} 
                    alt="Plataforma de Estudos" 
                    className="hero-image"
                />
                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Estudar"/>
                            Estudar
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="Dar Aulas"/>
                            Dar aulas
                    </Link>
                </div>
                <span className="total-connections">
                    Total de {totalConnections} Conexões já Realizadas.<img src={purpleHeartIcon} alt="Coração roxo"/>
                </span>
            </div>
        </div>
    )
}

export default Landing;