import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
    border-radius: 10px;
    cursor: pointer;
    :hover {
        background-color: #DF2612;
    }

    p {
        text-align: center;
        margin: 5px;
        font-size: 40px;
    }

    @media (max-width: 400px) {
        width: 250px;
        height: 300px;
    }
`;

const Card = ({ test_id, test_name }) => {

    return (
        <Link to={`gradeTest/${test_id}`}>
            <CardTemplate >
                <p>{test_name}</p>
            </CardTemplate>
        </Link>

    );
}

export default Card;