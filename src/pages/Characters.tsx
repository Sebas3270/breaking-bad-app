import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CardCharacter from '../components/CardCharacter';
import Loader from '../components/Loader';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import useCharacters from '../hooks/useCharacters';
import Layout from './Layout';

const Characters = () => {

    const {characters, getCharacters, loading, error, getCharactersByName} = useCharacters();
    

    useEffect(() => {
        getCharacters();
    }, []);

    const onChangeText = ( e: React.ChangeEvent<HTMLInputElement> ) => {
      e.preventDefault;
      const name = e.target.value.trim().toLowerCase();
      getCharactersByName(name);
      
    }
    

  return (
    <>
        <h1>Characters</h1>

        {
          loading ? 
          <Loader/>
          :
          <>
          
          <SearchBar element='character' onChangeFunction={onChangeText}/>
          <CardsLayout>
            {characters?.map(char => <CardCharacter key={char.char_id} character={char}/>)}
          </CardsLayout>
          </>

          
        }
        
    </>
    
  )
}

export default Characters;

const CardsLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 20px;
`