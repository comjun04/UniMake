import React, { useState } from 'react'
import { styled } from '../styles/theme'

import Pad from './Pad.jsx'
import ModeSelectPanel from './ModeSelectPanel.jsx'
import PropertyEditPanel from './PropertyEditPanel.jsx'

import SoundManagerPanel from './SoundManagerPanel.jsx'

const PanelElement = styled('div', {
    flexShrink: 0,
  })

const WorkPanel = ({ page }) => {
  

  const [mode, setMode] = useState('keySound')
  const [selectedBtn, setSelectedBtn] = useState(0)
  const [showPropertyPanel, setShowPropertyPanel] = useState(false)

  const changeMode = (mode) => {
    setMode(mode)
  }
  const showProperties = (buttonId) => {
    setSelectedBtn(buttonId)
    setShowPropertyPanel(true)
  }
  const hideProperties = () => {
    setShowPropertyPanel(false)
  }

  if (page === 'pad') {
    return (
      <PanelElement>
        <Pad onButtonClick={showProperties} />
        <ModeSelectPanel selected={mode} onModeChange={changeMode} />
        <PropertyEditPanel
          mode={mode}
          button={selectedBtn}
          show={showPropertyPanel}
          triggerHide={hideProperties}
        />
      </PanelElement>
    )
  } else if (page === 'sounds') {
    return (
      <SoundManagerPanel />
    )
  }
}

export default WorkPanel
