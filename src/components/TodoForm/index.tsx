import {SetStateAction, useState} from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding-top: 18px;
`

const StyledInput = styled.input`
  width: 476px;
  left: 414px;
  top: 184px;
  border: 1px solid #bdbdbd;
  border-radius: 12px;
  padding: 20px 12px;
  font-weight: 400;
  font-size: 14px;
  color: #828282;
  margin-right: 25px;
`

const StyledButton = styled.button`
  background: #2f80ed;
  box-shadow: 0px 2px 6px rgba(127, 177, 243, 0.4);
  border-radius: 12px;
  padding: 20px 40px;
  color: #fff;
  border: 0;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
`
interface Props {
  active: string
  handleAddTodo: (todo: string) => void
}

interface Event {
  target: {value: SetStateAction<string>}
}

const TodoForm: React.FC<Props> = ({active, handleAddTodo}) => {
  const [inputValue, setInputValue] = useState('')

  function handleInputChange(e: Event) {
    setInputValue(e.target.value)
  }

  function handleClick() {
    if (inputValue === '') return null
    handleAddTodo(inputValue)
    setInputValue('')
  }

  if (active !== 'completed') {
    return (
      <Container>
        <StyledInput
          type="text"
          placeholder="add details"
          value={inputValue}
          onChange={handleInputChange}
        />
        <StyledButton onClick={handleClick}>add</StyledButton>
      </Container>
    )
  } else {
    return null
  }
}

export default TodoForm
