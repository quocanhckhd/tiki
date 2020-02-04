import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

class Header extends Component {

	openTabMenu = () => {
		const { navigation } = this.props;
		navigation.openDrawer();
	} 

//Style for header if header not at main screen
	goBackStyle = () => {
		if (this.props.content === 'Sản phẩm, thương hiệu ...') {
			return (
				{
					display: 'none'
				}
			);
		} 

		return (
			{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center'
			}
		);
	} 


//In main screen menu bar display
	goMenuStyle = () => {
		if (this.props.content !== 'Sản phẩm, thương hiệu ...') {
			return (
				{
					display: 'none'
				}
			);
		} 

		return (
			{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center'
			}
		);
	}


	render() {
		const { containerStyle, leftbarContainerStyle, 
				inputContainerStyle, rightbarContainerStyle, 
				iconStyle, iconLeftStyle } = styles;

		return (
			<View style={containerStyle}>
				<View 
					style={leftbarContainerStyle}
				>
					<TouchableOpacity style={this.goBackStyle()} onPress={this.props.goBack}>	
						<Icon name="angle-right" size={30} color="#ffffff" />
					</TouchableOpacity>
					<TouchableOpacity style={this.goMenuStyle()} onPress={this.openTabMenu.bind(this)}>
						<Icon 
							name="bars"
							size={25}
							color="#ffffff"
						/>
					</TouchableOpacity>
				</View>
				<View style={inputContainerStyle}>
					<Ionicons style={iconLeftStyle} name="ios-search" color="#000" size={20} />
					<TextInput 
						placeholder={this.props.content}
						style={{
							
							width: '70%', 
							height: 40,
							backgroundColor: '#ffffff',	
							paddingTop: 'auto',
							paddingBottom: 'auto',
							fontSize: 15,
							position: 'relative',
							left: -10
						}}
					/>
					<Ionicons style={iconStyle} name="ios-barcode" color="#000" size={20} />
				</View>
				<View style={rightbarContainerStyle}>
					<AntDesign name="shoppingcart" color="#ffffff" size={25} />
				</View>
			</View>
		);
	}
}

const styles = {

//Style for Header container
	containerStyle: {
		backgroundColor: '#189eff',
		height: 60, 
		flexDirection: 'row',
		position: 'absolute',
		zIndex: 1000,
		flex: 1,
		width: '100%'
	},
//Left Side contain icon menu bar
	leftbarContainerStyle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row'
	},
	inputContainerStyle: {
		flex: 3,
		width: '100%',
		height: '70%',
		justifyContent: 'center',
		marginTop: 'auto',
		marginBottom: 'auto',
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#ffffff',
		paddingLeft: 10,
		paddingRight: 10, 
		position: 'relative',
		left: 10
	},
	iconStyle: {
		width: '15%',
		position: 'relative',
		justifyContent: 'center',
		alignSelf: 'center',
		left: 10
	},
//Style for cart icon style
	rightbarContainerStyle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	iconLeftStyle: {
		alignSelf: 'center',
		width: '15%'
	}
};

export default Header;
