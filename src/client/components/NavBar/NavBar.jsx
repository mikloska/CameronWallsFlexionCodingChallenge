import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
    height: 5vh;
    background-color: green;
`;

const NavBar = () => {
    return (
        <Nav>
            This is a navbar
        </Nav>
    )
}

export default NavBar;