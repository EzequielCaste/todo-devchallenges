import React, {useState} from 'react'
import styled from 'styled-components'
import TabContainer from './TabContainer'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import {todos} from '../todos.json'

import {useLocalStorage} from '../hooks/useLocalStorage'

const Header = styled.h1`
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  letter-spacing: -0.045em;
  text-transform: lowercase;
  margin-top: 32px;
`
interface Todo {
  id: number
  text: string
  status: string
}

const Todo = () => {
  const [activeTab, setActiveTab] = useState('all')
  const [tasks, setTasks] = useLocalStorage('todos', todos)

  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    console.log(e.currentTarget.innerText)
    setActiveTab(e.currentTarget.innerText.toLowerCase())
  }

  function toogleCompleted(todo: Todo) {
    //
  }

  let todosToShow: {
    id: number
    text: string
    status: string
  }[] = [...tasks]

  switch (activeTab) {
    case 'completed':
      todosToShow = tasks.filter((todo) => todo.status === 'completed')
      break
    case 'active':
      todosToShow = tasks.filter((todo) => todo.status === 'active')
    default:
      break
  }

  return (
    <>
      <Header>#Todo</Header>
      <TabContainer active={activeTab} handleClick={handleClick} />
      <TodoForm active={activeTab} />
      <TodoList todos={todosToShow} />
    </>
  )
}

export default Todo
