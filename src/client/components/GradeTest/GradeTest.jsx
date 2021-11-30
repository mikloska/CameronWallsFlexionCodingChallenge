import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const GradeTest = () => {

    const [questions, setQuestions] = useState([])
    const params = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3000/api/getTestQuestions/${params.test_id}`, {
            params: {
                id: params.test_id
            }
        })
            .then(res => setQuestions(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <h1> grade test</h1>
    );
}

export default GradeTest;