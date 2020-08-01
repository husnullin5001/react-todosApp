import React from 'react'
import Todo from './Todo'

export default function TodosList({ todos, toggle }) {
  return todos.map(todo => {
    return <Todo key={todo.id} todo={todo} toggle={toggle} />
  })
}
