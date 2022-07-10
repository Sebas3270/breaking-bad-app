import React, { useEffect } from 'react'
import styled from 'styled-components';
import CardEpisode from '../components/CardEpisode';
import Loader from '../components/Loader';
import SearchBar from '../components/SearchBar';
import useEpisodes from '../hooks/useEpisodes'

const Episodes = () => {

  const {episodes, getEpisodes, loading, getEpisodesByName} = useEpisodes();

  useEffect(() => {
    getEpisodes();
  }, [])

  const onChangeText = ( e: React.ChangeEvent<HTMLInputElement> ) => {
    e.preventDefault;
    const name = e.target.value.trim().toLowerCase();
    getEpisodesByName(name);
    
  }
  

  return (
    <>
        <h1>Episodes</h1>
        {
          loading ? 
          <Loader/>
          :
          <>
          <SearchBar element='episode' onChangeFunction={onChangeText}/>
          <CardsLayout2>
            {

              episodes?.map(ep => (
                <CardEpisode key={ep.episode_id} episode={ep}/>
              ))

            }
          </CardsLayout2>
          </>
          
        }
    </>
  )
  
}

export default Episodes

const CardsLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(minmax(auto-fill, 2fr), minmax(200px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 20px;
`

const CardsLayout2 = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 20px;
  margin-bottom: 30px;
`