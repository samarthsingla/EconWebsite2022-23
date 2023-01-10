import React from "react";
import Header from "./components/header/Header";
import Hero from "./pages/homepage/hero/Hero";
import Home from "./pages/homepage/Home";
import WinterSchool from "./pages/winterschool/WinterSchool";
import {Routes, Route, BrowserRouter} from "react-router-dom";

export default class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/winterschool" element={<WinterSchool/>}/>
                </Routes>
            </BrowserRouter>
        );
    }
}