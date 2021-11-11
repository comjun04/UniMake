import React, { useState } from 'react'
import { styled } from '../styles/theme'

const PanelElement = styled('div', {
  backgroundColor: 'teal',

  width: '100%'
  // height: '20%' // TODO: this will be flex'ed
})

const ButtonElement = styled('button', {
  backgroundColor: '#c0ffee',

  border: 0,
  width: '33.33%',
  padding: 16,

  variants: {
    active: {
      true: {
        backgroundColor: '#6bedd4'
      }
    }
  }
})

const ModeButton = ({ name, active, handleClick }) => {
  return (
    <ButtonElement
      active={active}
      onClick={() => handleClick(name)}
    >
      {name}
    </ButtonElement>
  )
}

const ModeSelectPanel = ({ onModeChange }) => {
  const names = ['keySound', 'keyLED', 'autoplay']
  const [activeBtn, setActiveBtn] = useState(names[0])

  const btnClicked = (name) => {
    setActiveBtn(name)
    onModeChange(name)
  }

  const buttons = names.map(name => (
    <ModeButton
      name={name}
      key={name.toString()}
      active={activeBtn === name}
      handleClick={btnClicked}
    />
  ))

  return (
    <>
      {buttons}
    </>
  )
}

export default ModeSelectPanel
