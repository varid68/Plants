import { GREEN, GREEN_20, MALACHITE, WHITE } from 'constants/Colors'
import { LIST_ITEM_BASE_CENTER, ALIGNING_ITEM_CENTER } from 'constants/Styles'
import { StyleSheet } from 'react-native'


export default StyleSheet.create({
  headerWrap: {
    backgroundColor: MALACHITE,
    paddingVertical: 20,
    zIndex: 8,
    position: 'relative',
    elevation: 20
  },

  descWrap: {
    ...LIST_ITEM_BASE_CENTER,
    padding: 20,
    marginTop: 30
  },
  quantity: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  plusMinus: {
    padding: 10,
    borderRadius: 20
  },
  text: {
    paddingHorizontal: 20,
    lineHeight: 30,
    marginBottom: 20
  },

  footerWrap: {
    ...LIST_ITEM_BASE_CENTER,
    paddingVertical: 20,
    paddingHorizontal: 30,
    backgroundColor: WHITE,
    elevation: 50,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60
  },
  cartWrap: {
    ...ALIGNING_ITEM_CENTER,
    paddingLeft: 20,
    paddingRight: 10,
    paddingVertical: 10,
    borderRadius: 40,
    backgroundColor: GREEN,
    shadowColor: GREEN_20,
    elevation: 20
  },
  cart: {
    backgroundColor: GREEN_20,
    borderRadius: 30,
    paddingVertical: 5,
    paddingHorizontal: 8
  },
  cartImg: {
    resizeMode: 'contain',
    width: 25,
    height: 30
  }
})
