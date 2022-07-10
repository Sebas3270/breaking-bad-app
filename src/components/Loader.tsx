import React from 'react'
import styled, { keyframes } from 'styled-components'
import { constStyles } from '../styles/Styles'

const Loader = () => {
  return (
    <LoaderDiv/>
  )
}

export default Loader

const LoaderAnimation = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`

const LoaderDiv = styled.div`
    margin: 0 auto;
    margin-top: 100px;

    border: 10px solid #f3f3f3;
    border-radius: 50%;
    border-top: 10px solid ${ constStyles.navbarColor };
    width: 120px;
    height: 120px;
    -webkit-animation: ${LoaderAnimation} 2s linear infinite; /* Safari */
    animation: ${LoaderAnimation} 2s linear infinite;

`