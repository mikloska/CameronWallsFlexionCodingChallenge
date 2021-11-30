import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import CreateTest from './components/CreateTest/CreateTest';
import GradeTest from './components/GradeTest/GradeTest';

const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const App = () => {

    return (
        <BrowserRouter>
            <Main>
                <NavBar />
                <Routes>
                    <Route path='/' exact element={<Home />} />
                    <Route path='/createTest' element={<CreateTest />} />
                    <Route path='/gradeTest/:test_id' element={<GradeTest />} />
                </Routes>
            </Main>
        </BrowserRouter>
    );
};

export default App;