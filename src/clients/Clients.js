import React ,{ useEffect, useState } from 'react';
import './clients.css'
import {getItems, searchItem} from '../api/axios';
import { useSelector } from 'react-redux';

import Table from '../components/table/Table';
import Header from '../components/header/Header';
import ButtonCreate from '../components/buttonCreate/ButtonCreate';
import Search from '../components/serach/Search'
import Card from '../components/card/Card';
import CRUD from '../components/crud/CRUD';
import Read from '../components/read/Read';
import Edit from '../components/edit/Edit';
import Delete from '../components/delete/Delete';
import TableFooter from '../components/tableFooter/TableFooter';


const Clients = () => {

    //настройки страницы
    //-------------------------------------------------------------------------------------------
    //указатель поиска
    let identity = 'clients';
    let cards = [];
    //количество карточек, отображаемых на странице
    const chunkSize = 4;
    //набор карточек, отображаемых на странице
    const [items, setItems] = useState([]);
    //все наборы карточек по chunkSize 
    const [allItems, setAllItems] = useState([]);
    //номер текущей страницы
    const [pageNumber, setPageNumber] = useState(0);
    //названия столбцов в таблице
    let titles = [ 'ID', 'Фамилия', 'Имя', 'Отчество', 'Телефон', 'Почта', 'Адрес' ];
    let token = useSelector(state => state.user.token);
    //КАК УСТАНОВИТЬ НАЧАЛЬНОЕ КОЛИЧЕСТВО СТРАНИЦ ПРИ ПЕРВОЙ ЗАГРУЗКЕ??
    const [nuberPages, setNumberPages] = useState([1,2,3,4]);

    //-----------------------------------------------------------------------------------------------

    //получение данных для таблицы и разбиение их на странице
    const getI = async() => {
        let items = await getItems(token, identity);
        console.log(` items ${items}`);
        let data = items;

        let allData = [];
        
        for (let i = 0; i < data.length; i += chunkSize) {
            const chunk = data.slice(i, i + chunkSize);
            allData.push(chunk);
        }
        setAllItems(allData);
        setItems(allData[pageNumber]);
    }

    //передача id  и поиск item при нажатии enter
    const handleKeyDown  = ( id ) => async ( event ) => {
        //если нажать enter, то поиск
        //при любом другом событии загрузка всех строк
        if ( event.key === 'Enter' && Number(id) ) {
            let item = await searchItem( token, identity, id );
            if ( item !== 'not found')  setItems([item]);
            else if ( item === 'not found')  setItems([{id: 'not found'}]); 
        }
        else if (items.id !== 'not found') getI();
    }

    //заполнение карточек данными
    items.map((item) => (
        cards.push(
            <Card 
                item = {item}
                element={
                    <CRUD 
                        elements = {[
                            <Read identity = {identity} id = {item.id} />, 
                            <Edit identity = {identity} id = {item.id} />, 
                            <Delete identity = {identity} id = {item.id} updateFun = {getI} />
                        ]}
                    />
                }
            />
        )
    ))

    //изменение отображения карточек клиентов
    const changePage = ( numberPage ) => {
        setItems(allItems[numberPage]); //изменение набора отображаемых карточек
        setPageNumber(numberPage); //изменение номера текущей страницы
    }

   
    function n() {
        let startNumberPages = [];
        for( let i=1; i<=allItems.length; i++) {
            startNumberPages.push(i);
        }
        setNumberPages(startNumberPages);
    }

    //вызов getItems при каждой загрузки страницы
    useEffect(() => {
        getI(); 
        //подсчет изначального количества страниц в таблице (в самом компоненте так нельзя)
        n();
    },[])

    //-----------------------------------------------------------------------------------------------
    return (
        <div>
            <div className='position-container'>
            <Header 
                title={'Клиенты'} 
                elements = {{
                    button: <ButtonCreate identity = { identity } title = {'Добавить'}/>, 
                    search: <Search handleKeyDown = { handleKeyDown } />
                }}
            />
            <Table titles = {titles} cards = {cards} />
            
        </div>
            <TableFooter pageNumbers={allItems.length} startNumberPages={nuberPages} changePage={changePage} />
        </div>
        

    );
};

export default Clients;