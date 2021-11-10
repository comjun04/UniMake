import React from 'react'
import { styled } from '../styles/theme'

const SideNavComp = styled('div', {
  backgroundColor: 'white',

  position: 'fixed',
  width: 0,
  height: '100%',
  top: 0,
  left: 0,
  zIndex: 10,

  overflowX: 'hidden',
  transition: 'width .3s'
})

// TODO: refactor this to one button
const CloseBtn = styled('a', {
  backgroundColor: 'red',

  position: 'absolute',
  top: 10,
  right: 10,
  padding: '10px 16px',

  fontSize: 24
})

const SideNav = ({ opened, triggerClose }) => {
  return (
    <SideNavComp
      css={{
        width: opened ? '75%' : 0
      }}
    >
      <CloseBtn onClick={triggerClose}>&times;</CloseBtn>
      Hello
    </SideNavComp>
  )
}

export default SideNav
