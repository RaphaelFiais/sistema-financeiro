import React, { useEffect, useState } from 'react'
import { Container, Modals } from './style'
import { BsCheck2 } from 'react-icons/bs'
import { IoClose } from 'react-icons/io5'
import { v4 } from 'uuid'
import { UseTransaction } from '../../Hooks/TransactionContext'

const Modal = () => {
  const [openModal, setOpenModal] = useState(false)
  const [descrition, setDescrition] = useState('')
  const [values, setValues] = useState('')
  const [date, setDate] = useState('')
  const [inOrOut, setInOrOut] = useState(true)
  const { transaction, setTransaction, updateStorage } = UseTransaction()

  useEffect(() => {
    document.body.style.overflowY = openModal ? 'hidden' : 'auto'
  }, [openModal])

  let newTransaction = []

  const addTransaction = (e) => {
    e.preventDefault()
    newTransaction = [
      ...transaction,
      {
        id: v4(),
        descrition,
        values,
        date,
        inOrOut,
      },
    ]
    setTransaction(newTransaction)
    setOpenModal(!openModal)
    setDate('')
    setDescrition('')
    setValues('')
    updateStorage(newTransaction)
  }

  return (
    <Container>
      <button
        onClick={() => setOpenModal(!openModal)}
        className="transitionButton"
      >
        + New transition
      </button>
      <Modals isOpen={openModal}>
        <fieldset>
          <IoClose
            id="close"
            size={25}
            onClick={() => setOpenModal(!openModal)}
          />
          

          <form onSubmit={addTransaction}>
            <label className="labelText">
              Descrição:
              <input
                className="inputText"
                type="text"
                placeholder="Conta de Luz"
                onChange={(e) => setDescrition(e.target.value)}
                required
                value={descrition}
              />
            </label>
            <label className="labelText">
              Valor:
              <input
                className="inputText"
                type="number"
                placeholder="R$ 80,00"
                onChange={(e) => setValues(e.target.value)}
                required
                value={values}
              />
            </label>
            <div id="checkbox">
              <label>
                <input
                  type="radio"
                  name="valor"
                  defaultChecked
                  onChange={() => setInOrOut(!inOrOut)}
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
                onChange={(e) => setDate(e.target.value)}
                required
                value={date}
              />
            </label>
            <button type="submit">Enviar</button>
          </form>
        </fieldset>
      </Modals>
    </Container>
  )
}

export default Modal
