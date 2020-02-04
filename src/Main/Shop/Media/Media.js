import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


	const { height, width } = Dimensions.get('window');

class Media extends Component {
	render() {
	const { containerStyle, textStyle, textContainerStyle, iconContainerStyle } = styles;
	const { icon, title } = this.props;
		return (
			<View style={containerStyle}>
				<View style={iconContainerStyle}>
					<Icon name={icon} color="#ffffff" size={30} />
				</View>
				<View style={textContainerStyle}>
					<Text style={textStyle}>{title}</Text>
				</View>
			</View>
		);
	}
}

const styles = {
	containerStyle: {
		marginTop: 5,
		height: height * 0.12,
		width: width * 0.25,
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
	iconContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		height: width * 0.13,
		width: width * 0.13,
		borderRadius: 20,
		backgroundColor: '#315a7b',
		marginBottom: 5,
	}
};

export default Media;
