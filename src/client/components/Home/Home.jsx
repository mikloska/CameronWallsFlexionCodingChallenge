import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NavButton from '../Home/NavButton';

const HomeDiv = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90vh;
    width: 50vw;
    background-color: #fa2d17;
    
`

const Home = () => {
    return (
        <HomeDiv>
            <Link to='createTest'>
                <NavButton text='Add Test' width='300px' height='75px' fontSize='20px' />
            </Link>
            <Link to='createClass'>
                <NavButton text='Add Class' width='300px' height='75px' fontSize='20px' />
            </Link>
        </HomeDiv>
    );
}

export default Home;