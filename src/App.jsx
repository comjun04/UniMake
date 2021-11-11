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
  const [activeNavItem, setActiveNavItem] = useState('pad')

  return (
    <AppComp>
      <Header triggerNavOpen={() => setNavOpened(true)} />
      <SideNav
        opened={navOpened}
        triggerClose={() => setNavOpened(false)}
        activeItem={activeNavItem}
        setActiveItem={setActiveNavItem}
      />
      <WorkPanel
        page={activeNavItem}
      />
    </AppComp>
  )
}

export default App
