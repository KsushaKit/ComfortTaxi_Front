import React from 'react';
import { useDispatch } from 'react-redux';
import './style.css';
import { get } from '../store/clientSlice';

import Layout from './components/Layout';
import NavBar from './components/NavBar';
import { Outlet } from "react-router-dom";

const MainPage = () => {
    const dispatch = useDispatch();

    return (
        <div className='container'>
            <NavBar />
            <Layout>
                <Outlet />
           </Layout>
        </div>
    );
};

export default MainPage;