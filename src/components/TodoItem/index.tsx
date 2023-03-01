import React, { useState } from 'react'
import styled from 'styled-components'
import { Todo } from '../../types'

interface Props {
  todo: Todo
  updateStatus: (todo: number) => void
  active: string
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

const DeleteIcon = styled.span`
cursor: pointer;
`

const TodoItem:React.FC<Props> = ({ todo, updateStatus, active }) => {
  const [completed, setCompleted] = useState(todo.status === 'completed')
  
  function toggleTodo() {
    setCompleted(!completed);
    updateStatus(todo.id)
  }

  const showDeleteIcon = completed && active === 'completed'

  return (
    <>
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
      {showDeleteIcon && <DeleteIcon>🗑</DeleteIcon>}
    </>

  )
}

export default TodoItem
