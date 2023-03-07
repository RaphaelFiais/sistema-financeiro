import React from 'react'
import formatCurrency from '../../utils/formatCurrency'
import { Container } from './style'

const Card = ({ title, value, icon }) => {
  return (
    <Container>
      <div>
        <h3>{title}</h3>
        <span>{icon}</span>
      </div>
      <p>{formatCurrency(value)}</p>
    </Container>
  )
}

export default Card
