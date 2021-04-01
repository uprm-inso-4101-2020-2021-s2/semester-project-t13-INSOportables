import React from 'react';
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';
import video1 from '../videos/loophomescreenvideo.mp4';
import {Link} from "react-router-dom";

function HeroSection() {
    return (
        <div className='hero-container'>
            <video autoPlay loop muted>
                <source src={video1} type={'video/mp4'}/>
            </video>
            <h1>print("Hello, programmer")</h1>
            <p>Hello, programmer</p>
            <div className='hero-btns'>
                <Link to='get-started'>
                    <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                    >
                        GET STARTED
                    </Button>
                </Link>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    onClick={console.log('hey')}
                >
                    WATCH TRAILER <i className='far fa-play-circle'/>
                </Button>
            </div>
        </div>
    );
}

export default HeroSection;