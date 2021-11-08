import React from 'react'
import { styled } from '../styles/theme'

const HeaderElement = styled('div', {
  width: '100%',
  height: 50,
  backgroundColor: 'cyan'
})

const Header = () => {
  return (
    <HeaderElement />
  )
}

export default Header
