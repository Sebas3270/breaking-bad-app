import React from 'react'
import styled from 'styled-components';
import { Episode } from '../interfaces/Episode'

interface CardProps {
    episode: Episode;
}

const CardEpisode = ({episode}: CardProps) => {
  return (
    <Card>
        <CardTitle>{episode.title}</CardTitle>
        <CardInfo>Air Date: {episode.air_date}</CardInfo>
        <CardInfo>Series: {episode.series}</CardInfo>
    </Card>
  )
}

export default CardEpisode

const Card = styled.div`

  justify-self: stretch;

  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;  transition: 0.3s ease-in-out;
  position: relative;
  border-radius: 15px;

  padding: 20px;

  &>p{
    margin: 0;
  }

`

const CardTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
`

const CardInfo = styled.p`
  
`