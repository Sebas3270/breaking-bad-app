import React from 'react'
import styled from 'styled-components'
import { Quote } from '../interfaces/Quote'

interface CardProps {
    quote: Quote
}

const CardQuote = ({ quote }:CardProps) => {
  return (
    <>
        <QuoteStyled>{quote.quote}</QuoteStyled>
    </>
  )
}

export default CardQuote

const QuoteStyled = styled.blockquote`
  flex-basis: 500px;
`