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


// src/App.js
// import React from 'react';
// import Header from "./modules/Header/Header";
// import Lessons from "./modules/Lessons/Lessons";
// import About from "./modules/About/About";
// import Instructor from "./modules/Instructor/Instructor";
// import Rules from "./modules/Rules/Rules";
// import Useful from "./modules/Useful/Useful";
// // import Advantages from "./components/advantages/Advantages";
// import Advantages from "./components/advantages/advantages";
// import { ADVANTAGES_DATA } from "./constants/Advantages";
// import './App.css';
//
// const App = () => {
//     return (
//         <div className='App'>
//             <div className="header__background">
//                 <Header />
//                 <Lessons />
//             </div>
//             <About />
//             <Instructor />
//             <Rules />
//             <Useful />
//             <div className='advantage-flex'>
//                 {ADVANTAGES_DATA.map((item) => {
//                     return (
//                         <div key={item.id}>
//                             <Advantages
//                                 icon={item.icon}
//                                 text={item.text}
//                             />
//                         </div>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// };
//
// export default App;
