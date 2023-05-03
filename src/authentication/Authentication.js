import React from 'react';
import { useDispatch } from 'react-redux';
import './authentication.css'
import {authenticate} from '../api/axios';
import { setUser } from '../store/userSlice';

const Authentication = () => {

    const [form, setForm] = React.useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        setForm({
          ...form,
          [event.target.id]: event.target.value
        });
    };

    //вход в систему и получение токена
    const dispatch = useDispatch();
    const handleSubmit = async (event) => {
        event.preventDefault();
        let email = form.email;
        let password = form.password;
        let token = await authenticate( email, password );

        console.log(`token ${token}`);
        dispatch( setUser({token: token}));
    };

    return (
        <div className='auth'>
             <div className="logo-auth">
                <span className="logo-comfort-auth">Comfort</span>
                <span className="logo-taxi-auth">TAXI</span>
            </div>
            <form onSubmit={handleSubmit}>
            <div className='auth-field'>
                <span>Логин</span>
                <label htmlFor="email" />
                <input id="email" value={form.email} onChange={handleChange} type="text" />
            </div>
            <div className='auth-field'>
                <span>Пароль</span>
                <label htmlFor="password" />
                <input id="password" value={form.password} onChange={handleChange} type="text" />
            </div>
            <div className='auth-button'>
                <button onClick={handleSubmit}>Войти</button>
            </div>
            </form>
        </div>
    );
};

export default Authentication;