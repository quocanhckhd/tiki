import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, 
		TouchableOpacity, ActivityIndicator, 
		Image } from 'react-native';
import * as actions from '../actions/index';


class SignIn extends Component {

	static navigationOptions = {
		title: 'Đăng nhập'
	};
	
	onEmailChange = text => {
		this.props.emailChanged(text);
	}

	onPasswordChange = text => {
		this.props.passwordChanged(text);
	}
	onButtonPress = () => {
		const { email, password } = this.props;
		this.props.loginUser({ email, password });
		const { navigation } = this.props;
		if (this.props.error === '') {
			navigation.navigate('Home');
		}	
	}

	highlightStyleSignIn = () => {
		if (this.state.selectedTab === 'signIn') {
			return {
				borderBottomWidth: 2, 
				borderColor: '#f3b414',
				fontSize: 18,
				paddingBottom: 10,
				flex: 1
			};
		}

		return {
			fontSize: 16,
			paddingBottom: 10,
			flex: 1
		};
	}

	highlightStyleSignUp = () => {
		if (this.state.selectedTab === 'signUp') {
			return {
				borderBottomWidth: 2, 
				borderColor: '#f3b414',
				fontSize: 18,
				paddingBottom: 10,
				flex: 1
			};
		}

		return {
			fontSize: 16,
			paddingBottom: 10, 
			flex: 1
		};
	}


	goToSignUp = () => {
		this.props.navigation.navigate('SignUp');
	}

	renderError = () => {
		if (this.props.error) {
			return (
				<View style={{ backgroundColor: '#ffffff' }}>
					<Text style={styles.errorTextStyle}>
						{this.props.error}
					</Text>
				</View>
			);
		}
	}

	renderButton = () => {
		if (this.props.loading) {
			return <ActivityIndicator size='large' />;
		}

		return (
			<TouchableOpacity style={styles.buttonStyle} onPress={this.onButtonPress}>
				<Text style={styles.textStyle}>Đăng nhập</Text>
			</TouchableOpacity>
		);
	}

