import React from 'react'
import DetailView from './DetailView'
import DetailContextProvider from './DetailContext'


const DetailScreen = ({ navigation, route }) => {
  return (
    <DetailContextProvider navigation={navigation} route={route}>
      <DetailView navigation={navigation} />
    </DetailContextProvider>
  )
}

export default DetailScreen
