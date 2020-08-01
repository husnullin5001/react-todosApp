import React, { useState, useRef, useEffect } from 'react'
import TodosList from './TodosList'
import uuid from 'react-uuid'

const LOC_STORAGE = 'todos_storage'

function App() {
  const [todos, setTodos] = useState([])
  const todoRef = useRef()

  useEffect(() => {
    const str = localStorage.getItem(LOC_STORAGE)
    if (str) {
      setTodos(JSON.parse(str))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LOC_STORAGE, JSON.stringify(todos))
  }, [todos])

  function handleAddTodo() {
    const name = todoRef.current.value
    if (name === '') return
    setTodos(prevTodos => [...prevTodos, { id: uuid(), name, complete: false }])
    todoRef.current.value = null
  }

  function toggleTodo(id) {
    console.log('toggleTodo-root')
  
    const modTodos = todos.map(todo => {
      if (todo.id === id) todo.complete = !todo.complete
      return todo
    })
    setTodos(modTodos)
  }

  function handleClearCompleted() {
    const modTodos = todos.filter(todo => !todo.complete)
    setTodos(modTodos)
  }

  return (
    <>
      <TodosList todos={todos} toggle={toggleTodo} />
      <input ref={todoRef} type="text" />
      <button onClick={handleAddTodo}>Add todo</button>
      <button onClick={handleClearCompleted}>Clear Completed Todos</button>
      <div>{todos.filter(todo => !todo.complete).length} left to do</div>
    </>
  )
}

export default App;
