import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import api from '../../services/api';

import './style.css';

import warningIcon from '../../assets/images/icons/warning.svg';
// import cameraIcon from '../../assets/images/icons/cameraIcon.svg'
import PageHeader from '../../components/PageHeader';


function MyProfile(){
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');

    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

    const [scheduleItems, setScheduleItems] = useState([
        {week_day: 0, from: '', to: ''},
    ]);

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }
        ]);
    }

    function setScheduleItemValue(position: number, field: string, value: string) {
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if(index === position){
                return { ...scheduleItem, [field]: value };
            }
            return scheduleItem;
        });

        setScheduleItems(updatedScheduleItems);
    }
    
    function handleCreateClass(e: FormEvent) {
        e.preventDefault();

        api.post('classes', {
            name,
            whatsapp,
            bio,
            subject,
            cost,
            schedule: scheduleItems,
        });
    }

    return(
        <div id="page-my-profile" className="container">
            <PageHeader
                avatar= {
                    <> 
                        <img
                            src={'https://avatars1.githubusercontent.com/u/60486364?s=460&u=62d7a70278f4484b041cd2c6658b4f2075b748e3&v=4'} 
                            alt="Kamila"
                        />
                        {/* <a href="" >
                            <img src={cameraIcon} alt="câmera"/>
                        </a> */}
                    </>
                }
                title="Kamila Vieira"
                description="Química"
                page="Meu perfil"
            />
            <main>
                    
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus dados</legend>
                            <div className="name-container">
                                <Input
                                    name="name"
                                    label="Nome"
                                    placeholder={name} 
                                    value={name}
                                    onChange={(e) => { setName(e.target.value)}}
                                />

                                <Input
                                    name="lastName"
                                    label="Sobrenome" 
                                    value={lastName}
                                    onChange={(e) => { setLastName(e.target.value)}}
                                />
                            </div>

                            <div className="contact-container">
                                <Input
                                    name="email" 
                                    label="E-mail"
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value)}}
                                />

                                <Input
                                    name="whatsapp" 
                                    label="Whatsapp"
                                    placeholder={whatsapp}
                                    value={whatsapp}
                                    onChange={(e) => { setWhatsapp(e.target.value)}}
                                />
                            </div>
                        <Textarea
                            name="bio" 
                            label="Biografia"
                            descrip="(Máximo 300 caracteres)"
                            value={bio}
                            onChange={(e) => { setBio(e.target.value)}}
                        />

                    </fieldset>
                    <fieldset>
                        <legend>Sobre a aula</legend>

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
                        
                        <Input
                            name="cost"
                            label="Custo da sua hora por aula"
                            placeholder="R$"
                            value={cost}
                            onChange={(e) => { setCost(e.target.value)}}
                        />

                    </fieldset>
                    <fieldset>
                        <legend>
                            Horários disponíveis
                            <button type="button" onClick={addNewScheduleItem}>
                                + Novo horário
                            </button>
                        </legend>

                        {scheduleItems.map((scheduleItem, index) => {
                            return (
                        <div key={scheduleItem.week_day} className="schedule-item">

                            <Select 
                                name="week_day" 
                                label="Dia da Semana"
                                value={scheduleItem.week_day}
                                onChange={(e) => setScheduleItemValue(index, 'week_day', e.target.value)}
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
                                name="from" 
                                label="Das"
                                value={scheduleItem.from}
                                onChange={(e) => setScheduleItemValue(index, 'from', e.target.value)}
                            />
                            <Input 
                                type="time" 
                                name="to" 
                                label="Até"
                                value={scheduleItem.to}
                                onChange={(e) => setScheduleItemValue(index, 'to', e.target.value)}
                            />
                        
                        </div>
                            );
                        })}
                    </fieldset>
                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso Importante"/>
                            Importante! <br />
                            Preencha todos os dados
                        </p>
                        <Link to="/registration-saved" type="submit" className="button">
                            Salvar Cadastro
                        </Link>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default MyProfile;