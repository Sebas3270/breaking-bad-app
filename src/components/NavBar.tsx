import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import useCurrentPath from '../hooks/useCurrentPath';
import { constStyles, devices } from '../styles/Styles'

const NavBar = () => {

const mainPath = useCurrentPath();

  return (
    <Nav className={ mainPath ? 'main' : ''}>
        <CointainerInfo>
            <LogoInfo to={'/'}>
                <Logo className={ mainPath ? 'main' : ''}>Breaking Bad App</Logo>
                <TinyLogo className={ mainPath ? 'main' : ''}>By Sebastian Alvarez</TinyLogo>
            </LogoInfo>
            <LinksContainer>
                <LinksStyled className={ mainPath ? 'main' : ''} to={"characters"}>Characters</LinksStyled>
                <LinksStyled className={ mainPath ? 'main' : ''} to={"episodes"}>Episodes</LinksStyled>
            </LinksContainer>
        </CointainerInfo>
        
    </Nav>
  )
}

export default NavBar

const Nav = styled.nav`
    width: 100%;
    height: 75px;
    //background-color: #3C7322;
    background-color: ${constStyles.navbarColor};

    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    z-index: 10;

    &.main{
        background-color: transparent;
    }

`

const CointainerInfo = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 1500px;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;

`

const LogoInfo = styled(NavLink)`
    display: flex;
    flex-direction: column;
    text-decoration: none;
`

const Logo = styled.p`
    font-size: 0.7rem;
    font-weight: bold;
    color: ${constStyles.navItemsColor};
    margin: 0;

    &.main{
        color: #ffffff;
    }
`

const TinyLogo = styled.p`
    font-size: 0.5rem;
    margin: 0; 
    color: ${constStyles.navItemsColor};

    &.main{
        color: #ffffff;
    }
`

const LinksContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.2rem;
`

const LinksStyled = styled(NavLink)`
    
    text-decoration: none;
    color: ${constStyles.navItemsColor};
    transition: 0.2s ease-in-out;

    &.main{
        color: #ffffff;
    }

    &:hover{
        padding-bottom: 10px;
    }

    &.active{
        font-weight: bold;
    }

    @media ${devices.mobileL} { 
        &:hover{
            padding-bottom: 0;
        }
    }
`