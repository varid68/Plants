import React, { useContext } from 'react'
import { ScrollView, View, Image, FlatList, TouchableOpacity, StatusBar } from 'react-native'
import Text from 'components/Text'
import { ALABSTER, BLACK, DUSTY_GRAY, GREEN, MINE_SHAFT, RED, WHITE } from 'constants/Colors'
import { LIST_ITEM_BASE_END } from 'constants/Styles'
import Icon from 'react-native-vector-icons/AntDesign'
import style from './HomeStyles'

import { HomeContext } from './HomeContext'


const HomeView = ({ navigation }) => {
  const value = useContext(HomeContext)

  return (
    <ScrollView style={{ backgroundColor: ALABSTER }}>
      <StatusBar hidden={false} backgroundColor={GREEN} />
      <View style={style.containerHeader}>
        <Image
          style={style.drawerImg}
          source={require('images/Align.png')} />
        <View style={style.cartContainer}>
          <Image
            style={style.cartImg}
            source={require('images/Cart.png')} />
        </View>
      </View>

      <View style={{
        ...LIST_ITEM_BASE_END,
        margin: 20
      }}>
        <View style={{ flexDirection: 'column' }}>
          <Text weight={700} style={style.bestPlant}>Find the</Text>
          <Text style={{ fontSize: 35 }} weight={800}>Best Plants</Text>
        </View>
        <View style={style.searchContainer}>
          <Image
            style={style.searchImg}
            source={require('images/Search.png')} />
        </View>
      </View>

      <FlatList
        horizontal
        contentContainerStyle={{ paddingHorizontal: 20 }}
        data={value.list}
        extraData={value.refresh}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={value._setSelected.bind(null, item.key)}
            style={style.favorite(item)}>
            <Text color={item.selected ? WHITE : MINE_SHAFT}>{item.key}</Text>
          </TouchableOpacity>
        )} />


      <FlatList
        horizontal
        contentContainerStyle={{
          marginTop: 15,
          paddingHorizontal: 15
        }}
        data={value.list.filter(e => e.selected == true).map(e => e.content)[0]}
        showsHorizontalScrollIndicator={false}
        extraData={value.list}
        renderItem={({ item, index }) => (
          <View style={style.cardItemContainer}>
            <Image
              style={style.itemImg}
              source={require('images/Daco_6031161.png')} />
            <Text weight={600} size='small'>{item.name}</Text>
            <Text>$<Text weight={700} size='huge'>{item.price}</Text></Text>

            <TouchableOpacity
              onPress={value._setFavorited.bind(null, item, value.list.filter(e => e.selected == true).map(e => e.key)[0])}
              style={style.favoriteContainer}>
              <Icon size={18} name={item.favorited ? 'heart' : 'hearto'} color={item.favorited ? RED : BLACK} />
            </TouchableOpacity>
          </View>
        )} />


      <Text weight={600} size='massive' style={{ marginHorizontal: 20, marginTop: 10 }}>Recent Viewed</Text>

      <FlatList
        contentContainerStyle={{ paddingHorizontal: 15 }}
        horizontal
        data={[
          {
            name: 'Aloe Vera',
            desc: 'Lacking a green',
            price: 40.99
          },
          {
            name: 'Vera Aloe',
            desc: 'Lacking a green',
            price: 40.99
          }
        ]}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={{ flexDirection: 'row' }}>
            <View style={style.recentViewImg}>
              <Image style={style.recentViewImg2} source={require('images/image_41.png')} />
            </View>
            <View style={style.recentViewTxt}>
              <Text weight={600} size='large'>{item.name}</Text>
              <Text size='medium' weight={500} color={DUSTY_GRAY}>{item.desc}</Text>
              <Text>$<Text weight={700} size='large'>{item.price}</Text></Text>
            </View>
          </View>
        )} />

    </ScrollView>
  )
}

export default HomeView
