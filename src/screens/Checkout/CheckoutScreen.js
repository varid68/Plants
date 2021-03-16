import React from 'react'
import CheckoutView from './CheckoutView'
import CheckoutContextProvider from './CheckoutContext'


const CheckoutScreen = ({ navigation }) => {
  return (
    <CheckoutContextProvider navigation={navigation}>
      <CheckoutView navigation={navigation} />
    </CheckoutContextProvider>
  )
}

export default CheckoutScreen
