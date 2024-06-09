import React from 'react';
import Header from './components/Header';

import Main from './components/Main';
import Nav from "./components/Navbar/Navbar"
import './App.css';
import Aside from './components/Aside';
import BottomBar from './components/Navbar/BottomBar';

const App = () => {
    return (
        <div className="app">
            <Header />
            <div className="main-content">
                <div className=' h-screen bg-[#202020]  hidden lg:block '>
                    <Nav />
                    <Aside />
                </div>
                <BottomBar/>
                <Main />
            </div>
        </div>
    );
};

export default App;
