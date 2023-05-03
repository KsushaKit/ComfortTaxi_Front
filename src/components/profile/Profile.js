import React, {useEffect} from 'react';
import './profile.css';
import ButtonBack from '../buttonBack/ButtonBack';


const Profile = ({identity, title, titles, data}) => {

    console.log(` data in profile ${JSON.stringify(data)}`);
    let arr = [];
    for(var property in data) {
        arr.push(data[property]);
    }
    arr.shift(); //удаление id
    //добавление '-'
    if (arr.length < titles.length) {
        let num = titles.length - arr.length;
        for( let i = 0; i<num; i++) {
        arr.push('-');
        }
    }

    return (
        <div className='profile'>
            <div className='profile__left-container'>
                <div className='profile__title'>
                    {title}
                </div>
                <img className='profile__img' src={require('../../img/profile.png')} alt='person'/>
            </div>

            <div className='profile__right-container'>
                
                <div className='profile__titles'>
                    {
                    titles.map((item) => (
                        <span className='profile__title-item' key={item}>
                            {item}
                        </span>
                        ))
                    }
                </div>

                <div className='profile__data'>
                    {arr.map((item) => (
                            <span className='profile__data-item' key={item}>
                                {item}
                            </span>
                        ))
                    }
                </div>
            </div>
            <div className='profile__button'>
                <ButtonBack path = {identity} title = {'Назад'} />
            </div>
        </div>
    );
};

export default Profile;