import React from 'react';
import Tab from '../Tab'

import styled from 'styled-components';

const Container = styled.div`
width: 608px;
border-bottom: 1px solid #BDBDBD;
font-weight: 600;
font-size: 14px;
display: flex;
justify-content: space-around;
`

interface Props {
  handleClick: (e: React.MouseEvent<HTMLDivElement>) => void
  active: string
}

const TabContainer: React.FC<Props> = ({ handleClick, active }) => {
  return (
    <Container>
      <Tab handleClick={handleClick} active={active}>All</Tab>
      <Tab handleClick={handleClick} active={active}>Active</Tab>
      <Tab handleClick={handleClick} active={active}>Completed</Tab>
    </Container>
  )
}

export default TabContainer