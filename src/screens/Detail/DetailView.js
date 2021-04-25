import React, { Fragment, useContext } from 'react'
import { ScrollView, View, Image, TouchableOpacity, StatusBar } from 'react-native'
import Text from 'components/Text'
import Icon from 'react-native-vector-icons/AntDesign'
import styles from './DetailStyles'
import { BLACK, GRAY, GREEN, PANACHE } from 'constants/Colors'
import { HP50 } from 'constants/Sizes'

import { DetailContext } from './DetailContext'
import { WHITE } from 'constants/Colors'


const DetailView = ({ navigation }) => {
  const value = useContext(DetailContext)

  return (
    <Fragment>
      <StatusBar hidden={false} backgroundColor={GREEN} />
      <ScrollView>
        <View style={styles.headerWrap}>
          <Image style={{
            position: 'absolute',
            top: 40,
            left: -140,
            resizeMode: 'contain',
            height: HP50 - 30,
            zIndex: 99
          }} source={require('images/PngItem.png')} />

          <View style={{ paddingLeft: 20 }}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginBottom: 20 }}>
              <Icon
                name='arrowleft'
                color={WHITE}
                size={30} />
            </TouchableOpacity>
            <Text
              color={WHITE}
              weight={700}
              size='large'>{value.name}</Text>
            <View style={{ marginVertical: 20 }}>
              <Text
                color={WHITE}
                weight={500}>Day (estimation):</Text>
              <Text
                color={WHITE}
                weight={700}
                size='large'>24</Text>
            </View>
            <View>
              <Text
                color={WHITE}
                weight={500}>Height (incl pot):</Text>
              <Text
                color={WHITE}
                weight={700}
                size='large'>4.8’’</Text>
            </View>
            <View style={{ marginVertical: 20 }}>
              <Text
                color={WHITE}
                weight={500}>Water:</Text>
              <Text
                color={WHITE}
                weight={700}
                size='large'>Once a week</Text>
            </View>
          </View>

        </View>

        <View style={styles.descWrap}>
          <Text
            size='large'
            weight={700}>Description</Text>
          <View style={styles.quantity}>
            <TouchableOpacity
              onPress={value._setCounter.bind(null, 'plus')}
              style={[styles.plusMinus, { backgroundColor: GREEN }]}>
              <Icon name='plus' size={16} color={WHITE} />
            </TouchableOpacity>
            <Text
              weight={700}
              style={{ marginHorizontal: 20 }}>{value.counter}</Text>
            <TouchableOpacity
              onPress={value.counter > 0 ? value._setCounter.bind(null, 'minus') : null}
              style={[styles.plusMinus, { backgroundColor: PANACHE }]}>
              <Icon name='minus' size={16} color={BLACK} />
            </TouchableOpacity>
          </View>
        </View>

        <Text
          size='small'
          color={GRAY}
          style={styles.text}>{value.collapse ? value.text : `${value.text.substring(0, 150)}...`} <Text color='#ec6161' onPress={value._setCollapse}>Read {value.collapse ? 'less' : 'more'}</Text></Text>

      </ScrollView>
      <View style={styles.footerWrap}>
        <Text
          weight={700}
          size='huge'>${value.price.result.toFixed(2)}</Text>
        <TouchableOpacity style={styles.cartWrap}>
          <Text
            color={WHITE}
            size='small'
            weight={600}
            style={{ marginRight: 20 }}>Add to cart</Text>
          <View style={styles.cart}>
            <Image
              style={styles.cartImg}
              source={require('images/Cart_white.png')} />
          </View>
        </TouchableOpacity>
      </View>
    </Fragment>
  )
}

export default DetailView
