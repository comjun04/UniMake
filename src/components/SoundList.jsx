import React from 'react'
import { styled } from '../styles/theme'

const List = styled('ul', {
  width: '100%',
  padding: 0,

  listStyleType: 'none'
})
const ListItem = styled('li', {
  backgroundColor: 'orange',

  display: 'flex',
  minHeight: 50,
  margin: 0,

  flexDirection: 'row',
})

const ItemSongInfo = styled('div', {
  margin: 4,

  flexGrow: 1
})
const ItemSongName = styled('h5', {
  margin: 0,

  fontSize: 20
})
const ItemSongFilename = styled('span', {
  color: 'grey'
})
const ItemSongPlayBtn = styled('button', {
  width: 50
})
const ItemSongEditBtn = styled('button', {
  width: 50
})

const SoundListItem = () => {
  return (
    <ListItem>
      <ItemSongInfo>
        <ItemSongName>Main1</ItemSongName>
        <ItemSongFilename>one.wav</ItemSongFilename>
      </ItemSongInfo>
      <ItemSongPlayBtn>→</ItemSongPlayBtn>
      <ItemSongEditBtn>★</ItemSongEditBtn>
    </ListItem>
  )
}

const SoundList = () => {
  return (
    <List>
      <SoundListItem />
    </List>
  )
}

export default SoundList
