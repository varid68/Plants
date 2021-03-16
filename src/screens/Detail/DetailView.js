import React, { useContext } from 'react'
import { View } from 'react-native'
import Text from 'components/Text'
import SafeAreaView from 'react-native-safe-area-context'

import { DetailContext } from './DetailContext'


const DetailView = ({ navigation }) => {
  const value = useContext(DetailContext)

  return (
    <Text>INI PAGE Detail</Text>
  )
}

export default DetailView
