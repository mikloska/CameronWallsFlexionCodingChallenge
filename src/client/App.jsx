import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home';

const App = () => {

    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' exact element={<Home />} />
                {/* <Route path='/createTest' element={<CreateTest />} />
                <Route path='/createClass' element={<CreateClass />} /> */}
            </Routes>
        </BrowserRouter>
    );
};

export default App;