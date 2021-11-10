import React, { useState } from 'react'
import { styled } from '../styles/theme'

import Pad from './Pad.jsx'
import ModeSelectPanel from './ModeSelectPanel.jsx'
import PropertyEditPanel from './PropertyEditPanel.jsx'

const PanelElement = styled('div', {
  flexShrink: 0,
})

const WorkPanel = () => {
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

  return (
    <PanelElement>
      <Pad onButtonClick={showProperties} />
      <ModeSelectPanel onModeChange={changeMode} />
      <PropertyEditPanel
        mode={mode}
        button={selectedBtn}
        show={showPropertyPanel}
      />
    </PanelElement>
  )
}

export default WorkPanel
