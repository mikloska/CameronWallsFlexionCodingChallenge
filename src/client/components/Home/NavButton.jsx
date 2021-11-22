import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background-color: #fa2d17;
    border-radius: 5px;
    outline

    :hover {
        background-color: black;
    }
`;

const NavButton = ({ text }) => {
    return (
        <Button>
            {text}
        </Button>
    )
}

export default NavButton;