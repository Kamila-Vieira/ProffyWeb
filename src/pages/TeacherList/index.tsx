import React, { useState, FormEvent, useEffect } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import searchIcon from '../../assets/images/icons/search.png';
import smileIcon from '../../assets/images/icons/smile.svg';

import './style.css';
import api from '../../services/api';


function TeacherList(){
    const [ totalUsers, setTotalUsers ] = useState(0);

    useEffect(() => {
        api.get('users')
        .then(response => {
            const {total} = response.data;
            setTotalUsers(total);
        })
    }, []);

    const [teachers, setTeachers] = useState([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeek_day] = useState('');
    const [time, setTime] = useState('');

    async function searchTeachers(e: FormEvent) {
        e.preventDefault();
        
        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time,
            }
        });
        console.log(response.data);
        setTeachers(response.data);
    }

    return(
        <div id="page-teacher-list" className="container">
            <PageHeader 
                title="Estes são os proffys disponíveis."
                info={
                    <div className="header-infoList">
                        <img src={smileIcon} alt="Foguete verde"/>&nbsp;&nbsp;
                        <p>Nós temos {totalUsers} <br />professores.</p>
                    </div>
                }
            >
                <form id="search-teachers" onSubmit={searchTeachers}>
                    <Select
                        name="subject" 
                        label="Matéria" 
                        value={subject}
                        onChange={(e) => { setSubject(e.target.value)}}
                        options={[
                            {value: 'Artes', label: 'Artes'},
                            {value: 'Biologia', label: 'Biologia'},
                            {value: 'Ciências', label: 'Ciências'},
                            {value: 'Educação Física', label: 'Educação Física'},
                            {value: 'Física', label: 'Física'},
                            {value: 'Geografia', label: 'Geografia'},
                            {value: 'História', label: 'História'},
                            {value: 'Matemática', label: 'Matemática'},
                            {value: 'Português', label: 'Português'},
                            {value: 'Química', label: 'Química'},
                        ]}
                    />

                    <Select
                        name="week_day" 
                        label="Dia da Semana"
                        value={week_day}
                        onChange={(e) => { setWeek_day(e.target.value)}} 
                        options={[
                            {value: '0', label: 'Domingo'},
                            {value: '1', label: 'Segunda-feira'},
                            {value: '2', label: 'Terça-feira'},
                            {value: '3', label: 'Quarta-feira'},
                            {value: '4', label: 'Quinta-feira'},
                            {value: '5', label: 'Sexta-feira'},
                            {value: '6', label: 'Sábado-feira'},
                        ]}
                    />

                    <Input
                        type="time" 
                        name="time"
                        label="Horário"
                        descrip=""
                        value={time}
                        onChange={(e) => { setTime(e.target.value)}}
                    />

                    <button type="submit">
                        <img src={searchIcon} alt="Lupa"/>
                    </button>
                </form>
            </PageHeader>
            <main>
                {teachers.map((teacher: Teacher) => {
                    return <TeacherItem key={teacher.id} teacher={teacher}/>;
                })}
            </main>
        </div>

    )
}

export default TeacherList;