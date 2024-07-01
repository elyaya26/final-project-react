import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./modules/Header/Header"
import './App.css'
import Lessons from "./modules/Lessons/Lessons"
import About from "./modules/About/About";
import Instructor from "./modules/Instructor/Instructor"
import Rules from "./modules/Rules/Rules"
import Useful from "./modules/Useful/Useful"
import Road from "./modules/Road/Road";


const App = () => {
    return (
        <div className='App'>
            <div className="header__background">
                <Header />
                <Lessons />
            </div>
            <About />
            <Instructor />
            <Rules />
            <Useful />
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className="RoadBackground">
                <Road/>
            </div>
        </div>
    );
};

export default App;



