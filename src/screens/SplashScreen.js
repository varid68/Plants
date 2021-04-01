import React, { useEffect } from 'react'
import { View, Text, StatusBar, Image, StyleSheet } from 'react-native'
import { StackActions } from '@react-navigation/native'
import { DEEP, WHITE } from 'constants/Colors'
import { ITEMS_CENTER } from 'constants/Styles'
import { getItemStorage } from 'actions/storage'


const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(StackActions.replace('Detail'))
    }, 1000)
  }, [])


  return (
    <View style={styles.wrapper}>
      <StatusBar hidden={false} backgroundColor={DEEP} />
      <Image
        style={styles.img}
        source={require('../assets/images/splashscreen.png')} />
      <Text style={styles.simovie}>Si Plants</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    ...ITEMS_CENTER,
    backgroundColor: DEEP,
    flex: 1
  },
  img: {
    resizeMode: 'contain',
    height: 300,
    width: 300
  },
  simovie: {
    fontFamily: 'Lobster-Regular',
    textAlign: 'center',
    fontSize: 40,
    marginTop: 10
  }
})

SplashScreen.navigationOptions = {
  header: null
}

export default SplashScreen
