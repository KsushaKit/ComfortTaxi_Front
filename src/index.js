import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store/index';
import Main from './main/Main';
import Clients from './clients/Clients';
import ClientsAdd from './clients/clientsAdd/ClientsAdd';
import ClientsEdit from './clients/clientsEdit/ClientsEdit';
import App from './App';
import ClientProfile from './clients/clientProfile/ClientProfile';
import Users from './users/Users';
import UsersAdd from './users/usersAdd/UsersAdd';


//!суффиксы Add/Edit/Profile обязательны для правильной работы кнопок!
//!они добавляются автоматически к пути в компонентах кнопок!

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <App />}>
            <Route index element={<Main />}/>
            <Route path="/clients" element={<Clients />}/>
            <Route path="/clientsAdd" element={<ClientsAdd />}/>
            <Route path="/clientsEdit" element={<ClientsEdit />}/>
            <Route path="/clientsProfile" element={<ClientProfile />}/>
            <Route path="/users" element={<Users />}/>
            <Route path="/usersAdd" element={<UsersAdd />}/>
          </Route>
          <Route path="*" element={<p>Path not resolved</p>} />
        </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
