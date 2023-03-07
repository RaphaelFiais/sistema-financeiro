import React from 'react'
import { UseTransaction } from '../../Hooks/TransactionContext'
import formatCurrency from '../../utils/formatCurrency'
import formatDate from '../../utils/formatDate'
import { ContainerTable, TdValue } from './style'
import { FaTrashAlt } from 'react-icons/fa'
import FormEdit from '../FormEdit'

const Table = () => {
  const { transaction, setTransaction, updateStorage } = UseTransaction()

  const deleteItem = (id) => {
    const newTransaction = transaction.filter((item) => item.id !== id)
    setTransaction(newTransaction)
    updateStorage(newTransaction)
  }

  return (
    <ContainerTable>
      <thead>
        <tr className='titles'>
          <th>Descrição</th>
          <th>Valor</th>
          <th>Data</th>
          <th style={{ width: 37 }}></th>
          <th style={{ width: 37 }}></th>
        </tr>
      </thead>
      <tbody>
        {transaction &&
          transaction.map((item) => (
            <tr key={item.id}>
              <td>{item.descrition}</td>
              <TdValue whatColor={item.inOrOut}>
                {formatCurrency(item.values)}
              </TdValue>
              <td>{formatDate(item.date)}</td>
              <td>
                <FormEdit item={item} />
              </td>
              <td>
                <FaTrashAlt onClick={() => deleteItem(item.id)} />
              </td>
            </tr>
          ))}
      </tbody>
    </ContainerTable>
  )
}

export default Table
