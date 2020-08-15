import React from 'react';

import WhatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './style.css';
import api from '../../services/api';

export interface Teacher {
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name: string;
    subject: string;
    whatsapp: string;
}

interface TeacherPropos{
    teacher: Teacher;
}

const TeacherItem: React.FC<TeacherPropos> = ({ teacher }) => {

    function createNewConnection() {
        api.post('connections', {
            user_id: teacher.id,
        })
    }

    return(
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt={teacher.name}/>
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>

            <p>{teacher.bio}</p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ {teacher.cost}</strong>
                </p>
                    <a 
                        onClick={createNewConnection} 
                        href={`https://wa.me/${teacher.whatsapp}`} 
                        target="_blank" 
                        rel="noopener noreferrer">
                        <img src={WhatsappIcon} alt="Whatsapp"/>
                        Entrar em contato
                    </a>
            </footer>
        </article>
    );
}
// https://api.whatsapp.com/send?phone=
export default TeacherItem;
