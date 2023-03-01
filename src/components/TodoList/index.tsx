import styled from 'styled-components'
import {Todo} from '../../types'
import TodoItem from '../TodoItem'

const Container = styled.div`
  margin-top: 33px;
`
const Ul = styled.ul<{active: string}>`
  list-style: none;
  ${(props) =>
    props.active === 'completed' &&
    `
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  `}
`

interface Props {
  todos: Todo[]
  updateStatus: (todo: number | string) => void
  active: string
  deleteTodo: (id: string | number) => void
}

const TodoList: React.FC<Props> = ({
  todos,
  updateStatus,
  active: activeTab,
  deleteTodo,
}) => {
  return (
    <Container>
      <Ul active={activeTab}>
        {todos.map((todo) => (
          <TodoItem
            active={activeTab}
            updateStatus={updateStatus}
            deleteTodo={deleteTodo}
            key={todo.id}
            todo={todo}
          />
        ))}
      </Ul>
    </Container>
  )
}

export default TodoList
