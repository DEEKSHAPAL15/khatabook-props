import React, { useState } from 'react'

const Form = ({dark , addTransaction}) => {

  // State FOr Inputs
  const [text , setText] = useState("");
  const [ammount , setAmmount] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault()
    addTransaction(text,ammount);
    setText("");
    setAmmount("");
  };

  return (
    <div className={
      dark ? "card p-3 my-3 bg-secondary" :
       "card p-3 my-3 "}
       >

    <h3 className={
      dark ? "text-center text-light" :"text-center text-secondary"
    }>
      Enter Your Transactions
      </h3>

    <form className='my-3'onSubmit={(e) => handleSubmit(e)}>
    <input type="text" 
    placeholder='Enter Text' 
    className= { dark ? "form-control my-2 bg-secondary" : "form-control my-2"  }
    required
    onChange={(e)=> setText(e.target.value)}
    value={text}
    />

    <input type="number"
     placeholder='Enter Ammount' 
     className="form-control my-2" 
     required
     onChange={(e)=> setAmmount(e.target.value)}
     value={ammount}
     />

    <button className='btn btn-success w-100 mt-1'>
       Save Transactions
       </button>

    </form>
  </div>
  )
};

export default Form;
