import React from 'react'
import { styled, defaultCss } from './styles/theme'

import { Header, WorkPanel } from './components'

import './css/font.css'

const AppElement = styled('div', {
  display: 'flex',
  flexDirection: 'column'
})

const App = () => {
  defaultCss()

  return (
    <AppElement>
      <Header />
      <WorkPanel />
    </AppElement>
  )
}

export default App
