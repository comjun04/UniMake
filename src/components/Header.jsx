import React from 'react'
import { styled } from '../styles/theme'

const HeaderComp = styled('div', {
  width: '100%',
  height: 50,
  backgroundColor: 'cyan'
})

const NavOpenBtn = styled('button', {
  width: 50,
  height: 50,
  border: 0
})

const Header = ({ triggerNavOpen }) => {
  return (
    <HeaderComp>
      <NavOpenBtn onClick={triggerNavOpen}>■</NavOpenBtn>
    </HeaderComp>
  )
}

export default Header
