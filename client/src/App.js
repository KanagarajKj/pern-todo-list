import React from 'react'
import InputTodo from './components/InputTodo'
import ListTodo from './components/ListTodo'
import './index.css'

const App = () => {
  return (
    <section className='todo-app'>
    <InputTodo/>
    <ListTodo/>
    </section>
  )
}

export default App