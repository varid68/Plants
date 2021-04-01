import React, { useState, useEffect, createContext } from 'react'
import { showToast, addRemoveListenerBack } from 'services/common'
import { getListData } from 'actions/axios'

export const DetailContext = createContext()

function DetailContextProvider(props) {
  const [counter, setCounter] = useState(1)
  const [text, setText] = useState('Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio inventore itaque sunt corporis illum, sequi dolorem quasi cum non, ipsam exercitationem consequuntur. Dolore modi nostrum provident doloremque eaque corporis quia!, Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptates repellendus? Et, tempora excepturi nesciunt libero, unde fugit qui vitae necessitatibus quo, cumque nobis? Quasi at illum vel maxime sapiente.')
  const [collapse, setCollapse] = useState(false)
  const [price, setPrice] = useState({
    base: 50.99,
    result: 50.99
  })

  useEffect(() => {
    counter > 0 && setPrice({ ...price, result: price.base * counter })
  }, [counter])

  addRemoveListenerBack(props)

  const _setCounter = (flag) => flag == 'plus' ? setCounter(counter + 1) : setCounter(counter - 1)

  const _setCollapse = () => setCollapse(!collapse)

  return (
    <DetailContext.Provider
      value={{
        counter,
        text,
        collapse,
        price,
        _setCounter,
        _setCollapse
      }}>
      {props.children}
    </DetailContext.Provider>
  )
}

export default DetailContextProvider
