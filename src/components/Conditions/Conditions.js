import React from 'react';

import Popup from '../Popup/Popup';

export default function Conditions() {

    const [popupIsActive, setPopupIsActive] = React.useState(false);


    const handleClose = (e) => {
        if (e.target.classList.contains('overlay')
            || e.target.classList.contains('popup__close'))

            setPopupIsActive(false)
    };

    return (
        <>
            <div className="conditions">
                <div className="container">

                    <h2 className="title title_nowrap">ключевое сообщение</h2>
                    <h3 className="conditions__brend">brend<b>xy</b></h3>
                    <div className="conditions__content">

                        <div className="condition">
                            <img src="img/conditions/icon-1.png" alt="condition-icon" />
                            <div>3 раза в день после еды. После приема препарата рекомендуется воздержаться от пищи и напитков в течение 1 часа</div>
                        </div>

                        <div className="condition">
                            <img src="img/conditions/icon-2.png" alt="condition-icon" />
                            <div>Курс лечения от 7 дней до 1 мес.</div>
                        </div>

                        <button className="button conditions__button"
                            onClick={() => setPopupIsActive(true)}>
                            <div className="button__arrow"><span></span></div>
                            Подробнее
                        </button>

                    </div>



                </div>
            </div>


            <div className="conditions__images">

                <img src="img/conditions/bubble-1.png" alt="" />
                <img src="img/conditions/bubble-2.png" alt="" />
                <img src="img/conditions/bubble-3.png" alt="" />
                <img src="img/conditions/bubble-4.png" alt="" />
                <img src="img/conditions/bubble-5.png" alt="" />
                <img src="img/conditions/bubble-6.png" alt="" />
                <img src="img/conditions/bubble-7.png" alt="" />
                <img src="img/conditions/bubble-8.png" alt="" />

                <img src="img/conditions/bottle.png" alt="bottle" className="conditions__bottle" />

            </div>


            <Popup
                isActive={popupIsActive}
                onClickClose={handleClose}
            />
        </>
    );
}