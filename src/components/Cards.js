import React from 'react';
import './Cards.css';
import {Link} from "react-router-dom";

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <div>
                            <Link className='cards__item__link' to={'/subfields'}>
                                <figure className='cards__item__pic-wrap1' data-category={'Adventure'}>
                                </figure>
                            <div className='cards__item__info'>
                                <h5 className='cards__item__text'>{'Explore the hidden waterfall deep inside the Amazon Jungle'}</h5>
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
                                    <h5 className='cards__item__text'>{'Travel through the Islands of Bali in a Private Cruise'}</h5>
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
                                    <h5 className='cards__item__text'>{'Experience Football on Top of the Himalayan Mountains'}</h5>
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