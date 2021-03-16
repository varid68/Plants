import React, { useState, createContext } from 'react'
import { addRemoveListenerBack } from 'services/common'

export const HomeContext = createContext()

function HomeContextProvider(props) {
  const [list, setList] = useState([
    {
      key: 'Top',
      selected: true,
      content: [
        {
          name: 'Dracaena plant',
          price: 50.99,
          favorited: false
        },
        {
          name: 'Dragon fly',
          price: 10.99,
          favorited: false
        },
        {
          name: 'Lily plant',
          price: 30.99,
          favorited: false
        },
      ]
    },
    {
      key: 'Indoor',
      selected: false,
      content: [
        {
          name: 'Adams Needle',
          price: 20.99,
          favorited: false
        },
        {
          name: 'Alberta Spruce',
          price: 10.99,
          favorited: false
        },
        {
          name: 'Ambassador Allium',
          price: 10.90,
          favorited: false
        },
      ]
    },
    {
      key: 'Outdoor',
      selected: false,
      content: [
        {
          name: 'Aloe Vera',
          price: 20.99,
          favorited: false
        },
        {
          name: 'Alyssum Sweet',
          price: 10.99,
          favorited: false
        },
        {
          name: 'Adonis Allium',
          price: 10.90,
          favorited: false
        },
      ]
    },
    {
      key: 'Garden',
      selected: false,
      content: [
        {
          name: 'Dracaena plant',
          price: 50.99,
          favorited: false
        },
        {
          name: 'Dragon fly',
          price: 10.99,
          favorited: false
        },
        {
          name: 'Lily plant',
          price: 30.99,
          favorited: false
        },
      ]
    },
    {
      key: 'Salmonella',
      selected: false,
      content: [
        {
          name: 'Dracaena plant',
          price: 50.99,
          favorited: false
        },
        {
          name: 'Dragon fly',
          price: 10.99,
          favorited: false
        },
        {
          name: 'Lily plant',
          price: 30.99,
          favorited: false
        },
      ]
    },
  ])
  const [refresh, setRefresh] = useState(false)

  addRemoveListenerBack(props)

  const _setSelected = (key) => {
    let _list = [...list]

    _list.map(item => item.selected = item.key == key ? true : false)
    setList(list)
    setRefresh(!refresh)
  }

  const _setFavorited = (itemFromView, key) => {
    let clone = [...list]

    clone.filter(e => e.key == key).map(e => {
      e.content.map(item => {
        if (item.name == itemFromView.name) item.favorited = !item.favorited
      })
    })

    setList(clone)
  }

  return (
    <HomeContext.Provider
      value={{
        list,
        refresh,
        _setSelected,
        _setFavorited
      }}>
      {props.children}
    </HomeContext.Provider>
  )
}

export default HomeContextProvider
