import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class Product extends Component {
	render() {
		const { containerStyle, imageContainerStyle, imageStyle, textNameStyle, 
			textContainerStyle, finalTextStyle, textDiscountStyle, textPriceStyle,
			textOldPriceStyle } = styles;
			const discount = parseFloat(this.props.discount).toFixed(0);
		return (
			<View style={containerStyle}>
				<View style={imageContainerStyle}>
					<Image style={imageStyle} source={{ uri: this.props.source || 'https://salt.tikicdn.com/cache/280x280/media/catalog/product/6/4/64_1.jpg' }} />
				</View>
				<View style={{ textContainerStyle }}>	
					<Text style={textNameStyle}>{this.props.name}</Text>
					<Text style={textPriceStyle}>{this.props.newPrice}đ</Text>
					<View style={finalTextStyle}>
						<Text style={textOldPriceStyle}>{this.props.oldPrice}đ</Text>
						<Text style={textDiscountStyle}>- {discount} %</Text>
					</View>
				</View>
			</View>
		);
	}
}

const styles = {

	containerStyle: {
		width: 200,
		height: 180,
		justifyContent: 'center',
		alignItems: 'center',
		position: 'relative',
		top: 50,
		marginBottom: 40
	},
	imageContainerStyle: {
		marginTop: 10,
		marginBottom: 10,
		justifyContent: 'center',
		alignItems: 'center',
		width: '45%',
		height: 90,
	},
	imageStyle: {
		width: 90,
		height: 90
	},
	textContainerStyle: {
		marginTop: 30,
		height: 80,
		paddingTop: 15,
		alignItems: 'center',
		justifyContent: 'center'
	}, 
	textNameStyle: {
		fontFamily: 'Helvetica',
		fontSize: 16,
		color: '#000',
		textAlign: 'center',
		paddingLeft: 10,
		paddingRight: 10,
		height: 60
	},
//Style for line which contain oldPrice and discount
	finalTextStyle: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	textOldPriceStyle: {
		fontFamily: 'Helvetica',
		fontSize: 16, 
		color: '#000',
		textDecorationLine: 'line-through', 
		textDecorationStyle: 'solid',
		textAlign: 'center',
		position: 'relative',
		left: 15
	},
	textDiscountStyle: {
		fontFamily: 'Helvetica',
		fontSize: 16, 
		color: '#000',
		textAlign: 'center',
		position: 'relative',
		left: 40
	},
//Style for price after discount
	textPriceStyle: {
		fontSize: 16,
		textAlign: 'center',
		color: '#ff424e',
	}
	
};

export default Product;
