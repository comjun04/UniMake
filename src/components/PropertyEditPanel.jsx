import React from 'react'
import { styled } from '../styles/theme'

const PanelElement = styled('div', {
  backgroundColor: '#cfcfcf',

  position: 'fixed', // NOTE: mobile only
  width: '90%', // NOTE: mobile only
  height: '100%', // NOTE: mobily only
  margin: 0,
  padding: '16px 5%',
  transition: 'top .3s', // NOTE: mobile only

  zIndex: 20 // NOTE: mobile only
})

const Title = styled('h3', {
  margin: 8,
  fontSize: 24,
})

// NOTE: mobile only
const CloseBtn = styled('a', {
  backgroundColor: 'red',

  position: 'absolute',
  top: 10,
  right: 10,
  padding: '10px 16px',

  fontSize: 24,
})

const PropertyEditPanel = ({
  mode,
  button,
  show,
  triggerHide
}) => {
  let element

  const title = mode

  return (
    <PanelElement
      css={{
        top: show ? 0 : '100%' // NOTE: mobile only
      }}
    >
      <Title>{title} 편집</Title>
      <CloseBtn onClick={triggerHide}>&times;</CloseBtn>
      {element}
      <span>{button}</span>
    </PanelElement>
  )
}

export default PropertyEditPanel
