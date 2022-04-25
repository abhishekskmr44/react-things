import React, { useState } from 'react'
import { AddTodo } from './AddTodo'
import { Todo } from './Todo'

export const Todos = () => {

    const [todos, setTodos] = useState([]);

    const onAdd = (newTodo) =>{
        console.log(newTodo)

        setTodos([
            ...todos,
            {
                id:todos.length+1,
                value:newTodo,
                complete:false
            }
        ])
    }

  return (
    <div>
        <h1>Todos App</h1>

        <AddTodo onAdd={onAdd} />

        {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
        ))}

    </div>
  )
}
