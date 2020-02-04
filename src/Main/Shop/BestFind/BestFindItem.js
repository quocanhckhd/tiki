import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class BestFindItem extends Component {
	render() {
		const { containerStyle, textStyle, iconContainerStyle } = styles;
		return (
			<View style={containerStyle}>
				<View style={iconContainerStyle}>
					<Icon name="search" color="#000" size={10} />
				</View>	
				<Text style={textStyle}>{this.props.title}</Text>
			</View>
		);
	}
}

const styles = {
	containerStyle: {
		height: 30,
		marginTop: 15,
		backgroundColor: '#fff',
		borderWidth: 0.5,
		borderColor: '#000',
		maxWidth: 100,
		marginLeft: 10,
		marginRight: 10,
		padding: 10,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		borderRadius: 5
	},
	textStyle: {
		fontSize: 13,
		color: '#000',
		fontFamily: 'Helvetica',
		fontWeight: '200',
		alignSelf: 'center'
	},
	iconContainerStyle: {
		width: 10,
		height: 30,
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 5
	}
};

export default BestFindItem;
