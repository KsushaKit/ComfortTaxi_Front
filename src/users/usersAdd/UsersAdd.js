import React from 'react';
import { addItem } from '../../api/axios';
import { useSelector } from 'react-redux';
import Form from '../../components/form/Form';

const UsersAdd = () => {

  //Важный элемент для правильного выстраивания api-запросов
  //---------------------------------------------------------------------------------
  let identity = 'users';
  //---------------------------------------------------------------------------------

  //названия полей ввода
  let titlesInputs = ['Имя', 'Фамилия', 'Отчество', 'Телефон', 'Почта', 'Адрес', 'Пароль', 'Департамент'];
  //типы полей ввода
  let typesInputs = ['text', 'text', 'text', 'text', 'text', 'text', 'text', 'text'];
  //путь возврвщения для кнопки "назад"
  let path = identity;

  //составляющая формы
  const [form, setForm] = React.useState({
    secondname: '',
    firstname: '',
    patronymic: '',
    phone_number: '',
    email: '',
    address: '',
    password: '',
    departament_id: ''
  });

  let token = useSelector(state => state.user.token);
  //функция, вызываемая при нажатии кнопки
  //data - данные, извлеченные из формы
  async function transferData(data) {
    console.log('transferData');
    //добавление клиента в бд
    await addItem( token, identity, data);
  }

  //client поздно обновляется

  return (
    <Form 
    title={'Добавление сотрудника'} 
    titlesInputs={titlesInputs} 
    typesInputs={typesInputs} 
    data={form} 
    transferData={transferData}
    path={path} 
    />
  );
};

export default UsersAdd;