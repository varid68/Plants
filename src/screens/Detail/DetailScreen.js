import React from 'react'
import DetailView from './DetailView'
import DetailContextProvider from './DetailContext'


const DetailScreen = ({ navigation }) => {
  return (
    <DetailContextProvider navigation={navigation}>
      <DetailView navigation={navigation} />
    </DetailContextProvider>
  )
}

export default DetailScreen
