import React from 'react'

export default function Todo({ todo, toggle }) {
  return (
    <div>
      <label>
        <input type="checkbox" checked={todo.complete} onChange={() => toggle(todo.id)} />
        {todo.name}
      </label>      
    </div>
  )
}
