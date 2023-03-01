import React, {useState} from 'react'
import styled from 'styled-components'
import {Todo} from '../../types'

const Li = styled.li`
  display: flex;
  cursor: pointer;
  width: fit-content;
  align-items: center;
  margin-bottom: 27px;
`

const LiContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Input = styled.input`
  width: 24px;
  height: 24px;
  margin-right: 7px;
`

const Icon = styled.span`
  cursor: pointer;
`

const Span = styled.span<{status?: boolean}>`
  ${(props) =>
    props.status &&
    `
  text-decoration: line-through;
`}
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
    if (window.confirm('Delete task?')) {
      console.log('yes')
      deleteTodo(todo.id)
    } else {
      console.log('no')
    }
  }

  const DeleteIcon: () => JSX.Element | null = () => {
    if (completed && active === 'completed') {
      return <Icon onClick={handleDeleteTodo}>🗑</Icon>
    } else {
      return null
    }
  }

  return (
    <LiContainer>
      <Li onClick={toggleTodo}>
        <Input onChange={() => {}} type="checkbox" checked={completed} />
        <Span status={completed}>{todo.text}</Span>
      </Li>
      <DeleteIcon />
    </LiContainer>
  )
}

export default TodoItem
