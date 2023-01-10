import React from "react";
import Header from "../../components/header/Header";
import AboutUs from "./About/AboutUs";
import Economica from "./Economica/Economica";
import Hero from "./hero/Hero";
import Header2 from "../../components/header2/header";

export default class Home extends React.Component{
    render(){
        return(
            <>
            <Header2/>
            <Hero/>
            <AboutUs/>
            <Economica/>
            </>
        )
    }
}