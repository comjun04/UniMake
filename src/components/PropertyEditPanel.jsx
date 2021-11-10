import React from 'react'
import { styled } from '../styles/theme'

const PanelElement = styled('div', {
  backgroundColor: '#cfcfcf',

  position: 'fixed',
  width: '100%',
  height: '100%',
  padding: 16,
  transition: 'top .4s'
})

const Title = styled('h3', {
  margin: 8,
  fontSize: 24,
  textDecoration: 'none'
})

const CloseBtn = styled('a', {
  position: 'absolute',
  top: 10,
  right: 10,
  textDecoration: 'none'
})

const PropertyEditPanel = ({ mode, button, show }) => {
  let element

  const title = mode

  return (
    <PanelElement
      css={{
        top: show ? 0 : '100%'
      }}
    >
      <Title>{title} 편집</Title>
      {element}
    </PanelElement>
  )
}

export default PropertyEditPanel
