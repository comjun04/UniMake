import React from 'react'
import { styled } from '../styles/theme'

const PanelElement = styled('div', {
  backgroundColor: '#cfcfcf',

  position: 'fixed',
  width: '90%',
  height: '100%',
  margin: 0,
  padding: '16px 5%',
  transition: 'top .3s'
})

const Title = styled('h3', {
  margin: 8,
  fontSize: 24,
  textDecoration: 'none'
})

const CloseBtn = styled('a', {
  backgroundColor: 'red',

  position: 'absolute',
  top: 10,
  right: 10,
  padding: '5px 10px',
  fontSize: 25,
  textDecoration: 'none'
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
        top: show ? 0 : '100%'
      }}
    >
      <Title>{title} 편집</Title>
      <CloseBtn onClick={triggerHide}>&times;</CloseBtn>
      {element}
    </PanelElement>
  )
}

export default PropertyEditPanel
