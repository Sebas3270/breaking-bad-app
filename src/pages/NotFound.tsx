import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components';
import NotFoundLogo from '../components/NotFoundLogo';
import { constStyles } from '../styles/Styles';


const NotFound = () => {

    const location = useLocation();

  return (
    <Container>
    
        <h1>Page not found</h1>
        <p style={{'margin': '0', 'marginBottom': '30px'}}>There is no page with path '{ location.pathname }', go to our <LinkHome to={'/'}>Home page</LinkHome>  or use the navbar to navigate throughout the app.</p>
        <NotFoundLogo/>
    
    </Container>
  )
}

export default NotFound

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    
`

const LinkHome = styled(Link)`
  color: ${ constStyles.navbarColor };
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;
`