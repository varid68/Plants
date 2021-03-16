import React, { useState, useEffect, createContext } from 'react'
import { showToast, addRemoveListenerBack } from 'services/common'
import { getListData } from 'actions/axios'

export const DetailContext = createContext()

function DetailContextProvider(props) {
  const [items, setItems] = useState({
    list: [], isLoadMore: true, offset: 0, count: 0, order: 'desc'
  })
  const [loading, setLoading] = useState({
    initial: true,
    refreshing: false
  })

  useEffect(() => {

  }, [])

  addRemoveListenerBack(props)

  const _fetchLoadMore = (param = {}) => {
    let clone = { ...items }
    const params = {
      ...param,
      limit: 7,
      offset: clone['offset'] + 7,
      sortby: 'id_surat',
      order: clone['order']
    }

    // DISABLE LOADING FOOTER END ITEM
    if (clone['list'].length === clone['count']) {
      setItems({ ...items, isLoadMore: false })
      return false
    }

    getListData('/surat')
      .then(res => {
        setItems({
          ...items,
          list: res.payload !== null ? clone['list'].concat(res.payload) : [],
          offset: res.offset,
          count: res.count,
          isLoadMore: false
        })
    })
    .catch(e => showToast(e.description))
  }

  // 
  const _fetchWithParam = (param = {}, loader) => {
    const params = {
      ...param,
      limit: 7,
      offset: 0,
      sortby: 'id_surat',
      orderby: param.order ? param.order : 'desc'
    }

    setLoading({ ...loading, [loader]: true })

    getListData('/surat')
      .then(res => {
        setItems({
          ...items,
          list: res.payload !== null ? [].concat(res.payload) : [],
          offset: 0,
          count: res.count,
          isLoadMore: true,
          order: param.order ? param.order : 'asc'
        })
      setLoading({ ...loading, [loader]: false })
    })
    .catch(e => showToast(e.description))
  }

  return (
    <DetailContext.Provider 
      value={{
        items,
        loading
      }}>
      {props.children}
    </DetailContext.Provider>
  )
}

export default DetailContextProvider
