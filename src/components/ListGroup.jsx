import React from 'react'
import ListItem from './ListItem';

const ListGroup = ({transactions , dark , deleteTransaction}) => {
  return (
    <div className={dark ? "card p-3 bg-secondary" : "card p-3"}>
        <h3 className="text-secondary">All Transcation : </h3>
        <ul className="my-3 list-group">
      {
        transactions.map((transaction)=>{
          return <ListItem key={transaction.id}
          transaction={transaction} 
          dark={dark}
          deleteTransaction={deleteTransaction}/>
        })
        }
        </ul>
        </div>
  )
};

export default ListGroup;
