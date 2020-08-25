import React, { useState, FormEvent } from 'react';
import { useHistory, Link } from 'react-router-dom';

import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import api from '../../services/api';

import './style.css';

import warningIcon from '../../assets/images/icons/warning.svg';
import logoImg from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg'


function MyProfile(){
    const history = useHistory();

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
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
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule: scheduleItems,
        }).then(() => {
            alert('Cadastro realizado com sucesso!');
            history.push('/');
        }).catch(() => {
            alert('Erro no Cadastro!');
        }) 

        console.log({
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            scheduleItems
        });
    }

    return(
        <div id="page-my-profile" className="container">
            <header className="page-header">
                <div className="top-bar-container">
                    <Link to="/">
                        <img src={backIcon} alt="Voltar"/>
                    </Link>
                    <h2>Dar Aulas</h2>
                    <img src={logoImg} alt="Logo Proffy"/>
                </div>
                <div className="avatar-container">
                    <img src={'https://avatars1.githubusercontent.com/u/60486364?s=460&u=62d7a70278f4484b041cd2c6658b4f2075b748e3&v=4'} alt="Kamila"/>
                </div>
                <div className="header-content">
                    <strong>Kamila Vieira</strong>
                    <p>Química</p>
                </div>
            </header>
            <main>
                    
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus dados</legend>

                        <Input
                            name="name"
                            label="Nome Completo"
                            descrip="" 
                            value={name}
                            onChange={(e) => { setName(e.target.value)}}
                        />
                        
                        <Input
                            name="avatar" 
                            label="Link da sua foto"
                            descrip="(comece com //http)"
                            value={avatar}
                            onChange={(e) => { setAvatar(e.target.value)}} 
                        />

                        <Input
                            name="whatsapp" 
                            label="Whatsapp"
                            descrip="(com DDI e DDD, somente números)"
                            value={whatsapp}
                            onChange={(e) => { setWhatsapp(e.target.value)}}
                        />

                        <Textarea
                            name="bio" 
                            label="Biografia"
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
                            descrip="(em R$)"
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
                                descrip=""
                                value={scheduleItem.from}
                                onChange={(e) => setScheduleItemValue(index, 'from', e.target.value)}
                            />
                            <Input 
                                type="time" 
                                name="to" 
                                label="Até"
                                descrip=""
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