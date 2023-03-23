import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';

import MainPage from './mainPage/MainPage';
import Authentication from './authentication/Authentication'
import Main from './mainPage/navBarItems/main/Main';
import Clients from './mainPage/navBarItems/clients/Clients';

//useSelector достать значение
//useDispatch выполнить действие
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}>
            <Route index element={<Main />}/>
            <Route path="/clients" element={<Clients />}/>
          </Route>
          <Route path="/authentication" element={<Authentication />} />
          <Route path="*" element={<p>Path not resolved</p>} />
        </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
