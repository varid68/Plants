import React, { useContext } from 'react'
import { View } from 'react-native'
import Text from 'components/Text'
import SafeAreaView from 'react-native-safe-area-context'

import { CheckoutContext } from './CheckoutContext'


const CheckoutView = ({ navigation }) => {
  const value = useContext(CheckoutContext)

  return (
    <Text>INI PAGE Checkout</Text>
  )
}

export default CheckoutView
