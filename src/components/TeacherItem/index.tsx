import React from 'react';

import WhatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './style.css';
import api from '../../services/api';
import TeacherSchedule from '../TeacherSchedule';

export interface Teacher {
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name: string;
    subject: string;
    whatsapp: string;
    schedule:{
        week_day: number,
        from: string,
        to: string,
    };
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
    
/*     function setSchedule(){
        if (teacher.schedule.week_day === 1) {
            return (
                <div className="schedule">
                    <p>Dia</p>
                    <h2>Segunda</h2>        
                    <p>Horário</p>
                    <h2> </h2>
                </div>
            );
        } else {
            return (
                <div className="scheduleNull">
                    <p>Dia</p>
                    <h2>Segunda</h2>        
                    <p>Horário</p>
                    <h2>-</h2>
                </div>
            );
        }
    } */

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
            {/* <TeacherSchedule/> */}
            <div className="schedule-list">
                <div className="list">
                    <div className="schedule">
                        <p>Dia</p>
                        <h2>Segunda</h2>        
                        <p>Horário</p>
                        <h2>-</h2>
                    </div>
                    <div className="schedule">
                        <p>Dia</p>
                        <h2>Terça</h2>        
                        <p>Horário</p>
                        <h2>8h - 12h</h2>
                    </div>
                    <div className="schedule">
                        <p>Dia</p>
                        <h2>Quarta</h2>        
                        <p>Horário</p>
                        <h2>8h - 12h</h2>
                    </div>
                    <div className="schedule">
                        <p>Dia</p>
                        <h2>Quinta</h2>        
                        <p>Horário</p>
                        <h2>8h - 12h</h2>
                    </div>
                    <div className="schedule">
                        <p>Dia</p>
                        <h2>Sexta</h2>        
                        <p>Horário</p>
                        <h2>8h - 12h</h2>
                    </div>
                </div>
            </div>
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
