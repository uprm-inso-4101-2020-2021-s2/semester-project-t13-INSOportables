import React, {useEffect, useState} from "react";
import '../App.css';
import Cards from '../components/Cards';
import HeroSection from '../components/HeroSection';



function Home() {
    const [loggedIn, setLoggedIn] = useState(false);
/*
    useEffect(() => {
        window.alert(localStorage.getItem("loggedIn"))
        //console.log(localStorage.getItem("loggedIn"));
        setLoggedIn(localStorage.getItem("loggedIn"));
        window.alert(localStorage.getItem("loggedIn"))
        //console.log(loggedIn);
    }, [localStorage.getItem("loggedIn")]);

 */
    return (
        <>
            <HeroSection/>
            <Cards/>
        </>
    );
}

export default Home;