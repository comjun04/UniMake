import React from 'react'
import { styled } from '../styles/theme'

const PadButtonElement = styled('button', {
  backgroundColor: 'lightblue',

  border: 0,
  float: 'left',
  width: '11.5%',
  paddingBottom: '11.5%',
  margin: '0.5%'
})

const PadButton = ({ id }) => {
  return (
    <PadButtonElement />
  )
}

export default PadButton
