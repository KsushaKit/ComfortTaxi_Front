import axios from 'axios';
import { LOGIN_URL, CLIENTS_URL } from './urls';

axios.defaults.baseURL = 'http://127.0.0.1:8000/api';

//----------------------------------------------------------------------------------
export async function authenticate(email, password) {
    console.log(`email ${email}`);
    console.log(`password ${password}`);
   
    try {
        const response = await axios.post(LOGIN_URL, {email, password} );
        console.log(`response.data: ${JSON.stringify(response.data)}`);
        let token = JSON.stringify(response.data);
        token =  token.split('|')[1].split('"')[0];
        
        return token;
    }
    catch(err) {
        if (err.response) {
            console.log("err.response")
            console.log(err.response)
            return null;
        }
        else if(err.request) {
            console.log("err.request")
            console.log(err.request)
            return null;
        }
        else if(err.message) {
            console.log("err.request")
            console.log(err.request)
            return null;
        }
    }
}

//----------------------------------------------------------------------------------
//поиск чего угодно по id
export async function searchItem( token, url, id ) {
    
    let URL = `/${url}/${id}`;

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    try {
        const response = await axios.get( URL );
        console.log(` search ${response.data}`);
        let item = response.data[0];
        console.log(`searchItem ${URL}`);
        return item;
    }
    catch(err) {
        if (err.response) {
            console.log("err.response")
            console.log(err.response)
            return 'not found';
        }
        else if(err.request) {
            console.log("err.request")
            console.log(err.request)
            return {};
        }
        else if(err.message) {
            console.log("err.request")
            console.log(err.request)
            return {};
        }
    }
}

//----------------------------------------------------------------------------------
//получение списка чегт угодно
export async function getItems(token, url) {
    
    let URL = `/${url}`;

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    try {
        const response = await axios.get( URL )
        console.log(` response.data ${JSON.stringify(response.data.data)}`);
        let items = response.data.data;
        console.log(`getItems ${URL}`);
        return items;
    }
    catch(err) {
        if (err.response) {
            console.log("err.response")
            console.log(err.response)
            return [];
        }
        else if(err.request) {
            console.log("err.request")
            console.log(err.request)
            return [];
        }
        else if(err.message) {
            console.log("err.request")
            console.log(err.request)
            return [];
        }
    }
}

//----------------------------------------------------------------------------------
//добавление чего угодно куда угодно
export async function addItem( token, url, data ) {

    let URL = `/${url}`;
    try {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        const response = await axios.post( URL, data );
        console.log(`addItem ${URL}`);
        
    }
    catch(err) {
        if (err.response) {
            console.log("err.response")
            console.log(err.response)
        }
        else if(err.request) {
            console.log("err.request")
            console.log(err.request)
        }
        else if(err.message) {
            console.log("err.message")
            console.log(err.request)
        }
    }
}

//----------------------------------------------------------------------------------
//изменение чего угодно
export async function editItem( token, url, data, id ) {

    let URL = `/${url}/${id}`;
    try {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        const response = await axios.patch( URL, data );
        console.log(`editItem ${URL}`);
        
    }
    catch(err) {
        if (err.response) {
            console.log("err.response")
            console.log(err.response)
        }
        else if(err.request) {
            console.log("err.request")
            console.log(err.request)
        }
        else if(err.message) {
            console.log("err.message")
            console.log(err.request)
        }
    }
}

//----------------------------------------------------------------------------------
//удаление на выбор clients/users/...
export async function remove(token, url, id) {
    
    let URL = `/${url}/${id}`;
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    try {
        const response = await axios.delete( URL );
        console.log(`removed ${URL}`);
    }
    catch(err) {
        if (err.response) {
            console.log("err.response")
            console.log(err.response)
        }
        else if(err.request) {
            console.log("err.request")
            console.log(err.request)
        }
        else if(err.message) {
            console.log("err.request")
            console.log(err.request)
        }
    }
}

export default axios;