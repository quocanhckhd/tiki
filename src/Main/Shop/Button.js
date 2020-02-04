import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Dimensions, Text } from 'react-native';
import Authentication from '../../Authentication/Authentication';

const { width, height } = Dimensions.get('window');

class Button extends Component {

	goToSignin = () => {
		const { navigation } = this.props;
		navigation.navigate('TabNavigator');
		return (
			<Authentication navigation={this.props.navigation} />
		);
	}

	goToSignup = () => {
		const { navigation } = this.props;
		navigation.navigate('TabNavigator');
		return (
			<Authentication navigation={this.props.navigation} />
		);
	}

	render() {
		const { 
			containerStyle, 
			leftStyle, 
			buttonDownStyle, 
			buttonUpStyle, 
			rightStyle, 
			imageStyle, 
			textLeftStyle,
			textRightStyle,
			leftDownStyle, 
			leftUpStyle } = styles;
		return (
			<View style={containerStyle}>  
				<View style={leftStyle}>
					<View style={leftUpStyle}>	
						<Text
							style={{
								fontWeight: '200',
								fontSize: 16,
								color: '#000',
								fontFamily: 'Helvetica',
								position: 'relative',
								left: 5,
								marginBottom: 10,
								paddingTop: 15
							}}
						>Đăng nhập để có trải nghiệm tốt nhất</Text>
					</View>
					<View style={leftDownStyle}>
					<TouchableOpacity
						onPress={this.goToSignin.bind(this)}
						style={buttonUpStyle}
					>
						<Text style={textLeftStyle}>Đăng nhập</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={this.goToSignup.bind(this)}
						style={buttonDownStyle}
					>
						<Text style={textRightStyle}>Đăng ký</Text>
					</TouchableOpacity>
					</View>
				</View>
				<View style={rightStyle}>
					<Image 
						source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm6wDQpuB1Yr4k7IVg-w1U0ZI18gwglxC9tvpINAATELQLfFXGVA' }}
						style={imageStyle}
					/>
				</View>	
			</View>
		);
	}
}

const styles = {
	containerStyle: {
		height: height * 0.12,
		width,
		flex: 1,
		position: 'relative',
		flexDirection: 'row'
	},
	buttonUpStyle: {
		width: '35%',
		height: 35,
		backgroundColor: '#ff424e',
		border: 'none',
		justifyContent: 'center',
		alignItems: 'center'
	},
	buttonDownStyle: {
		backroundColor: '#ddd',
		width: '35%',
		height: 35,
		justifyContent: 'center',
		alignItems: 'center'
	},
	leftDownStyle: {
		flex: 2,
		position: 'relative',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row'
	},
	rightStyle: {
		position: 'relative',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	imageStyle: {
		width: height * 0.06,
		height: height * 0.06
	},
	textLeftStyle: {
		fontSize: 14,
		fontFamily: 'Helvetica',
		fontWeight: '200',
		color: '#ffffff',
	},
	textRightStyle: {
		color: '#065fd4',
		fontSize: 14,
		fontFamily: 'Helvetica',
		fontWeight: '100'
	},
	leftStyle:
	{
		flex: 2,
		position: 'relative',
		flexDirection: 'column'
	}, 
	leftUpStyle: {
		height: 20,
		justifyContent: 'center',
		alignItems: 'center'
	}
};

export default Button;
