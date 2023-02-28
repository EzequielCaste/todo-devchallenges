import React from 'react';
import styled from 'styled-components';

const StyledTab = styled.div<{ active?: boolean }>`
text-align: center;
padding-top: 58px;
width: 89px;

${props => props.active && `
&:after {
  content: '';
  
  border-bottom: 4px solid #2F80ED;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  display: block;
  margin-top: 15px;
}
`}


`

interface Props {
  handleClick: (e: React.MouseEvent<HTMLDivElement>) => void
  children: string
  active: string
}

const Tab: React.FC<Props> = ({ children, handleClick, active }) => {
  return (
    <StyledTab active={active === children.toLowerCase()} onClick={handleClick}>{children}</StyledTab>
  )
}

export default Tab