import React, {useEffect, useState} from "react";
import '../App.css';
import Cards from '../components/Cards';
import HeroSection from '../components/HeroSection';

function Home() {
    return (
        <>
            <HeroSection/>
            <Cards/>
        </>
    );
}

export default Home;