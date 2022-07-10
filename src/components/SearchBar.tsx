import React from 'react'
import styled from 'styled-components'
import { constStyles } from '../styles/Styles'

interface SearchProps {
  element: string,
  onChangeFunction: React.ChangeEventHandler<HTMLInputElement>,
}

const SearchBar = ({ element, onChangeFunction }: SearchProps) => {


  const onChangeText = ( e: React.ChangeEvent ) => {
    e.preventDefault;


  }

  return (
    <FormStyled>
        <InputSyled type='text' placeholder={`Type the ${ element } you want to look for`} onChange={ onChangeFunction }/>
        {/* <button type='submit'>Search</button> */}
    </FormStyled>
  )
}

export default SearchBar

const FormStyled = styled.form`
  display: flex;
  flex-direction: row;
  //gap: 10px;
  margin-bottom: 20px;
`

const InputSyled = styled.input`
  width: 100%;
  padding: 13px 10px;
  font-size: 1rem;
  border-radius: 10px;
  border: none;
  background-color: #DCD7C9;
  transition: 0.2s ease-in-out;

  &:focus-visible{
    outline: none;
    
    -webkit-filter: brightness(90%);
  }
`