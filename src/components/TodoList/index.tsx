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
}


const TodoList:React.FC<Props>= ({ todos }) => {
  return (
    <Container>
      <Ul>
        {
          todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))
        }
      </Ul>
    </Container>
  )
}

export default TodoList
