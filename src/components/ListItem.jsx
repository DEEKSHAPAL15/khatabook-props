import React from 'react'

const ListItem = ({transaction , deleteTransaction}) => {
  return (
    <li className= 
     {transaction.ammount > 0 ?
      "list-group-item bg-success text-light p-5 my-2" 
    : "list-group-item bg-danger text-light p-5 my-2"
    }>
    <h1>{transaction.text} : {transaction.ammount}</h1>

    <button className='btn btn-sm btn-outline-light float-end'
    onClick={()=> deleteTransaction(transaction.id)}>
    Delete</button>
    </li>
  )
};
SS
export default ListItem;

