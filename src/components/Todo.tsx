import React, { useState } from 'react';
import styled from 'styled-components';
import TabContainer from './TabContainer';

const Header = styled.h1`
font-weight: 700;
font-size: 36px;
line-height: 42px;
text-align: center;
letter-spacing: -0.045em;
text-transform: lowercase;
margin-top: 32px;
`


const Todo = () => {
  const [activeTab, setActiveTab] = useState('all')

  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    console.log(e.currentTarget.innerText)
    setActiveTab(e.currentTarget.innerText.toLowerCase())
  }

  return (
    <>
      <Header>#Todo</Header>
      <TabContainer active={activeTab} handleClick={handleClick} />

    </>
  )
}

export default Todo