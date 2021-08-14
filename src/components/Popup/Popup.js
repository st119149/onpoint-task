import React from 'react';

import './Popup.scss';

export default function Popup({ isActive, onClickClose }) {

    const advantages = [
        [
            'Самое важное и ключевое преимущество нашего препарата',
            'Второе по важности преимущество',
            'Ещё одно важное преимущество препарата',
        ],
        [
            'Ещё одно не менее важное преимущество препарата',
            'Ещё одно важное преимущество препарата',
            'Ещё одно важное преимущество препарата',
        ]
    ];

    const [pageIndex, setPageIndex] = React.useState(0);

    const toNextPage = () => {
        if (pageIndex !== advantages.length - 1)
            setPageIndex(pageIndex + 1)
    }

    const toPrevPage = () => {
        if (pageIndex !== 0)
            setPageIndex(pageIndex - 1)
    }

    const overlayClassName = isActive ? "overlay popup_active" : "overlay";

    return (
        <>
            <div className={overlayClassName} onClick={onClickClose}>

                <div className="popup">
                    <h2 className="title title_nowrap">преимущества</h2>
                    <h3 className="conditions__brend">brend<b>xy</b></h3>

                    <ul className="popup__list">

                        {advantages[pageIndex].map((item, index) =>
                            <li key={index}>
                                <span>0{pageIndex * 3 + (index + 1)}</span>
                                {item}
                            </li>
                        )}

                    </ul>

                    <div className="popup__pag">
                        <div className="arrow"
                            onClick={toPrevPage}
                        ></div>

                        {Array.from({ length: advantages.length })
                            .map((item, index) =>
                                <div
                                    key={index}
                                    className={
                                        index === pageIndex ?
                                            "circle circle_active" :
                                            "circle"
                                    }
                                ></div>
                            )}

                        <div className="arrow arrow_right"
                            onClick={toNextPage}
                        ></div>
                    </div>

                    <div className="popup__close"></div>

                </div>
            </div>
        </>
    );
}