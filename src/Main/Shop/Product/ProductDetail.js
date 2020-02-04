import React, { Component } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';
import data from './products.json';

class ProductDetail extends Component {

	onButtonPress = () => {
		this.props.navigation.navigate('Home');
	}

	goBack = () => {
		this.props.navigation.goBack();
	}

	render() {
		const { imageContainerStyle, imageStyle, textNameContainerStyle, nameStyle,
				containerStyle, rateStyle, buttonContainerStyle, textButtonStyle, buttonStyle,
				textPriceContainerStyle, oldPriceStyle, newPriceStyle, discountStyle,
				headerContainerStyle, leftSide, rightSide } = styles;

		const filterProduct = data.products.filter(product => product.id === this.props.id);

		const product = filterProduct.map(currentProduct => {
			//Caculate discount for each item
			const discount1 = (currentProduct.newPrice / currentProduct.oldPrice) * 100;

			//Display discount with 0 digital behind the comma
			const discount = parseFloat(discount1).toFixed(0);
			return (
				<View key={currentProduct.id} style={containerStyle}>
					<View style={imageContainerStyle}>
						<Image 
							style={imageStyle}
							source={{ uri: currentProduct.image || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkGL-vhyeKCUinKhAHVOE9KYe0ollxSABgF33ZYLlG3nwfVckUOw' }}
						/>
					</View>
					<View style={textNameContainerStyle}>
						<Text style={nameStyle}>{currentProduct.name}</Text>
						<View style={{ height: 30, flexDirection: 'row' }}>
							<Text style={rateStyle}>{() => this.showRating(currentProduct.rate)}</Text>
							<Text style={{ marginLeft: 10, marginRight: 10, fontSize: 20 }}>102 đánh giá</Text>
						</View>
					</View>
					<View style={{ textPriceContainerStyle }}>
						<Text style={newPriceStyle}>{currentProduct.newPrice}</Text>
						<View style={{ flexDirection: 'row', marginBottom: 5, marginTop: 5 }}>
							<Text style={oldPriceStyle}>{currentProduct.oldPrice}</Text>
							<Text>Tiết kiệm:<Text style={discountStyle}> - {discount} %</Text></Text>
						</View>
					</View>

					<View style={buttonContainerStyle}>
						<TouchableOpacity style={buttonStyle} onPress={this.onButtonPress}>
							<Text style={textButtonStyle}>Chọn mua</Text>
						</TouchableOpacity>
					</View>
				</View>
			);
		});

		return (
			<ScrollView style={containerStyle}>
				<View style={headerContainerStyle}>
					<View style={leftSide}>
						<TouchableOpacity 
							style={{ width: '25%', alignSelf: 'center', justifyContent: 'center' }} 
							onPress={this.goBack.bind(this)}
						>
							<Text style={{ alignSelf: 'center' }}>
								<Icon name="left" color="#fff" size={25} />
							</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							style={{ 
								width: '25%', 
								alignSelf: 'center', 
								justifyContent: 'center'
							}} 
							onPress={this.goBack.bind(this)}
						>
							<Text style={{ alignSelf: 'center' }}>
								<Icon name="bars" color="#fff" size={25} />
							</Text>
						</TouchableOpacity>
					</View>
					<View style={rightSide}>
						<Text style={{ alignSelf: 'center', width: '25%' }}>
							<Icon name="hearto" color="#fff" size={25} />
						</Text>
						<Text style={{ alignSelf: 'center', width: '25%' }}>
							<Icon name="search1" color="#fff" size={25} />
						</Text>
						<Text style={{ alignSelf: 'center', width: '25%' }}>
							<Icon name="phone" color="#fff" size={25} />
						</Text>
						<Text style={{ alignSelf: 'center', width: '25%' }}>
							<Icon name="shoppingcart" color="#fff" size={25} />
						</Text>
					</View>
				</View>
				{ product }
			</ScrollView>
		);
	}
}

const styles = {
	headerContainerStyle: {
		flexDirection: 'row',
		height: 60,
		backgroundColor: '#189eff',
		width: '100%',
	},
	leftSide: {
		width: '50%',
		flexDirection: 'row',
	},
	rightSide: {
		width: '50%',
		flexDirection: 'row',
		justifyContent: 'center'
	},
	containerStyle: {
		backgroundColor: '#ffffff'
	},
	imageContainerStyle: {
		width: '100%',
		height: 180,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 60,
		marginTop: 120
	},
	imageStyle: {
		width: '90%',
		height: 300
	},
	textNameContainerStyle: {
		marginTop: 10,
		maxHeight: 200,
		borderBottom: 1,
		paddingBottom: 15,
		borderColor: 'lightgray'
	},
	nameStyle: {
		fontFamily: 'Helvetica',
		fontWeight: '300',
		color: '#000',
		textAlign: 'center',
		width: '80%',
		alignSelf: 'center',
		fontSize: 20
	},
	buttonContainerStyle: {
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		height: 60,
		marginBottom: 5,
		marginTop: 5
	},
	buttonStyle: {
		backgroundColor: '#ff424e',
		border: 'none',
		width: '90%',
		height: 40,
		justifyContent: 'center'
	},
	textButtonStyle: {
		color: '#ffffff',
		fontWeight: '200',
		fontFamily: 'Helvetica',
		fontSize: 20,
		alignSelf: 'center'
	},
	textPriceContainerStyle: {
		marginTop: 5,
		marginBottom: 5,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		height: 80
	},
	oldPriceStyle: {
		fontFamily: 'Helvetica',
		fontSize: 16, 
		color: '#000',
		textDecorationLine: 'line-through', 
		textDecorationStyle: 'solid',
		textAlign: 'center',
		alignSelf: 'center',
		width: '50%'
	},	
	newPriceStyle: {
		color: '#ff424e',
		fontSize: 20,
		fontFamily: 'Helvetica',
		fontWeight: '200',
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center'
	},
	discountStyle: {
		fontSize: 18,
		fontFamily: 'Helvetica',
		fontWeight: '200',
		alignSelf: 'center', 
		color: '#ff424e',
		width: '50%'
	}
};

const mapStateToProps = state => {
	const { id } = state.title;
	return { id };
};

export default connect(mapStateToProps)(ProductDetail);
