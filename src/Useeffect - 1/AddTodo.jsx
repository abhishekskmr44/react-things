import React, { useState } from 'react'


export const AddTodo = ({onAdd}) => {

    const [newTodo, setNewTodo] = useState("")

  return (
    <div  style = {{border: '2px solid teal', margin: '10px'}}>

        Add The Task 
        
        <input type="text" value={newTodo} onChange={ (e) => setNewTodo(e.target.value)}></input>

        <button onClick={() => onAdd(newTodo)}> Save </button>

    </div>
  )
}
