import React, { useEffect, useState } from 'react'
import { Container, Modals } from './style'
import { BsCheck2 } from 'react-icons/bs'
import { IoClose } from 'react-icons/io5'
import { FaPen } from 'react-icons/fa'
import { UseTransaction } from '../../Hooks/TransactionContext'

const FormEdit = ({ item }) => {
  const [openModal, setOpenModal] = useState(false)
  const [descrition, setDescrition] = useState(item.descrition)
  const [values, setValues] = useState(item.values)
  const [date, setDate] = useState(item.date)
  const [inOrOut, setInOrOut] = useState(item.inOrOut)
  const { transaction, setTransaction, updateStorage } = UseTransaction()

  useEffect(() => {
    document.body.style.overflowY = openModal ? 'hidden' : 'auto'
  }, [openModal])

  const handleSubmit = (e) => {
    e.preventDefault()
    editTrasaction(item.id)
  }

  const editTrasaction = (id) => {
    const newTransaction = transaction.map((item) => {
      return item.id === id
        ? { ...item, descrition, values, date, inOrOut }
        : item
    })

    setTransaction(newTransaction)
    setOpenModal(!openModal)
    updateStorage(newTransaction)
  }

  return (
    <Container>
      <button
        className="transitionButton"
        onClick={() => setOpenModal(!openModal)}
      >
        <FaPen />
      </button>
      <Modals isOpen={openModal}>
        <fieldset>
          <IoClose
            id="close"
            onClick={() => setOpenModal(!openModal)}
          />         

          <form onSubmit={handleSubmit}>
            <label className="labelText">
              Descrição:
              <input
                className="inputText"
                type="text"
                placeholder="Conta de Luz"
                onChange={(e) => setDescrition(e.target.value)}
                value={descrition}
                required
              />
            </label>
            <label className="labelText">
              Valor:
              <input
                className="inputText"
                type="number"
                placeholder="R$ 80,00"
                onChange={(e) => setValues(e.target.value)}
                value={values}
                required
              />
            </label>
            <div id="checkbox">
              <label>
                <input
                  type="radio"
                  name="valor"
                  onChange={() => setInOrOut(!inOrOut)}
                  checked={inOrOut === true}
                />
                <span id="check">
                  <BsCheck2 />
                </span>
                Entrada
              </label>
              <label>
                <input
                  type="radio"
                  name="valor"
                  onChange={() => setInOrOut(!inOrOut)}
                  checked={inOrOut !== true}
                />
                <span id="check">
                  <BsCheck2 />
                </span>
                Saída
              </label>
            </div>
            <label className="labelText">
              Data:
              <input
                className="inputText"
                type="date"
                name="valor"
                required
                onChange={(e) => setDate(e.target.value)}
                value={date}
              />
            </label>
            <button type="submit">Alterar</button>
          </form>
        </fieldset>
      </Modals>
    </Container>
  )
}

export default FormEdit
