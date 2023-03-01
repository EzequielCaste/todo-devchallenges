import styled from 'styled-components'
import { Todo } from '../../types'
import TodoItem from '../TodoItem'

const Container = styled.div`
  margin-top: 33px;
`
const Ul = styled.ul<{active: string}>`
list-style: none;
${props => props.active === 'completed' && `
display: flex;
justify-content: space-between;
align.items: center;
`}
`

interface Props {
  todos: Todo[]
  updateStatus: (todo: number) => void
  active: string
}


const TodoList:React.FC<Props>= ({ todos, updateStatus, active: activeTab }) => {
  return (
    <Container>
      <Ul active={activeTab}>
        {
          todos.map((todo) => (
            <TodoItem active={activeTab} updateStatus={updateStatus} key={todo.id} todo={todo} />
          ))
        }
      </Ul>
    </Container>
  )
}

export default TodoList
