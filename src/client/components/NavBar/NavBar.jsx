import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import NavButton from '../Home/NavButton';

const Nav = styled.nav`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 10vh;
    width: 100vw;
    background-color: #fa2d17;
    color: #FFFFFF;
`;

const NavBar = () => {
    return (
        <Nav>
            <Link to='/'>
                <NavButton text='Home' width='100px' height='30px' fontSize='15px' />
            </Link>
            <Link to='createTest'>
                <NavButton text='Add Test' width='100px' height='30px' fontSize='15px' />
            </Link>
            <Link to='createClass'>
                <NavButton text='Add Class' width='100px' height='30px' fontSize='15px' />
            </Link>
        </Nav>
    )
}

export default NavBar;