import React from 'react';

export default function Promo({ onClickNext }) {

    return (
        <>
            <div className="promo">
                <div className="container">

                    <h2 className="title">привет,</h2>
                    <h1 className="promo__title">это <span>не</span> коммерческое задание</h1>
                    <button className="button promo__button"
                        onClick={onClickNext}
                    >
                        <div className="button__arrow">
                            <span></span>
                        </div>
                        Что дальше?
                    </button>

                </div>
            </div>


            <div className="promo__images">
                <img src="img/promo/blue-1.png" alt="" />
                <img src="img/promo/blue-2.png" alt="" />
                <img src="img/promo/blue-3.png" alt="" />
                <img src="img/promo/blue-4.png" alt="" />
                <img src="img/promo/blue-5.png" alt="" />
                <img src="img/promo/blue-6.png" alt="" />
                <img src="img/promo/blue-7.png" alt="" />
                <img src="img/promo/pink-1.png" alt="" />
                <img src="img/promo/pink-2.png" alt="" />
            </div>
        </>
    );
}