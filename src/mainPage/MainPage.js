import React from 'react';
import { useDispatch } from 'react-redux';
import './style.css';

import NavBar from './components/NavBar';
import { Outlet } from "react-router-dom";
import Header from './components/Header';

const MainPage = () => {
    const dispatch = useDispatch();
   // const pathname = window.location.pathname;
   // const currentURL = window.location.href;

    return (
        <div className='container'>
            <NavBar />
            <div className='main'>
                <Header />
                <div className = 'outlet'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default MainPage;