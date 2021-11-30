import axios from "axios";
import React from "react";
import styled from "styled-components";

const CardTemplate = styled.button`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
width: 400px;
height: 500px;
background-color: #fa2d17;
margin: 15px;
color: #FFFFFF;
border: 1px solid black;
cursor: pointer;
:hover {
    background-color: #DF2612;
}

p {
    text-align: center;
    margin: 5px;
    font-size: 40px;
}
`;

const Card = ({ test_id, test_name }) => {

    const getQuestions = (e) => {
        e.preventDefault();
        axios.get(`http://localhost:3000/api/getTestQuestions/${test_id}`, {
            params: {
                id: test_id
            }
        })
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }
    return (
        <CardTemplate onClick={getQuestions}>
            <p>{test_name}</p>
        </CardTemplate>
    );
}

export default Card;