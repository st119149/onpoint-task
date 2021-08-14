import React from 'react';

import './Header.scss';


export default function Header({ onClickHome }) {
    return (
        <header>
            <div className="container">
                <ul className="nav">
                    <li className="nav__link" onClick={onClickHome}>
                        <img src="img/icon-home.png" alt="home-logo" />
                    </li>
                    <li className="nav__link">project</li>
                </ul>
            </div>
        </header>
    )
}