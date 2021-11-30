import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import NavButton from '../Home/NavButton';

const HomeDiv = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100vw;
`;

const Home = () => {

    const [tests, setTests] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/test')
            .then(res => setTests(res.data))
            .catch(err => console.log(err))
    });

    return (
        <HomeDiv>
            {tests.length > 0 ? <h1>There are tests</h1> :
                <Link to='createTest'>
                    <NavButton text='Add Test' width='300px' height='75px' fontSize='20px' />
                </Link>
            }
        </HomeDiv>
    );
}

export default Home;