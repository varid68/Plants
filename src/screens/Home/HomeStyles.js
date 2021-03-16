import { StyleSheet } from 'react-native'
import { LIST_ITEM_BASE_CENTER, ROW_CENTER } from 'constants/Styles'
import { GRAY_20, GREEN, WHITE } from 'constants/Colors'


export default StyleSheet.create({
	containerHeader: {
		...LIST_ITEM_BASE_CENTER,
		marginHorizontal: 20,
		marginTop: 25
	},
	drawerImg: {
		resizeMode: 'contain',
		width: 30,
		height: 24
	},
	cartContainer: {
		...ROW_CENTER,
		margin: 10,
		width: 50,
		height: 50,
		backgroundColor: WHITE,
		borderRadius: 40,
		elevation: 10
	},
	cartImg: {
		resizeMode: 'contain',
		width: 18,
		height: 18
	},

	bestPlant: {
		marginBottom: -10,
		color: GRAY_20,
		fontSize: 30
	},
	searchContainer: {
		...ROW_CENTER,
		margin: 10,
		width: 50,
		height: 50,
		backgroundColor: GREEN,
		borderRadius: 40,
		elevation: 10,
		shadowColor: GREEN
	},
	searchImg: {
		resizeMode: 'contain',
		width: 20,
		height: 20
	},

	cardItemContainer: {
		elevation: 5,
		backgroundColor: WHITE,
		margin: 10,
		padding: 25,
		borderRadius: 10,
		marginRight: 20
	},
	itemImg: {
		width: 150,
		height: 168,
		resizeMode: 'contain'
	},
	favoriteContainer: {
		...ROW_CENTER,
		position: 'absolute',
		right: 20,
		top: 15,
		backgroundColor: WHITE,
		elevation: 5,
		padding: 8,
		borderRadius: 20
	},
	favorite: (item) => ({
		marginVertical: 15,
		backgroundColor: item.selected ? GREEN : WHITE,
		paddingHorizontal: 20,
		paddingVertical: 8,
		borderRadius: 25,
		marginRight: 10,
		marginLeft: 5,
		elevation: 6
	}),

	recentViewImg: {
		elevation: 5,
		backgroundColor: WHITE,
		margin: 10,
		padding: 10,
		borderRadius: 5
	},
	recentViewImg2: {
		width: 70,
		height: 70,
		resizeMode: 'contain'
	},
	recentViewTxt: {
		flexDirection: 'column',
		paddingVertical: 15,
		paddingLeft: 5,
		paddingRight: 15,
		justifyContent: 'space-between'
	}
})
