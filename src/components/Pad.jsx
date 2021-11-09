import React from 'react'
import { styled } from '../styles/theme'

import PadButton from './PadButton.jsx'

const PadElement = styled('div', {
  backgroundColor: 'lightgreen',

  padding: 10
})

const Pad = ({ onButtonClick }) => {
  const buttons = []
  for (let i = 1; i <= 64; i++) {
    buttons.push(
      <PadButton
        id={i}
        onButtonClick={onButtonClick}
      />
    )
  }

  return (
    <PadElement>
      {buttons}
      temporary text
    </PadElement>
  )
}

export default Pad
