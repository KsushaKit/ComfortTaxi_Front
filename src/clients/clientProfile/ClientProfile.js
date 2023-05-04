import React, { useEffect } from 'react';
import Profile from '../../components/profile/Profile';
import { useSelector } from 'react-redux';

const ClientProfile = () => {
    //Важный элемент для правильного выстраивания api-запросов
    //---------------------------------------------------------------------------------
    let identity = 'clients';
    //---------------------------------------------------------------------------------

    let searchItem = useSelector(state => state.default.searchItem); 
    console.log(` client client profile ${JSON.stringify(searchItem)}`);
    let title = `Профиль клиента №${searchItem.id}`;
    let titles = ['Имя:', 'Фамилия:', 'Отчество:', 'Телефон:', 'Почта:', 'Адрес:', 'Количество заказов:', 'Сумма заказов:', 'Рейтинг:'];
    
    return (
        <div>
            <Profile identity={identity} title = {title} titles = {titles} data = {searchItem} />
        </div>
    );
};

export default ClientProfile;