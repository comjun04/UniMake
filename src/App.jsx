import React, { useState } from 'react'
import { styled, defaultCss } from './styles/theme'

import { Header, SideNav, WorkPanel } from './components'

import './css/font.css'

const AppComp = styled('div', {
  display: 'flex',
  flexDirection: 'column'
})

const App = () => {
  defaultCss()

  const [navOpened, setNavOpened] = useState(false)

  return (
    <AppComp>
      <Header triggerNavOpen={() => setNavOpened(true)} />
      <SideNav
        opened={navOpened}
        triggerClose={() => setNavOpened(false)} 
      />
      <WorkPanel />
    </AppComp>
  )
}

export default App
