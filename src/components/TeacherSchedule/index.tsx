import React, { useState, FormEvent } from 'react';

import './style.css';
import api from '../../services/api';


function TeacherSchedule(){
   
    const [scheduleItems, setScheduleItems] = useState([
        {week_day: 0, from: '', to: ''},
    ]);

    function setScheduleItemValue(position: number, field: string, value: string) {
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if(index === position){
                return { ...scheduleItem, [field]: value };
            }
            return scheduleItem;
        });

        setScheduleItems(updatedScheduleItems);
    }

    function ScheduleItem(e: FormEvent){
        e.preventDefault();
        api.post('classes', {
            schedule: scheduleItems,
        });
    }

    return(
        <div className="schedule-list">
            <div className="list">
                <div className="schedule">
                    <p>Dia</p>
                    <h2>Segunda</h2>        
                    <p>Horário</p>
                    <h2>{}h - {}h</h2>
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
    );
}

export default TeacherSchedule;