import React, {useState} from 'react'
import styled from 'styled-components'
import {Todo} from '../../types'

const Li = styled.li<{status?: boolean}>`
  display: flex;
  cursor: pointer;
  width: fit-content;
  align-items: center;
  margin-bottom: 27px;
  text-decoration: ${(props) => (props.status ? 'line-through' : 'none')};
`

const Input = styled.input`
  width: 24px;
  height: 24px;
  margin-right: 7px;
`

const Icon = styled.span`
  cursor: pointer;
`

interface Props {
  todo: Todo
  updateStatus: (todo: number | string) => void
  active: string
  deleteTodo: (id: string | number) => void
}

const TodoItem: React.FC<Props> = ({
  todo,
  updateStatus,
  active,
  deleteTodo,
}) => {
  const [completed, setCompleted] = useState(todo.status === 'completed')

  function toggleTodo() {
    setCompleted(!completed)
    updateStatus(todo.id)
  }

  function handleDeleteTodo() {
    deleteTodo(todo.id)
  }

  const DeleteIcon: () => JSX.Element | null = () => {
    if (completed && active === 'completed') {
      return <Icon onClick={handleDeleteTodo}>🗑</Icon>
    } else {
      return null
    }
  }

  return (
    <>
      <Li onClick={toggleTodo} status={completed}>
        <Input onChange={() => {}} type="checkbox" checked={completed} />
        {todo.text}
      </Li>
      <DeleteIcon />
    </>
  )
}

export default TodoItem
