import React from 'react'
import { styled } from '../styles/theme'

const PanelElement = styled('div', {
  backgroundColor: '#909090',

  position: 'absolute',
  width: '100%',
  height: '100%',
  transition: 'top .4s'
})

const PropertyEditPanel = ({ mode, button, show }) => {
  let element
  if (mode === 'keySound') {
    element = <span>Hello</span>
  }

  return (
    <PanelElement
      css={{
        top: show ? 0 : '100%'
      }}
    >
      {element}
    </PanelElement>
  )
}

export default PropertyEditPanel
