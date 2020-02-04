import React, { Component } from 'react';
import { ScrollView, View, TouchableOpacity, Dimensions, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImageList from './ImageList';
import CategoryList from './Category/CategoryList';
import MediaList from './Media/MediaList';	
import Button from './Button';
import BestFind from './BestFind/BestFind';
import TikiDeal from './TikiDeal';
import ProductList from './Product/ProductList';
import Header from '../Header';

const { height, width } = Dimensions.get('window');

class Shop extends Component {
	static navigationOptions = {
		header: {
			visible: false
		}
	};

	goToProductPage = () => {
		const { navigation } = this.props;
		navigation.navigate('ProductPage');
	}

	goToCategory = () => {
		const { navigation } = this.props;
		navigation.navigate('CategoryPage');
	}

	render() {
		const { 
			textContainerStyle, textStyle, rightTextStyle, mediaContainerStyle,
			wrappstyle, categoryContainerStyle, wrapp, textMenuStyle, 
			textMenuContainerStyle, serviceContainerStyle, serviceTextStyle, 
			serviceCenterStyle, serviceTextSecondStyle,
			serviceRightStyle, serviceLeftStyle, 
		} = styles; 

		return (
			<ScrollView contentContainerStyle={{ backgroundColor: '#ddd' }}>
				<View style={{ width, height: 60 }}>	
					<Header content="Sản phẩm, thương hiệu ..." navigation={this.props.navigation} />
				</View>

				<View style={{ width: '100%', height: 150 }}>
					<ImageList navigation={this.props.navigation} />
				</View>

				<View style={wrappstyle}>
					<View style={textContainerStyle}>	
						<Text style={textStyle}>Danh mục sản phẩm</Text>
						<Text
							onPress={this.goToCategory.bind(this)}
							style={rightTextStyle}
						>
								Xem tất cả   
							<Icon 
								style={{ fontWeight: '200' }} 
								name="angle-right" 
								color="blue" 
								size={25}
								iconStyle={{
									position: 'relative',
									top: 10,
									left: 7
								}}
							/>
						</Text>
					</View>
					<View style={categoryContainerStyle}>
						<CategoryList 
							onClick={this.props.onClick}
							navigation={this.props.navigation} 
						/>
					</View>
				</View>
				<View style={wrapp}>	
					<View style={textMenuContainerStyle}>
						<Text style={textMenuStyle}>Danh sách tiện ích</Text>
					</View>
					<View style={mediaContainerStyle}>
						<MediaList navigation={this.props.navigation} />
					</View>
				</View>
				<View style={serviceContainerStyle}>
					<View style={serviceLeftStyle}>
						<Icon name="paper-plane-o" size={20} color="#000" />
					</View>
					<View style={serviceCenterStyle}>
						<Text style={serviceTextStyle}>Ưu đãi & hợp tác</Text>
						<Text style={serviceTextSecondStyle}>Các ưu đãi cho chủ thẻ ngân hàng</Text>
					</View>
					<View style={serviceRightStyle}>
						<Icon 
							name="angle-right" 
							color="#3675d3" 
							size={40} 
						/>
					</View>
				</View>
				<View
					style={{ 
						marginBottom: 10,
						backgroundColor: '#ffffff',
						width: '100%',
						height: 150,
						paddingLeft: 20,
						paddingBottom: 10
					}}
				>
					<BestFind navigation={this.props.navigation} />
				</View>
				<View 
					style={{ 
						marginBottom: 10,
						marginTop: 10,
						backgroundColor: '#ffffff',
						height: 100,
						padding: 10
					}}
				>
					<Button navigation={this.props.navigation} />
				</View>
				<View
					style={{
						width: '100%',
						backgroundColor: '#fff',
						maxHeight: 3000,
						marginTop: 5,
						marginBottom: 5,
						paddingBottom: 10
					}}
				>
					<View 
						style={{
							marginBottom: 15,
							marginTop: 15,
							paddingLeft: 15, 
							flexDirection: 'row',
						}}
					>
						<Text
							style={{
								fontSize: 18,
								fontFamily: 'Helvetica',
								color: '#000', 
								flex: 1
							}}
						>Tiki Deal</Text>
						<Text
							style={{
								fontSize: 18,
								fontFamily: 'Helvetica',
								color: '#189eff',
								flex: 1,
								textAlign: 'right',
								paddingRight: 10
							}}
							onPress={this.goToProductPage.bind(this)}
						>	
							Xem tất cả <Text><Icon name="angle-right" color="#ffffff" size={25} /></Text>
						</Text>
					</View>
					<TikiDeal navigation={this.props.navigation} />
					
					<View
						style={{
							width: '100%',
							height: 50,
							alignItems: 'center',
						}}
					>
						<TouchableOpacity
							style={{
								backgroundColor: '#ddd',
								border: 'none',
								width: '90%',
								height: 30,
								justifyContent: 'center',
								alignItems: 'center'
							}}

							onPress={this.goToProductPage.bind(this)}
						>
							<Text
								style={{
									fontSize: 18,
									fontFamily: 'Helvetica',
									color: '#ff424e'
								}}
							>
								Xem thêm
							</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View
					style={{
						width: '100%',
						backgroundColor: '#ffffff',
						marginTop: 5,
						marginBottom: 5,
						maxHeight: 6000
					}}
				>	
					<View 
						style={{
							marginBottom: 15,
							marginTop: 15,
							paddingLeft: 15
						}}
					>
						<Text
							style={{
								fontSize: 18,
								fontFamily: 'Helvetica',
								color: '#000'
							}}
						>Dành cho riêng bạn</Text>
					</View>
					<ProductList navigation={this.props.navigation} />
				</View>
			</ScrollView>
		);
	}
}

const styles = {
	fontAweSomeStyle: {
		fontSize: 15,
		color: '#ffffff'
	},
	wrappstyle: {
		height: height * 0.45,
		backgroundColor: '#ffffff',
		margin: 10,
		shadowColor: '#2e272b',
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 0.2,
		width: '100%',
		position: 'relative',
		left: -10,
		top: -15
	},
	textContainerStyle: {
		height: height * 0.1,
		justifyContent: 'center',
		alignItems: 'flex-start',
		position: 'relative',
		flex: 1,
		flexDirection: 'row',
		paddingTop: 10, 
		marginBottom: 10
	},
	textStyle: {
		fontSize: 18,
		fontFamily: 'Helvetica',
		flex: 1,
		alignSelf: 'flex-start',
		fontWeight: '300',
		position: 'relative',
		left: 5,
		color: '#000',
		paddingLeft: 5
	},
	rightTextStyle: {
		flex: 1,
		fontFamily: 'Helvetica',
		fontSize: 18,
		color: 'blue',
		textAlign: 'right',
		position: 'relative',
		left: -20,
		fontWeight: '200'
	},
	categoryContainerStyle: {	
		padding: 10,
		height: height * 0.4
	},
	wrapp: {
		height: height * 0.2,
		backgroundColor: '#ffffff',
		marginTop: 5,
		marginBottom: 10,
		position: 'relative',
		top: -15
	},
	mediaContainerStyle: {
		height: height * 0.15,
		backgroundColor: '#ffffff',
		marginTop: 5
	},
	textMenuContainerStyle: {
		height: height * 0.1,
		justifyContent: 'center',
		alignItems: 'flex-start',
		position: 'relative',
		flex: 1,
		flexDirection: 'row',
		marginTop: 5,
		marginBottom: 10
	},
	textMenuStyle: {
		fontSize: 18,
		fontFamily: 'Helvetica',
		flex: 1,
		alignSelf: 'flex-start',
		fontWeight: '300',
		position: 'relative',
		left: 20,
		color: '#000'
	},
	serviceContainerStyle: {
		height: height * 0.12,
		width,
		backgroundColor: '#ffffff', 
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
		flexDirection: 'row',
		position: 'relative',
		top: -15
	},
	serviceCenterStyle: {
		flex: 4,
		justifyContent: 'center',
		alignItems: 'flex-start'
	},
	serviceTextStyle: {
		fontSize: 14,
		color: '#000',
		fontWeight: '200'
	},
	serviceTextSecondStyle: {
		fontSize: 13,
		color: '#000',
		fontWeight: '200'
	},
	serviceLeftStyle: {
		position: 'relative',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	serviceRightStyle: {
		flex: 1,
		position: 'relative',
		justifyContent: 'center',
		alignItems: 'center'
	},
};

export default Shop;
