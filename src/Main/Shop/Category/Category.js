import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';

	const { height, width } = Dimensions.get('window');

class Category extends Component {

	render() {
	const { containerStyle, textStyle, textContainerStyle, imageContainerStyle, imageStyle } = styles;
		return (
			<View style={containerStyle}>
				<View style={imageContainerStyle}>
					<Image 
						style={imageStyle}
						source={{ uri: this.props.source || 'https://salt.tikicdn.com/cache/280x280/media/catalog/product/6/4/64_1.jpg' }}
					/>
				</View>
				<View style={textContainerStyle}>
					<Text style={textStyle}>{this.props.title}</Text>
				</View>
			</View>
		);
	}
}

const styles = {
	containerStyle: {
		marginTop: 5,
		height: height * 0.12,
		width: width * 0.33,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 5
	},
	textContainerStyle: {
		width: '100%',
		height: height * 0.04,
		alignItems: 'center'
	},
	textStyle: {
		fontSize: 16,
		color: '#000',
		fontFamily: 'Helvetica',
		textAlign: 'center'
	},
	imageContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		height: height * 0.1,
		width: width * 0.3,
		borderRadius: 20,
		backgroundColor: '#ffffff',
		marginBottom: 5
	},
	imageStyle: {
		width: height * 0.1,
		height: height * 0.1
	}
};

export default Category;
