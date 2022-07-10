
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import useCharacters from '../hooks/useCharacters';
import styled from "styled-components";
import Loader from '../components/Loader';
import CardQuote from '../components/CardQuote';
import { constStyles, devices } from '../styles/Styles';
import NotFoundLogo from '../components/NotFoundLogo';

const CharacterPage = () => {

  const { characterId } = useParams();

  const { character, getCharacter, loading, quotes, error } = useCharacters();

  useEffect(() => {
    getCharacter(Number(characterId));
  }, []);

  const CharactersQuotes = () => {
    return (quotes?.length != 0) ?
      <>
        <DataInfo><b>Quotes:</b></DataInfo>
        <MyList>
          {quotes?.map((quote) => (
            <li key={quote.quote_id}><DataInfo>"{quote.quote}"</DataInfo></li>
          ))}
        </MyList> 
      </>
      : <></>
  }

  const MainPage = () => {
    return (error) ?
    <div style={{'display': 'flex', 'flexDirection': 'column'}}>
    <Name style={{'margin': '20px 0', 'fontSize': '2rem'}}>Character not found</Name>
    <DataInfo style={{'marginBottom': '20px'}}>There is no character with id { characterId }, go to <LinkHome to={'/characters'}>Characters page</LinkHome> to look for an available character</DataInfo>
    <NotFoundLogo/>
    </div>
    :
    <Layout>

      <Card>
        <ImageCard src={character?.img} />
      </Card>

      <InfoContainer>
        <Name>{character?.name}</Name>
        <DataInfo><b>Nickname: </b>{character?.nickname}</DataInfo>
        <DataInfo><b>Birthday: </b>{character?.birthday}</DataInfo>
        <DataInfo><b>Occupation:</b></DataInfo>
        <MyList>
          {character?.occupation.map((occ, i) => (
            <li key={i}><DataInfo>{occ}</DataInfo></li>

          ))}
        </MyList>

        <CharactersQuotes />
      </InfoContainer>

    </Layout>
  }

  return loading ? <Loader /> : <MainPage/>
}

export default CharacterPage

const Layout = styled.div`
  width: 100%;
  height: calc(100vh - 75px);

  display: grid;
  grid-template-columns: 1fr 3fr;

  @media ${devices.tablet} { 
    grid-template-columns: 1fr 1fr;
  }

  @media ${devices.mobileL} { 
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`

  justify-self: stretch;

  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  position: relative;
  border-radius: 15px;

  margin: 20px 0;

`

const ImageCard = styled.img`
  height: 100%; 
  width: 100%; 
  object-fit: cover;
  border-radius: 15px;
`

const InfoContainer = styled.div`
  padding-left: 20px;
  overflow-y: auto;

  @media ${devices.mobileL} { 
    overflow-y: unset;
    padding: 0;
  }
`

const Name = styled.h1`
  font-size: 3rem;
  margin: 20px 0 15px 0;

  @media ${devices.mobileL} { 
    margin: 0;
  }
`

const DataInfo = styled.p`
  font-size: 1rem;
  margin: 0 0 5px 0;
`

const MyList = styled.ul`
  margin: 0;
`

const LinkHome = styled(Link)`
  color: ${ constStyles.navbarColor };
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;
`