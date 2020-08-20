import React from 'react';
import { Link } from 'react-router-dom';

//import successBackground from '../../assets/images/success-background.svg';
import successCheckIcon from '../../assets/images/icons/success-check-icon.svg';

import './styles.css';


function RegistrationSaved (){
    return(
        <div id="page-registrationSaved">
            <div id="page-registrationSaved-content" className="page-background">
                <div className="container">
                    <img src={successCheckIcon} alt=""/>
                    <h1>
                        Cadastro salvo!
                    </h1>
                    <p className="saved-subtitle">
                        Tudo certo, seu cadastro está na nossa lista de professores.<br />
                        Agora é só ficar de olho no seu WhatsApp.
                    </p>
                    <Link to="/study" className="button-List">
                        Acessar lista
                    </Link>
                </div>
            </div>
        </div>);
}

export default RegistrationSaved;