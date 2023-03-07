import React from 'react'
import ContainerCard from '../../components/ContainerCard'
import Modal from '../../components/Modal'
import Table from '../../components/Table'
import { UseTransaction } from '../../Hooks/TransactionContext'
import { Container } from './style'

const Home = () => {
  const { transaction } = UseTransaction()

  return (
    <Container>
      <header>
        <h1>Sistema financeiro</h1>
      </header>
      <ContainerCard />
      <Modal />
      {transaction.length > 0 ? (
        <Table />
      ) : (
        <h2 style={{ marginTop: '10%' }}>Não há Transações</h2>
      )}
    </Container>
  )
}

export default Home
