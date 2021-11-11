import React from "react"
import { styled } from "../styles/theme"

const SoundManagerPanel = () => {
  const PanelComp = styled('div', {
    margin: 0,
    padding: 16
  })
  const TitleComp = styled('h3', {
    margin: 0
  })

  return (
    <PanelComp>
      <TitleComp>Sound Manager</TitleComp>
    </PanelComp>
  )
}

export default SoundManagerPanel