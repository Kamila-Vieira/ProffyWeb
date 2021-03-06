import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';
import RegistrationSaved from './pages/RegistrationSaved';
import MyProfile from './pages/MyProfile';

function Routes(){
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/myprofile" component={MyProfile} />
            <Route path="/study" component={TeacherList} />
            <Route path="/give-classes" component={TeacherForm} />
            <Route path="/registration-saved" component={RegistrationSaved} />
        </BrowserRouter>
    )
}

export default Routes;
