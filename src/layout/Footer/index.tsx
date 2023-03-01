
import styled from 'styled-components'

const StyledFooter = styled.footer`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #828282;
  display: flex;
  align-content: flex-end;  
  flex-wrap: wrap;
  height: inherit;
  padding-bottom: 8px;
  justify-content: center;
`

const Span = styled.span`
margin-right: 5px;
`
const Anchor = styled.a`
margin-right: 5px;
font-weight: 700;
`

export default function Footer() {
  return (
    <StyledFooter>
      <Span>created by {' '}</Span>
      <Anchor href="https://devchallenges.io/portfolio/EzequielCaste" target='_blank'>
        EzequielCaste
      </Anchor> - devChallenges.io
    </StyledFooter>
  )
}