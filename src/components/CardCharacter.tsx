import React, { useCallback } from 'react'
import { Character } from '../interfaces/Character'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { constStyles } from '../styles/Styles';

interface CardProps {
  character: Character;
}

const CardCharacter = ({ character }: CardProps) => {

  const navigator = useNavigate();

  return (
    <Card onClick={() => navigator(`../${character.char_id}`)}>
      <ImageCard src={character.img} alt={`${character.name} Image`} />
      <OverElements>
        <NameOver>{character.name}</NameOver>
        <NickOver>{character.nickname}</NickOver>
      </OverElements>
    </Card>
  )
}

export default CardCharacter;

const Card = styled.div`

  justify-self: stretch;

  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  position: relative;
  border-radius: ${ constStyles.borderRadios };

  &:hover{
    transform: scale(1.02);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }

`

const ImageCard = styled.img`
  height: 100%; 
  width: 100%; 
  object-fit: cover;
  border-radius: ${ constStyles.borderRadios };
`

const OverElements = styled.div`
  position: absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;

  background: rgb(0,0,0);
  background: linear-gradient(0deg, rgba(0,0,0,0.7889356426164216) 0%, rgba(0,212,255,0) 100%); 

  display: flex;
  flex-direction: column;
  justify-content: end;

  border-radius: ${ constStyles.borderRadios };
  
`

const NameOver = styled.h5`
  margin: 0;
  color: white;
  font-size: 1.1rem;
  padding-left: 10px;
`

const NickOver = styled.p`
  margin: 0;
  color: white;
  padding-left: 10px;
  padding-bottom: 15px;
`