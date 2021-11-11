import React from "react"
import { styled } from "../styles/theme"

import SoundList from './SoundList.jsx'

const PanelComp = styled('div', {
  margin: 0,
  padding: 16
})
const TitleBar = styled('div')
const TitleComp = styled('h3', {
  display: 'inline',
  margin: 0,
  fontSize: 24
})
const AddBtnComp = styled('div', {
  '& label': {
    backgroundColor: 'grey',

    display: 'block',
    margin: 0,
    padding: 8,
    float: 'right'
  }
})

const AddButton = () => {
  return (
    <AddBtnComp>
      <input
        id='soundManagerNewUpload'
        type='file'
        multiple
        accept='audio/*'
        hidden
      />
      <label
        for='soundManagerNewUpload'
      >
        + 추가
      </label>
    </AddBtnComp>
  )
}

const SoundManagerPanel = () => {
  return (
    <PanelComp>
      <TitleBar>
        <TitleComp>사운드 관리</TitleComp>
        <AddButton />
      </TitleBar>
      <SoundList />
    </PanelComp>
  )
}

export default SoundManagerPanel
