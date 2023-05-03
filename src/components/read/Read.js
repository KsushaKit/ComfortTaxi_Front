import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {searchItem} from '../../api/axios';
import { useNavigate } from "react-router-dom";
import { addSearchItem } from '../../store/defaultSlice';

const Read = ({identity, id}) => {
    let readLink = `/${identity}Profile`;
    let navigate = useNavigate();
    let token = useSelector(state => state.user.token);
    let dispatch = useDispatch();
    const read = async() => {
        let item = await searchItem ( token, identity, id );
        console.log(` itemCRUD read ${JSON.stringify(item)}`);
        localStorage.setItem('SEARCH_ITEM', JSON.stringify(item));
        dispatch(addSearchItem (item) );

        navigate(readLink);
    }

    return (
        <button onClick={read}>
            <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 8.5C14 10.4358 12.4358 12 10.5 12C8.56425 12 7 10.4358 7 8.5C7 6.56425 8.56425 5 10.5 5C12.4358 5 14 6.56425 14 8.5Z" stroke="#605656" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14 8.5C14 10.4358 12.4358 12 10.5 12C8.56425 12 7 10.4358 7 8.5C7 6.56425 8.56425 5 10.5 5C12.4358 5 14 6.56425 14 8.5Z" stroke="#605656" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14 8.5C14 10.4358 12.4358 12 10.5 12C8.56425 12 7 10.4358 7 8.5C7 6.56425 8.56425 5 10.5 5C12.4358 5 14 6.56425 14 8.5Z" stroke="#605656" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11 16C14.6076 16 17.9699 14.1148 20.3102 10.852C21.2299 9.57402 21.2299 7.42598 20.3102 6.14804C17.9699 2.8852 14.6076 1 11 1C7.39244 1 4.03015 2.8852 1.68983 6.14804C0.770056 7.42598 0.770056 9.57402 1.68983 10.852C4.03015 14.1148 7.39244 16 11 16Z" stroke="#605656" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11 16C14.6076 16 17.9699 14.1148 20.3102 10.852C21.2299 9.57402 21.2299 7.42598 20.3102 6.14804C17.9699 2.8852 14.6076 1 11 1C7.39244 1 4.03015 2.8852 1.68983 6.14804C0.770056 7.42598 0.770056 9.57402 1.68983 10.852C4.03015 14.1148 7.39244 16 11 16Z" stroke="#605656" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11 16C14.6076 16 17.9699 14.1148 20.3102 10.852C21.2299 9.57402 21.2299 7.42598 20.3102 6.14804C17.9699 2.8852 14.6076 1 11 1C7.39244 1 4.03015 2.8852 1.68983 6.14804C0.770056 7.42598 0.770056 9.57402 1.68983 10.852C4.03015 14.1148 7.39244 16 11 16Z" stroke="#605656" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
    );
};

export default Read;