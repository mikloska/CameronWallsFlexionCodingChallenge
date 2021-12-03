import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import NavButton from '../Home/NavButton';

const Nav = styled.nav`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100px;
    width: 100%;
    background-color: #fa2d17;
    color: #FFFFFF;

    @media (max-width: 700px) {
        justify-content: center;
    }
`;

const NavBar = () => {
    return (
        <Nav>
            <Link to='/'>
                <NavButton text='Home' width='100px' height='40px' fontSize='17px' />
            </Link>
            <Link to='createTest'>
                <NavButton text='Add Test' width='100px' height='40px' fontSize='17px' />
            </Link>
        </Nav>
    )
}

export default NavBar;