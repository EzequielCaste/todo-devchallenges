import React, {useState} from 'react'
import styled from 'styled-components'
import TabContainer from './TabContainer'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import { nanoid } from 'nanoid'

import {todos} from '../todos.json'

import {useLocalStorage} from '../hooks/useLocalStorage'
import { Todo as TodoType } from '../types'

const Header = styled.h1`
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  letter-spacing: -0.045em;
  text-transform: lowercase;
  margin-top: 32px;
`
const Todo = () => {
  const [activeTab, setActiveTab] = useState('all')
  const [tasks, setTasks] = useLocalStorage<TodoType[]>('todos', todos)

  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    setActiveTab(e.currentTarget.innerText.toLowerCase())
  }

  function updateStatus(todoId: number ) {
    const newTasks = tasks.map(todo => {
      if (todo.id === todoId) {
        return {
          ...todo,
          status: todo.status === 'completed' ? 'active' : 'completed'
        }
      } else {
        return todo
      }
    })
    setTasks(newTasks);
  }

  function addTodo(todo: string) {
    
    const newTodo = {
      id: nanoid(5),
      text: todo,
      status: 'active'
    }

    const newTasks = [...tasks]
    
    newTasks.unshift(newTodo)

    setTasks(newTasks)

  }

  let todosToShow: TodoType[] = [...tasks]

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
      <TodoForm active={activeTab} handleAddTodo={addTodo} />
      <TodoList 
        active={activeTab} 
        updateStatus={updateStatus} 
        todos={todosToShow}         
      />
    </>
  )
}

export default Todo
