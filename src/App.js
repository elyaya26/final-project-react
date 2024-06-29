import React from 'react';
import Header from "./modules/Header/Header";
import './App.css'
import Lessons from "./modules/Lessons/Lessons";
import About from "./modules/About/About";
import Instructor from "./modules/Instructor/Instructor";
import Rules from "./modules/Rules/Rules";
import Useful from "./modules/Useful/Useful";

const App = () => {
    return (
        <div className='App'>
            <div className="header__background">
                <Header/>
                <Lessons/>
            </div>
            <About/>
            <Instructor/>
            <Rules/>
            <Useful/>
        </div>
    );
};

export default App;