import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

class Authentication extends Component {
	
	// highlightStyleSignUp = () => {
	// 	if (this.state.selectedTab === 'signUp') {
	// 		return {
	// 			borderBottomWidth: 2, 
	// 			borderColor: '#f3b414',
	// 			fontSize: 18,
	// 			paddingBottom: 10
	// 		};
	// 	}

	// 	return {
	// 		fontSize: 16,
	// 		paddingBottom: 10
	// 	};
	// }

	displayAuthentication = () => {
		if (this.props.display === true) {
			return (
				{
					backgroundColor: '#ffffff', 
					flex: 1 
				}
			);
		}
		return {
			display: 'none'
		};
	}

	goBack = () => {
		const { navigation } = this.props;
		navigation.goBack();
	}

	render() {
		const { imageStyle, imageContainerStyle } = styles;

		return (
			<View style={this.displayAuthentication}>
				<View style={imageContainerStyle}>
					<View 
						style={{ 
							justifyContent: 'flex-start', 
							alignItems: 'flex-start', 
							position: 'relative', 
							zIndex: 100, 
							paddingLeft: 10,
							paddingTop: 10 
						}}

					>

						<Text
							onPress={this.goBack.bind(this)}
							style={{ fontSize: 30, color: '#ffffff', position: 'relative', top: 10 }}
						><Icon name="close" size={30} color="#ffffff" /></Text>
					</View>
					<Image
						style={imageStyle}
						source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkGL-vhyeKCUinKhAHVOE9KYe0ollxSABgF33ZYLlG3nwfVckUOw' }}
					/>
				</View>	
			</View>
		);
	}
}

const styles = {
	imageStyle: {
		width: '100%',
		height: 200,
		position: 'relative'
	},
	imageContainerStyle: {
		
	},
};

export default Authentication;
