import React from 'react'
import { defaultCss } from './styles/theme'

import Header from './components/Header.jsx'
import Pad from './components/Pad.jsx'
import ModeSelectPanel from './components/ModeSelectPanel'

import './css/font.css'

const App = () => {
  defaultCss()

  return (
    <>
      <Header />
      <Pad />
      <ModeSelectPanel />
    </>
  )
}

export default App
