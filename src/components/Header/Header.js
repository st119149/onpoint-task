import React from 'react';

export default function Header({ onClickHome }) {
    return (
        <header>
            <div className="container">

                <ul className="nav">
                    <li className="nav__link">
                        <a
                            onClick={onClickHome}
                            href="#">
                            <img src="img/icon-home.png" alt="home-logo" />
                        </a>
                    </li>
                    <li className="nav__link">
                        <a href="#">project</a>
                    </li>
                </ul>
            </div>

        </header>
    )
}