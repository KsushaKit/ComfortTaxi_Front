import React from 'react';
import './navbar.css'
import '../../normalize.css'

const NavBar = () => (
    <div className='container-navbar'>
        <div className='navBar'>
            <div className="logo">
                <span className="logo-comfort">Comfort</span>
                <span className="logo-taxi">TAXI</span>
            </div>


            <ul className="menu">

                <li>
                    <svg width="21" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 7.90625L10.5 0L21 7.90625V23H14.5385V14.375H6.46154V23H0V7.90625Z" fill="#FFD976" />
                    </svg>
                    <a href="/">Главная</a>
                </li>

                <li>
                    <svg width="21" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0H11C16.5228 0 21 4.47715 21 10V23H0V0Z" fill="#FFD976" />
                        <rect x="5.62631" y="6.1" width="8.64211" height="11.8" fill="#F5F5F5" stroke="#FFD976" strokeWidth="0.2" />
                    </svg>

                    <a href="#">Заявки</a>
                </li>

                <li>
                    <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="7.50806" cy="5.40919" rx="4.84138" ry="5.40919" fill="#FFD976" />
                        <path d="M14.8965 17.8919C14.8965 22.0283 11.5618 13.2519 7.44827 13.2519C3.33471 13.2519 0 22.0283 0 17.8919C1.48965 14.5632 3.33471 10.8184 7.44827 10.8184C11.5618 10.8184 13.4069 14.5632 14.8965 17.8919Z" fill="#FFD976" />
                        <ellipse cx="18.8897" cy="7.57269" rx="3.49655" ry="3.78643" fill="#FFD976" />
                        <path d="M24 16.3106C24 19.2061 21.5916 13.2519 18.6207 13.2519C15.6498 13.2519 13.2414 19.2061 13.2414 16.3106C14.3173 13.9805 15.6498 11.3591 18.6207 11.3591C21.5916 11.3591 22.9242 13.9805 24 16.3106Z" fill="#FFD976" />
                    </svg>

                    <a href="/clients">Клиенты</a>
                </li>

                <li>
                    <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="11.025" cy="6.85746" rx="6.825" ry="6.85746" fill="#FFD976" />
                        <path d="M21 22.6824C21 27.9263 16.299 15.8249 10.5 15.8249C4.70101 15.8249 0 27.9263 0 22.6824C2.1 18.4624 4.70101 13.7149 10.5 13.7149C16.299 13.7149 18.9 18.4624 21 22.6824Z" fill="#FFD976" />
                    </svg>

                    <a href="/users">Сотрудники</a>
                </li>

                <li>
                    <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5155 2.61682H22.45V19H1.5155V2.61682Z" fill="#FFD976" />
                        <path d="M21.3722 3.04433L12 10.334L2.62777 3.04433L21.3722 3.04433Z" fill="#FFD976" stroke="#F5F5F5" strokeWidth="0.7" />
                    </svg>

                    <a href="#">Чаты</a>
                </li>

                <li>
                    <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="7.94803" x2="6.99999" y2="7.94803" stroke="#FFD976" strokeWidth="2" />
                        <line x1="1" y1="8.94803" x2="1" y2="23.2244" stroke="#FFD976" strokeWidth="2" />
                        <line y1="22.2244" x2="6.99999" y2="22.2244" stroke="#FFD976" strokeWidth="2" />
                        <path d="M6.99994 8.39893L6.99994 23.2244" stroke="#FFD976" strokeWidth="2" />
                        <line x1="6.99994" y1="5.09277" x2="13.9999" y2="5.09277" stroke="#FFD976" strokeWidth="2" />
                        <line x1="7.99994" y1="6.09277" x2="7.99994" y2="23.2244" stroke="#FFD976" strokeWidth="2" />
                        <line x1="6.99994" y1="22.2244" x2="13.9999" y2="22.2244" stroke="#FFD976" strokeWidth="2" />
                        <path d="M14 5.43385V23.2244" stroke="#FFD976" strokeWidth="2" />
                        <line x1="14" y1="1.28575" x2="21" y2="1.28575" stroke="#FFD976" strokeWidth="2" />
                        <line x1="15" y1="2.28575" x2="15" y2="23.2244" stroke="#FFD976" strokeWidth="2" />
                        <line x1="14" y1="22.2244" x2="21" y2="22.2244" stroke="#FFD976" strokeWidth="2" />
                        <path d="M21 0V23.1212" stroke="#FFD976" strokeWidth="2" />
                    </svg>

                    <a href="#">Отчетность</a>
                </li>

            </ul>
        </div>
    </div>
);

export default NavBar;