import React, { Component } from 'react';
import { ScrollView, View, Text, 
	TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class SignUp extends Component {

	static navigationOptions = {
		title: 'Đăng ký'
	};

	constructor(props) {
		super(props);
		this.state = {
			checked: true
		};
	}

	onEmailChange = text => {
		this.props.emailChanged(text);
	}

	onPasswordChange = text => {
		this.props.passwordChanged(text);
	}

	signUp = () => {
		const { email, password } = this.props;
		this.props.signUp({ email, password });
	}

	goToSignIn = () => {
		this.props.navigation.navigate('SignIn');
	}

	renderError = () => {
		if (this.props.error) {
			return (
				<View style={{ backgroundColor: '#ffffff' }}>
					<Text 
						style={{
							color: '#ff424e',
							fontSize: 18,
							alignSelf: 'center'
						}}
					>
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
			<TouchableOpacity style={styles.buttonStyle} onPress={this.signUp.bind(this)}>
				<Text style={styles.textStyle}>Đăng ký</Text>
			</TouchableOpacity>
		);
	}

	render() {
		const { inputStyle, buttonContainerStyle, inputContainerStyle } = styles;

		return (
			<ScrollView style={{ backgroundColor: '#ffffff', flex: 1 }}>
				<View style={inputContainerStyle}>
					<TextInput 
						style={inputStyle}
						placeholder="Họ tên"
					/>
				</View>
				<View style={inputContainerStyle}>
					<TextInput 
						style={inputStyle}
						placeholder="Số điện thoại"
					/>
				</View>
				
				<View style={inputContainerStyle}>
					<TextInput 
						style={inputStyle}
						placeholder="Email/Số điện thoại"
						onChangeText={this.onEmailChange.bind(this)}
						value={this.props.email}
					/>
				</View>
				<View style={inputContainerStyle}>
					<TextInput 
						style={inputStyle}
						placeholder="Ngày sinh"
					/>
				</View>
				<View style={inputContainerStyle}>
					<TextInput 
						style={inputStyle}
						secureTextEntry
						placeholder="Mật khẩu"
						value={this.props.password}
						onChangeText={this.onPasswordChange.bind(this)}
					/>
				</View>
				<View 
					style={{ 
						flexDirection: 'row', 
						alignItems: 'center', 
						width: '100%', 
						height: 30, 
						paddingLeft: 30,
						marginTop: 20,
						marginBottom: 20 
					}}
				>
					<RadioForm 
						radio_props={[
							{ label: 'Nam', value: 0 },
							{ label: 'Nữ', value: 1 }
						]}
						initial={0}
						onPress={(value) => { this.setState({ value }); }}
						formHorizontal
						labelHorizontal
						borderWidth={0.5}
						buttonSize={10}
						buttonOuterSize={20}
						animation
					/>
				</View>
				<View style={buttonContainerStyle}>
					{this.renderButton()}
				</View>
				{this.renderError()}
			</ScrollView>
		);
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 18,
		alignSelf: 'center',
		color: 'red'
	},
	imageStyle: {
		width: '100%',
		height: 200
	},
	imageContainerStyle: {
		marginBottom: 20
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
	}
};

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
		signUp: ({ email, password }) => {
			dispatch(actions.signUp({ email, password }));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
