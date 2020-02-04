import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class ForgotPassword extends Component {

	onButtonPress = () => {

	}

	onEmailChange = () => {

	}

	render() {
		const { containerStyle, headerContainerStyle,
				textHeaderLeftStyle, textHeaderRightStyle,
				inputContainerStyle, inputStyle, 
				buttonStyle } = styles;
		return (
			<View style={containerStyle}>
				<View style={headerContainerStyle}>
					<Text style={textHeaderLeftStyle}>
						<Icon name="angle-right" color="#ffffff" size={30} />
					</Text>
					<Text style={textHeaderRightStyle}>Quên Mật Khẩu</Text>
				</View>
				<View style={inputContainerStyle}>
					<TextInput 
						style={inputStyle}
						placeholder="Email/Số điện thoại"
						value={this.props.email}
						onChangeText={this.onEmailChange}
					/>
				</View>
				<View>
					<TouchableOpacity onPress={this.onButtonPress.bind(this)} style={buttonStyle}>
						<Text>Lấy lại mật khẩu</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = {
	headerContainerStyle: {
		backgroundColor: '#189eff',
		height: 60, 
		flexDirection: 'row',
		position: 'absolute',
		zIndex: 1000,
		flex: 1,
		width: '100%'
	},
	containerStyle: {
		flex: 1,
		backgroundColor: '#ffffff'
	},
	textHeaderLeftStyle: {
		alignSelf: 'flex-start'
	},
	textHeaderRightStyle: {
		alignSelf: 'center',
		fontSize: 18,
		color: '#ffffff',
		fontFamily: 'Helvetica'
	},
	inputStyle: {
		width: '90%',
		height: 60,
		paddingLeft: 10,
		paddingBottom: 5,
		borderBottomWidth: 1,
		borderColor: '#ddd',
		marginBottom: 5,
		alignSelf: 'center',
		fontSize: 16
	},
	buttonStyle: {
		backgroundColor: '#ff424e',
		width: '90%',
		color: '#ffffff',
		alignSelf: 'center',
		fontWeight: '200',
		height: 50,
		border: 'none',
		justifyContent: 'center',
	},
	inputContainerStyle: {
		height: 60,
		marginBottom: 10
	}
};

export default ForgotPassword;
