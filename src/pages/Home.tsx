import React from 'react'
import styled from 'styled-components'
import bg from '../assets/bg.jpg';
import { devices } from '../styles/Styles';

const Home = () => {
  return (
    <>
        <Background>
          
          <Container>
            <Title>Welcome to my app</Title>
            <Info>This app was made using React with Typescript, Styled-components, Axios, React-router-dom, Custom hooks and the Breaking Bad Api.</Info>
          </Container>

        </Background>
        
    </>
  )
}

export default Home

const Background = styled.div`

  height: 100vh;

  background: linear-gradient(180deg, rgba(0,0,0,0.7609244381346288) 0%, rgba(0,0,0,0.5788516090029762) 39%, rgba(0,0,0,0.45840342973126746) 58%, rgba(0,0,0,0) 100%), url(${ bg });
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

`

const Container = styled.div`
  padding: 0 20px;

  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`

const Title = styled.h1`
  font-size: 4rem;
  color: #fff;
  line-height: 110%;
  margin: 0;


`

const Info = styled.p`
  margin: 0;
  margin-top: 20px;
  font-size: 1.5rem;
  color: #fff;
  max-width: 1000px;
  text-align: center;

  @media ${devices.mobileL} { 
    text-align: left;
  }
`