import React, { useState } from 'react'
import styled from 'styled-components'
import { Todo } from '../../types'

interface Props {
  todo: Todo
  updateStatus: (todo: number) => void
}

const Li = styled.li<{status?: boolean}>`
display: flex;
cursor: pointer;
width: fit-content;
align-items: center;
margin-bottom: 27px;
text-decoration: ${props => props.status ? 'line-through' : 'none' };
`

const Input = styled.input`
width: 24px;
height: 24px;
margin-right: 7px;
`

const TodoItem:React.FC<Props> = ({ todo, updateStatus }) => {
  const [completed, setCompleted] = useState(todo.status === 'completed')
  
  function toggleTodo() {
    setCompleted(!completed);
    updateStatus(todo.id)
  }

  return (
    <Li 
      onClick={toggleTodo}
      status={completed}
    >
      <Input
        onChange={() => {}}
        type="checkbox"
        checked={completed}
      />
      {todo.text}
    </Li>
  )
}

export default TodoItem
