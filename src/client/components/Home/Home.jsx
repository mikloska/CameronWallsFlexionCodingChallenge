import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Card from './Card';

const HomeDiv = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;

    .loading {
        font-size: 40px;
        color: #778899;
    }
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
                <p className='loading' >Loading...</p>
            }
        </HomeDiv>
    );
}

export default Home;