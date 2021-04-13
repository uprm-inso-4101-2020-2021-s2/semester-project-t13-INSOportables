import React, {useEffect, useState} from "react";
import '../App.css';
import Cards from '../components/Cards';
import HeroSection from '../components/HeroSection';
import Navbar from "../components/Navbar";


function Home() {
    useEffect(() => {
        if (!localStorage.getItem("loggedIn")) {
            localStorage.setItem("loggedIn", false);
        }
    }, []);

    return (
        <>
            <HeroSection/>
            <Cards/>
        </>
    );
}

export default Home;