import styled from 'styled-components';

const Container = styled.div`
padding-top: 18px;
`

const StyledInput = styled.input`
width: 476px;
left: 414px;
top: 184px;
border: 1px solid #BDBDBD;
border-radius: 12px;
padding: 20px 12px;
font-weight: 400;
font-size: 14px;
color: #828282;
margin-right: 25px;
`

const StyledButton = styled.button`
background: #2F80ED;
box-shadow: 0px 2px 6px rgba(127, 177, 243, 0.4);
border-radius: 12px;
padding: 20px 40px;
color: #FFF;
border: 0;
font-weight: 600;
font-size: 14px;
`
interface Props {
  active: string
}

const TodoForm:React.FC<Props> = ({ active }) => {
  if(active !== 'completed') {
    return (
      <Container>
        <StyledInput type="text" 
        placeholder='add details' />
        <StyledButton>add</StyledButton>
      </Container>
    )
  } else {
    return null
  }
  
}

export default TodoForm