import React from 'react'
import { styled } from '../styles/theme'

const SideNavComp = styled('div', {
  backgroundColor: 'white',

  position: 'fixed',
  width: 0,
  height: '100%',
  top: 0,
  left: 0,
  zIndex: 10,

  whiteSpace: 'nowrap',

  overflowX: 'hidden',
  transition: 'width .3s'
})

// TODO: refactor this to one button
const CloseBtn = styled('a', {
  backgroundColor: 'red',

  position: 'absolute',
  top: 10,
  right: 10,
  padding: '10px 16px',

  fontSize: 24
})
const TitleComp = styled('div', {
  backgroundColor: 'yellow',

  width: '100%',
  height: 150,

  fontSize: 20,
  textAlign: 'center',
})
const ListComp = styled('ul', {
  listStyleType: 'none',

  margin: 0,
  padding: 0,
})

const ListItemComp = styled('li', {
  backgroundColor: 'lightgrey',

  margin: 0,
  padding: 16,
})
const ListItem = ({ text, active, setActiveItem }) => {
  return (
    <ListItemComp
      css={{
        backgroundColor: active ? 'lightblue' : 'lightgrey'
      }}
      onClick={setActiveItem}
    >
      {text}
    </ListItemComp>
  )
}

const SideNav = ({ opened, triggerClose, activeItem, setActiveItem }) => {
  const items = [
    {
      id: 'pad',
      text: '패드'
    },
    {
      id: 'sounds',
      text: '소리 관리'
    }
  ]
  const listItems = items.map((item) => 
    <ListItem
      key={item.id}
      text={item.text}
      active={activeItem === item.id}
      setActiveItem={() => setActiveItem(item.id)}
    />
  )

  return (
    <SideNavComp
      css={{
        width: opened ? '75%' : 0
      }}
    >
      <TitleComp>Logo area</TitleComp>
      <CloseBtn onClick={triggerClose}>&times;</CloseBtn>
      <ListComp>
        {listItems}
      </ListComp>
    </SideNavComp>
  )
}

export default SideNav
