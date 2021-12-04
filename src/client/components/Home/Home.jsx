import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import NavButton from '../Home/NavButton';
import Card from './Card';

const HomeDiv = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`;

const Home = () => {

    const [tests, setTests] = useState([]);

    useEffect(() => {
        getTests();
    }, []);

    const getTests = async () => {
        try {
            const { data } = await axios.get('http://localhost:3000/api/test');
            setTests(data);
        }
        catch (err) {
            console.log('error fetching tests')
        }
    }

    return (
        <HomeDiv>
            {tests.length > 0 ? tests.map(test => <Card data-testid='test' key={test.test_id} test_id={test.test_id} test_name={test.test_name} />) :
                <Link to='createTest'>
                    <NavButton text='Add Test' width='300px' height='75px' fontSize='20px' />
                </Link>
            }
        </HomeDiv>
    );
}

export default Home;