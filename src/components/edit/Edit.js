import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {searchItem} from '../../api/axios';
import { useNavigate } from "react-router-dom";
import { addSearchItem } from '../../store/defaultSlice';

const Edit = ({identity, id}) => {
    let editLink = `/${identity}Edit`;
    let navigate = useNavigate();
    let dispatch = useDispatch();
    let token = useSelector(state => state.user.token);

    const edit = async() => {
        let item = await searchItem ( token, identity, id );
        console.log(` itemCRUD edit ${JSON.stringify(item)}`);
        localStorage.setItem('SEARCH_ITEM', JSON.stringify(item));
        dispatch(addSearchItem (item) );

        navigate(editLink);
    }
    return (
        <button onClick={edit}>
            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.8449 2.38709L2.1194 10.7631C1.78994 11.0812 1.4711 11.7077 1.40733 12.1415L1.0141 15.2644C0.87594 16.3921 1.76868 17.1632 3.00152 16.9704L6.4237 16.4403C6.90196 16.3632 7.57151 16.0451 7.90098 15.7174L16.6265 7.34138C18.1356 5.89558 18.8158 4.24736 16.4671 2.23287C14.1289 0.23766 12.3541 0.941285 10.8449 2.38709Z" stroke="#605656" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.8449 2.38709L2.1194 10.7631C1.78994 11.0812 1.4711 11.7077 1.40733 12.1415L1.0141 15.2644C0.87594 16.3921 1.76868 17.1632 3.00152 16.9704L6.4237 16.4403C6.90196 16.3632 7.57151 16.0451 7.90098 15.7174L16.6265 7.34138C18.1356 5.89558 18.8158 4.24736 16.4671 2.23287C14.1289 0.23766 12.3541 0.941285 10.8449 2.38709Z" stroke="#605656" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.8449 2.38709L2.1194 10.7631C1.78994 11.0812 1.4711 11.7077 1.40733 12.1415L1.0141 15.2644C0.87594 16.3921 1.76868 17.1632 3.00152 16.9704L6.4237 16.4403C6.90196 16.3632 7.57151 16.0451 7.90098 15.7174L16.6265 7.34138C18.1356 5.89558 18.8158 4.24736 16.4671 2.23287C14.1289 0.23766 12.3541 0.941285 10.8449 2.38709Z" stroke="#605656" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.39611 3C9.59411 4.2657 10.207 5.42986 11.1386 6.30973C12.0702 7.1896 13.2678 7.73537 14.5433 7.86136M1 19H18" stroke="#605656" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.39611 3C9.59411 4.2657 10.207 5.42986 11.1386 6.30973C12.0702 7.1896 13.2678 7.73537 14.5433 7.86136M1 19H18" stroke="#605656" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.39611 3C9.59411 4.2657 10.207 5.42986 11.1386 6.30973C12.0702 7.1896 13.2678 7.73537 14.5433 7.86136M1 19H18" stroke="#605656" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
    );
};

export default Edit;