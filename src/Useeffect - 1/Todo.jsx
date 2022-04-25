import React from 'react'

export const Todo = ({todo}) => {
  return (
    <div style = {{border: '2px solid black', margin:'5px'}}>

        {todo.value}
        
    </div>
  )
}
