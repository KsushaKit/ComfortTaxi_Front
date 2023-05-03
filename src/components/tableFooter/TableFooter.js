import React, {useState} from 'react';
import './tableFooter.css'

const TableFooter = ({ pageNumbers, startNumberPages, changePage }) => {

    const [pages, setPages] = useState(startNumberPages);
    const [lastPage, setLastPage] = useState(0);
    let left = '<';
    let right = '>';

    function change(numPage){
        //если двигаемся вправо
        if(numPage=='right') {
            let max = lastPage+20;
            let p =[];
            //можно ли подгрузить следующие 10 страниц?
            //если нет следующих 10 страниц
            if( pageNumbers<=max ) {

                console.log('pageNumbers<=max' );
                //если есть хотябы одна следующая страница после 10, то подгружаем ее
                if(pageNumbers>=lastPage+11) {
                    console.log('pageNumbers>=lastPage+11' );
                    for( let i=lastPage+10; i<=pageNumbers; i++) {
                        p.push(i);
                    }
                    setPages(p); //устанавливаем новые страницы для отображения
                    setLastPage(lastPage+10); //изменяем последнюю страницу на +10
                    changePage(lastPage); //изменяем отображение текущей страницы
                }
            }
            else {
                console.log('pageNumbers>max' );
                //если есть следующие 10 страниц, то подгружаем их
                for( let i=lastPage+10; i<=max; i++) {
                    p.push(i);
                }
                setPages(p); //устанавливаем новые страницы для отображения
                setLastPage(lastPage+10); //изменяем последнюю страницу на +10
                changePage(lastPage); //изменяем отображение текущей страницы
            }
        }
        else if(numPage=='left') {
            let p =[];
            //если есть куда листать назад - листаем
            if(lastPage>=10) {
                console.log('lastPage>=10' );
                for( let i=lastPage-9; i<=lastPage; i++) {
                    p.push(i);
                }
                setPages(p); //устанавливаем новые страницы для отображения
                setLastPage(lastPage-10); //изменяем последнюю страницу на +10
                changePage(lastPage); //изменяем отображение текущей страницы
            }
        }
        else {
            console.log('else' );
            changePage(numPage-1);
        }
        
        
    }

    

    return (
        <div className='tableFooter'>
        
            <button className='footer-btn' onClick={(e) => change('left')}>
                {left}
            </button>
          
                {pages.map((number) => (
                    <button className='footer-btn' onClick={(e) => change(number)}>
                        {number}
                    </button>
                ))}
            
            <button className='footer-btn' onClick={(e) => change('right')}>
                {right}
            </button>
        </div>
    );
};

export default TableFooter;