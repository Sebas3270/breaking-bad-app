import React from 'react'
import styled from 'styled-components'
import notfound from '../assets/404.png'
import { devices } from '../styles/Styles'

const NotFoundLogo = () => <Logo src={notfound}/>

export default NotFoundLogo

const Logo = styled.img`

  width: 400px;
  align-self: center;

  @media ${devices.mobileL} { 
    width: 80vw;
  }

`