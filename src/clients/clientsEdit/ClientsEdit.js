import React from 'react';
import { useSelector } from 'react-redux';
import { addItem, editItem } from '../../api/axios';
import Form from '../../components/form/Form';

const ClientsEdit = () => {
    //названия полей ввода
  let titlesInputs = ['Имя', 'Фамилия', 'Отчество', 'Телефон', 'Почта', 'Адрес'];
  //типы полей ввода
  let typesInputs = ['text', 'text', 'text', 'text', 'text', 'text'];
  //путь возврвщения для кнопки "назад"
  let path = 'clients';

  let client = useSelector(state => state.default.searchItem);

  //составляющая формы
  const [form, setForm] = React.useState({
    secondname: client.secondname,
    firstname: client.firstname,
    patronymic: client.patronymic,
    phone_number: client.phone_number,
    email: client.email,
    address: client.address
  });

  let token = useSelector(state => state.user.token);
  //функция, вызываемая при нажатии кнопки добавления
  //data - данные, извлеченные из формы
  async function transferData(data) {
    console.log('transferData');
    //добавление клиента в бд
    await editItem( token, 'clients', data, client.id )
  }

  //client поздно обновляется

  return (
    <Form 
    title={'Редактирование клиента'} 
    titlesInputs={titlesInputs} 
    typesInputs={typesInputs} 
    data={form} 
    transferData={transferData}
    path={path} 
    />
  );
};

export default ClientsEdit;