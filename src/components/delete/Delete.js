import React from 'react';
import { useSelector } from 'react-redux';
import {remove } from '../../api/axios';

const Delete = ({identity, id, updateFun}) => {
    //updateFun - функция, для обновления всех карточек, после удаления одной

    let token = useSelector(state => state.user.token);
    const deletef = async() => {
        await remove(token, identity, id);
        updateFun();
    }

    return (
        <button onClick={deletef}>
            <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.721 1L5 4M15.279 1L19 4" stroke="#605656" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.721 1L5 4M15.279 1L19 4" stroke="#605656" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.721 1L5 4M15.279 1L19 4" stroke="#605656" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1 6.49916C1 5.11244 1.99 5 3.22 5H18.78C20.01 5 21 5.11244 21 6.49916C21 8.11075 20.01 7.99831 18.78 7.99831H3.22C1.99 7.99831 1 8.11075 1 6.49916Z" stroke="#605656" stroke-width="1.5"/>
                <path d="M1 6.49916C1 5.11244 1.99 5 3.22 5H18.78C20.01 5 21 5.11244 21 6.49916C21 8.11075 20.01 7.99831 18.78 7.99831H3.22C1.99 7.99831 1 8.11075 1 6.49916Z" stroke="#605656" stroke-width="1.5"/>
                <path d="M1 6.49916C1 5.11244 1.99 5 3.22 5H18.78C20.01 5 21 5.11244 21 6.49916C21 8.11075 20.01 7.99831 18.78 7.99831H3.22C1.99 7.99831 1 8.11075 1 6.49916Z" stroke="#605656" stroke-width="1.5"/>
                <path d="M8.26 12.6667V15.9208M12.86 12.6667V15.9208M2 9L3.41 16.92C3.73 18.6983 4.5 20 7.36 20H13.39C16.5 20 16.96 18.7533 17.32 17.03L19 9" stroke="#605656" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M8.26 12.6667V15.9208M12.86 12.6667V15.9208M2 9L3.41 16.92C3.73 18.6983 4.5 20 7.36 20H13.39C16.5 20 16.96 18.7533 17.32 17.03L19 9" stroke="#605656" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M8.26 12.6667V15.9208M12.86 12.6667V15.9208M2 9L3.41 16.92C3.73 18.6983 4.5 20 7.36 20H13.39C16.5 20 16.96 18.7533 17.32 17.03L19 9" stroke="#605656" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
        </button>
    );
};

export default Delete;