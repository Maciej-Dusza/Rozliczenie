import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from "@emotion/styled";

const HeaderStyled = styled.div`
    display:flex;
    box-shadow: 0 0 5px 5px rgba(0,0,0,0.3);
    width: 100%;
    height: 60px;
    background-color: #fff;
    top:0px;
    z-index:2;  
`;

const NavLinkStyled = styled(NavLink)`
padding: 0px 10px;
line-height: 60px;
text-decoration: none;
color: black;
font-weight: bold;
&:hover{
    background-color: darkgrey;
    color: white;
}
&.active {
    background-color: black;
    color: white;
}
`

export const Header = () => {
    return (
        <HeaderStyled>
            <NavLinkStyled exact to="/"> Login</NavLinkStyled>
            <NavLinkStyled to="/transactions"> Transactions</NavLinkStyled>
            <NavLinkStyled to="/statistics"> Statistics</NavLinkStyled>
        </HeaderStyled>
    )
}