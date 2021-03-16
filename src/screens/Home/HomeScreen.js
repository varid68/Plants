import React from 'react'
import HomeView from './HomeView'
import HomeContextProvider from './HomeContext'


const HomeScreen = ({ navigation }) => {
  return (
    <HomeContextProvider navigation={navigation}>
      <HomeView navigation={navigation} />
    </HomeContextProvider>
  )
}

export default HomeScreen
