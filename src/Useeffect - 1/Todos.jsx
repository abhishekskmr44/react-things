import React from 'react'
import { AddTodo } from './AddTodo'
import { Todo } from './Todo'

export const Todos = ({todos}) => {

  return (
    <div>
        <h1>Todos</h1>

        {Todos.map((todo => 
        <Todo todo={Todos} />
        ))}
        
        <AddTodo />
    </div>
  )
}
