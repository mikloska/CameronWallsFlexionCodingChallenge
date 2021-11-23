import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background-color: #fa2d17;
    border-radius: 10px;
    border: 2px solid white;
    margin: 10px;
    width: ${props => props.width};
    height: ${props => props.height};
    font-size: ${props => props.fontSize};
    color: white;
    :hover {
        background-color: white;
        color: #fa2d17;
    }
`;

const NavButton = ({ text, width, height, fontSize, func }) => {
    return (
        <Button width={width} height={height} fontSize={fontSize} onClick={func}>
            {text}
        </Button>
    )
}

export default NavButton;