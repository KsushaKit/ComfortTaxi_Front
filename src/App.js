import React from 'react';
import { useSelector } from 'react-redux';
import MainPage from './mainPage/MainPage';
import Authentication from './authentication/Authentication'

const App = () => {
let token = useSelector(state => state.user.token);
var page = <MainPage />;
if ( token == null ) page = <Authentication />;
else page = <MainPage />;
    return (
        <div>
            {page}
        </div>
    );
};

export default App;