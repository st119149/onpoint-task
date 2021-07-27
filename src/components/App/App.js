import React from 'react';

import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import Info from '../Info/Info';
import Conditions from '../Conditions/Conditions';

import './App.scss';

export default function App() {

    const [slideIndex, setSlideIndex] = React.useState(0);

    const slider = React.useRef(null);
    const mainBg = React.useRef(null);

    let clientTouchStart = React.useRef(null);


    const slides = [
        <Promo onClickNext={() => setSlide(1)} />,
        <Info isCurrent={slideIndex === 1} />,
        <Conditions />
    ];

    const setSlide = index => {
        slider.current.childNodes.forEach(item => {
            item.style = `left: ${-100 * index}%`;
        });
        mainBg.current.style = `left: ${-100 * index}%`;

        setSlideIndex(index);

    }

    const toNextSlide = () => {
        if (slideIndex !== 2) {

            setSlide(slideIndex + 1);
        }

    };

    const toPrevSlide = () => {
        if (slideIndex !== 0) {
            setSlide(slideIndex - 1);
        }
    };


    // const handleTouchMove = e => {
    //     if (e.touches[e.touches.length - 1].clientX % 2 === 0
    //         && slideIndex !== 2
    //         && slideIndex !== 0
    //     ) {
    //         const distance = (clientTouchStart - e.touches[e.touches.length - 1].clientX) / 40;

    //         slider.current.childNodes.forEach(item => {
    //             item.style = `left: ${-(distance + 100 * slideIndex)}%`;
    //         });

    //         mainBg.current.style = `left: ${-(distance + 100 * slideIndex)}%`;

    //     }

    // }

    const handleTouchStart = e => {
        clientTouchStart = e.touches[0].clientX;
    }
    const handleTouchEnd = e => {

        if (e.changedTouches[0].clientX - clientTouchStart < -200) {
            toNextSlide();
        } else if (e.changedTouches[0].clientX - clientTouchStart > 200) {
            toPrevSlide();
        }
        else {
            slider.current.childNodes.forEach(item => {
                item.style = `left: ${-100 * slideIndex}%`;
            });
            mainBg.current.style = `left: ${-100 * slideIndex}%`;

        }
    }



    return (
        <div className="app">

            <img className="main-bg" src="img/bg.jpg" alt="bg" ref={mainBg} />

            <Header onClickHome={() => setSlide(0)} />

            <div className="slider"
                ref={slider}
                // onTouchMove={handleTouchMove}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >

                {slides.map((item, index) =>
                    <div className="slide" key={index}>
                        {item}
                    </div>
                )}

            </div>





            <img className="app__logo" src="img/onpoint-logo.png" alt="onpoint-logo" />


        </div>
    )
}