	render() {
		const { inputStyle, buttonContainerStyle, inputContainerStyle } = styles;

		return (
			<View style={{ backgroundColor: '#ffffff', flex: 1 }}>
				
				<View style={inputContainerStyle}>
					<TextInput 
						style={inputStyle}
						placeholder="Email/Số điện thoại"
						onChangeText={this.onEmailChange}
						value={this.props.email}
					/>
				</View>
				<View style={inputContainerStyle}>
					<TextInput 
						style={inputStyle}
						secureTextEntry
						placeholder="Mật khẩu"
						value={this.props.password}
						onChangeText={this.onPasswordChange}
					/>
				</View>
				<View style={buttonContainerStyle}>
					{this.renderButton()}
				</View>
					{this.renderError()}
				<View
					style={{
						marginTop: 10,
						marginBottom: 10,
						justifyContent: 'center',
						alignItems: 'center',
						width: '100%',
						height: 40
					}}
				>
					<Text
						style={{
							fontSize: 16,
							fontFamily: 'Helvetica',
							color: '#09B0E7',
							textAlign: 'center'
						}}
						onPress={() => this.props.navigation.navigate(ForgotPassword)}
					>Quên mật khẩu</Text>
				</View>

				<View 
					style={{ 
						marginTop: 10, 
						marginBottom: 20, 
						width: '100%', 
						height: 30,
						justifyContent: 'center',
						alignItems: 'center' 
					}}
				>
					<Text 
						style={{ 
							fontFamily: 'Helvetica', 
							alignSelf: 'center',
							fontSize: 18
						}}
					>
						Hoặc đăng nhập với 
					</Text>
				</View>

				<View 
					style={{
						alignItems: 'center', 
						justifyContent: 'center',
						width: '100%',
						height: 30,
						marginTop: 20,
						flexDirection: 'row'
					}}
				>
					<View style={{ width: 70, height: 40, backgroundColor: '1c4b94' }}>
						<Image
							style={{ width: 30, height: 30, alignSelf: 'center' }} 
							source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEU7V53////i5vAyUZqFlL84VZwhRpVKZKTd4e5yhLVIYaIlSJbO1eUoSpcyUJo3VJzq7fRgda6rtdKQncRofLFBXKC2v9iuuNS8xNvGzeFXbqp9jruXpMiMmsLx8/h3iLcAMY0UPpKirc1l7EByAAAEEElEQVR4nO3da2+bMBiGYQNxIAEfOKVpu6Zb//+PHLSNtEkVNVD7fW0995dqU4e4BImDTZjIPmv6YRSpNA59c4eJjx9dqbSR1Dv2Y0mjVdn9I7RtnY7unqxbexdWpqDeHS8VpvoQ2oROz/+Txr4L2zSP4FzRzsJOUe+Hx1Q3CctUz9E5WWaiSfkQTgexEb2m3gmv6V4MKZ+k02k6iDFxYTofRRFCCCGEEEIIIYSQ5+Q96h358aQptKqV1sWUnlNq+vPc/Hcm7vUkOWnG9tBdmyq3t/eszfO8qprH66V76w+n9uk8/Rb1jm5L6no8XPPs2262iXE2VKu2c9B9do7tVJVK9JUzL0Khkt1tjS82oRZv63iRCaU62NXAmIRaPq73xSRUp5UvwMiEUvWbfNEI5fFhIzASoayvW4FxCKW6bAbGIazXj4JxCdXLDmAMwuJpDzAGoXa/johTqDaPE5EITbsPyF94XHUxGKFQP+8EchfKnW8z/IX7DyF3odr7KuQuNMNuIHPhnk/ckQj3A3kLi1PqQrX9ujcOoSw2TB5GJTT7LpsiEOqVV762ar7oTM1YaMXL0F6eS32sv4j1+qHzB5rqtVBFlGvcjpPc/cSj3tVNub7RtCpOn/N4f4r3e2faaaXiUlPv5/a0yzzwLeavnTldWFxYjwbfVLssiA6Gejd3VDffAzMd8UnqNI9YRfw+MwkdptmuMb8MnYRdvIOhcBP+Sl74krzwEPUDOyCEkH8QQsg/CCHkH4QQ8g9CCPkHIYT8gzAKoVzKSagXN0H+9W45lgsZl9nE89IWpojvxDA/cVfXcjntwsaP3Le23CPtwkYA4UPyQuKFjQDCV9rhJICwpR0uAgiJb9XwL7TE6/z+hRXxKrh/IfFwGEBIvc7vX0i9Cu5feCK+Zcq/8Cl14Y36EUrehdTDoX8h+f/M4V1Iftubd+Eb9S1T3oXkU3HehcTXTgGExD7/whv1G413YX5MXdiQ3wXuW0g8lRhASH+PtG/hM/Vw6F1IPhx6F9J/ydmz8Eb/1VLPQuqpRP9C6qlEMT+cJa8WckDYhX+e0w8WE/G40G+HVe7XPwsbYABcLol7MRaDEEL+QQgh/yCEkH8QQsg/CCHkH4QQ8g9CCPkHIYT8gxBC/kEIIf8ghJB/EELIPwgh5B+EEPIPQgj5ByGE/IMQQv5BCCH/IISQfxBCyD8IIeQfhBDyD0II+QchhPwLKCR6YnQooRzFkLbQDKKneYRGKKHuBdFTQEMJVSOykuQ0DSSUZSayjuQgBhKqbhJmLcWwE0ZYtNkstIbgPA0ilMa+C7PKhD+KIYSFmZ9GNQsz29ahD6N/oaxbm92FWdaVSgc9Wf0KpdGq7D62Iu6ba/oh5DPO/QrHoW/uW/kLSYBOpbGNG6MAAAAASUVORK5CYII=' }} />
					</View>
					<View style={{ width: 70, height: 40 }}>
						<Image
							style={{ width: 30, height: 30, alignSelf: 'center' }} 
							source={{ uri: 'data:image/png;base64,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' }} />
					</View>
					<View style={{ width: 70, height: 40 }}>
						<Image
							style={{ width: 30, height: 30, alignSelf: 'center' }} 
							source={{ uri: 'data:image/jpeg;base64,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' }} />
					</View>
				</View>

			</View>
		);
	}
}

const mapStateToProps = state => {
	const { email, password, error, loading, user } = state.auth;
	return { email, password, error, loading, user };
};

const mapDispatchToProps = (dispatch) => {
	return {
		emailChanged: (text) => {
			dispatch(actions.emailChanged(text));
		},
		passwordChanged: (text) => {
			dispatch(actions.passwordChanged(text));
		},
		loginUser: ({ email, password }) => {
			dispatch(actions.loginUser({ email, password }));
		}
	};
};

const styles = {
	errorTextStyle: {
		fontSize: 18,
		alignSelf: 'center',
		color: 'red'
	},
	inputContainerStyle: {
		height: 60
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
		fontSize: 16,
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
	textStyle: {
		alignSelf: 'center',
		color: '#ffffff',
		fontFamily: 'Helvetica',
		fontSize: 18
	},
	buttonContainerStyle: {
		marginTop: 20,
		width: '100%',
		height: 40,
		marginBottom: 20
	}, 
	imageStyle: {
		width: '100%',
		height: 200
	},
	imageContainerStyle: {
		marginBottom: 20
	},
	titleContainerStyle: {
		width: '100%',
		height: 60,
		backgroundColor: '#ffffff',
		flex: 1,
		flexDirection: 'row',
		marginBottom: 10
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
