import styled from 'styled-components'
import { Todo } from '../../types'
import TodoItem from '../TodoItem'

const Container = styled.div`
  margin-top: 33px;
`
const Ul = styled.ul`
list-style: none;
`

interface Props {
  todos: Todo[]
  updateStatus: (todo: number) => void
}


const TodoList:React.FC<Props>= ({ todos, updateStatus }) => {
  return (
    <Container>
      <Ul>
        {
          todos.map((todo) => (
            <TodoItem updateStatus={updateStatus} key={todo.id} todo={todo} />
          ))
        }
      </Ul>
    </Container>
  )
}

export default TodoList
