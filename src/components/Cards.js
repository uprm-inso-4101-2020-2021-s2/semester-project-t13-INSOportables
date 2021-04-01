import React from 'react';
import './Cards.css';
import {Link} from "react-router-dom";

function Cards() {
    return (
        <div className='cards'>
            <h1>Don't know where to start? We recommend:</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <div>
                            <Link className='cards__item__link' to={'/subfields'}>
                                <figure className='cards__item__pic-wrap1' data-category={'Network'}>
                                </figure>
                                <div className='cards__item__info'>
                                    <h5 className='cards__item__text'>{'Networking (with other programmers)'}</h5>
                                </div>

                            </Link>
                        </div>
                    </ul>
                    <ul className='cards__items'>
                        <div>
                            <Link className='cards__item__link' to={'/quiz'}>
                                <figure className='cards__item__pic-wrap2'>
                                </figure>
                                <div className='cards__item__info'>
                                    <h5 className='cards__item__text'>{'Wanna know which branch might suit you best? Take our quiz!'}</h5>
                                </div>
                            </Link>
                        </div>
                    </ul>
                    <ul className='cards__items'>
                        <div>
                            <Link className='cards__item__link' to={'/subfields'}>
                                <figure className='cards__item__pic-wrap3'>
                                </figure>
                                <div className='cards__item__info'>
                                    <h5 className='cards__item__text'>{'Explore the many subfields of computer science the world offers'}</h5>
                                </div>
                            </Link>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;