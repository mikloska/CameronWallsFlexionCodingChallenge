import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import NavButton from '../Home/NavButton';
import Card from './Card';

const HomeDiv = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100vw;
`;

const Home = () => {

    const [tests, setTests] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/test')
            .then(res => {
                console.log(res.data)
                setTests(res.data)
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <HomeDiv>
            {tests.length > 0 ? tests.map(test => <Card key={test.test_id} test_id={test.test_id} test_name={test.test_name} />) :
                <Link to='createTest'>
                    <NavButton text='Add Test' width='300px' height='75px' fontSize='20px' />
                </Link>
            }
        </HomeDiv>
    );
}

export default Home;