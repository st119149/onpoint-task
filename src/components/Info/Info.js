import React from 'react';

import './Info.scss';


export default function Info({ isCurrent }) {

    const images = React.useRef(null);

    if (isCurrent && images.current !== null) {
        const delay = 0.5;
        images.current.childNodes.forEach((item, index) => {
            item.style = `animation: info-img 3s ease ${delay*index}s forwards`;
        })
    }

    return (
        <>
            <div className="info">
                <div className="container">

                    <h2 className="title">Текст сообщения</h2>
                    <div className="info__content">
                        <div className="info__wrapper">
                            <p><b>Сперматозо́ид</b> (от др.-греч. σπέρμα род. п. σπέρματος здесь «сперма» + ζωή «жизнь» + εἶδος «вид, облик», лат. spermatozoon, spermium) — мужская половая клетка (гамета) размножающихся посредством оогамии организмов. Сперматозоиды обычно обладают способностью к активному движению и служат для оплодотворения женской гаметы — яйцеклетки. Обычно они значительно меньше яйцеклеток, поскольку не содержат столь значительного количества цитоплазмы и производятся организмом одновременно в значительном количестве[1].</p>
                            <p>Типичное строение сперматозоида отражает форму общего предка животных и грибов: одноклеточный ядерный организм, передвигающийся за счёт жгутика в задней части, используя его подобно хвосту. Обширная группа происходящих от него организмов включает в себя животных, большинство грибов и некоторые группы протистов и называется кланом заднежгутиковых. Большинство других эукариот со жгутиками имеют их в передней части.</p>
                            <p>В широком смысле слова по традиции сперматозоидами иногда называют мужские половые клетки также у растений, к ним применяют также термины спермии или антерозоиды (их применяют также к традиционно сближавшимся с растениями грибам).</p>
                        </div>

                    </div>
                </div>
            </div>

            <div className="info__images" ref={images}>
                <img src="img/info/pink-1.png" alt="" />
                <img src="img/info/pink-2.png" alt="" />
                <img src="img/info/pink-3.png" alt="" />
                <img src="img/info/pink-4.png" alt="" />
                <img src="img/info/pink-5.png" alt="" />
            </div>

        </>

    );
}