import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import ListGroup from './components/ListGroup'
import Form from './components/Form'

const App = () => {

  const [dark, setDark] = useState(false);

  const changeTheme = ()=>{
    if(dark) {
      setDark(false);
    } else {
      setDark(true);
    }
  };


  const [transactions , setTransactions] = useState([]);

    // Delete transactions

    const deleteTransaction = (id) => {
      setTransactions(transactions.filter((item)=>{
        if(item.id !== id){
          return true;
        }
      }))
     };
   
     // Add Transaction

     const addTransaction = (text , ammount) => {

      const newTransaction = {
        id: crypto.randomUUID(),
        text : text,
        ammount: parseInt(ammount),
      };    
        setTransactions([newTransaction, ...transactions]);
     };

  return (
    <>
    <Navbar  dark={dark} changeTheme={changeTheme}  />
      <div className={
        dark ? "container-fluid px-3 py-5 bg-dark" :"container-fluid px-3 py-5"
      }
      >
        <Dashboard transactions ={transactions} dark={dark} />
        <Form dark={dark} addTransaction={addTransaction}  />
        <ListGroup transactions ={transactions} dark={dark} 
        deleteTransaction={deleteTransaction}
        />
      </div>
    </>
  )
}

export default App;

