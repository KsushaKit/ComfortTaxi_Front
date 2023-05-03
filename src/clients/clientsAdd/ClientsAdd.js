import React, {useEffect} from 'react';
import axios, { addItem } from '../../api/axios';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import Form from '../../components/form/Form';
import { useNavigate } from "react-router-dom";

const ClientsAdd = () => {

  //названия полей ввода
  let titlesInputs = ['Имя', 'Фамилия', 'Отчество', 'Телефон', 'Почта', 'Адрес'];
  //типы полей ввода
  let typesInputs = ['text', 'text', 'text', 'text', 'text', 'text'];
  //путь возврвщения для кнопки "назад"
  let path = 'clients';

  //составляющая формы
  const [form, setForm] = React.useState({
    secondname: '',
    firstname: '',
    patronymic: '',
    phone_number: '',
    email: '',
    address: ''
  });

  let token = useSelector(state => state.user.token);
  //функция, вызываемая при нажатии кнопки
  //data - данные, извлеченные из формы
  async function transferData(data) {
    console.log('transferData');
    //добавление клиента в бд
    await addItem( token, 'clients', data);
  }

  //client поздно обновляется

  return (
    <Form 
    title={'Добавление клиента'} 
    titlesInputs={titlesInputs} 
    typesInputs={typesInputs} 
    data={form} 
    transferData={transferData}
    path={path} 
    />
  );
};

export default ClientsAdd;