import React, { useEffect, useState } from 'react'
import Card from '../Card'
import { Container, Out } from './style'
import { BsArrowBarDown } from 'react-icons/bs'
import { MdAttachMoney } from 'react-icons/md'
import { UseTransaction } from '../../Hooks/TransactionContext'

const ContainerCard = () => {
  const { transaction } = UseTransaction()
 

  
    const inCash = transaction.filter((cash) => cash.inOrOut)
    const inValues = inCash.map((item) => parseFloat(item.values))
    const sumInValues = inValues.reduce((acc, current) => {
      return acc + current
    }, 0)
    

    const outCash = transaction.filter((cash) => !cash.inOrOut)
    const outValues = outCash.map((item) => parseFloat(item.values))
    const sumOutValues = outValues.reduce((acc, current) => {
      return acc + current
    }, 0)
    
    const sumTotal = sumInValues - sumOutValues
    
    
  
 
    
  
  
  return (
    <Container>
      <Card title="Receitas" icon={<BsArrowBarDown />} value={sumInValues} />
      <Card title="Despesas" icon={<Out/>} value={sumOutValues} />
      <Card title="Saldo" icon={<MdAttachMoney />} value={sumTotal} />
    </Container>
  )
}

export default ContainerCard
