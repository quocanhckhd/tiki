import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Menu extends Component {

	goToAuthentication = () => {
		const { navigation } = this.props;
		navigation.navigate('TabNavigator');
	}

	goToMain = () => {
		const { navigation } = this.props;
		navigation.navigate('Home');
	}

	goToCategory = () => {
		const { navigation } = this.props;
		navigation.navigate('CategoryPage');
	}

	render() {
		const { lineStyle, textStyle, iconStyle } = styles;
		return (
			<ScrollView contentContainerStyle={{ position: 'relative', zIndex: 1000, flex: 1 }}>
				<View 
					style={{
						width: '100%', 
						height: 100, 
						backgroundColor: '#189eff', 
						flexDirection: 'row', 
						flex: 2, 
						marginBottom: 20
					}}
				>
					<View 
						style={{ 
							alignItems: 'center', 
							justifyContent: 'center', 
							marginRight: 30, 
							paddingLeft: 25
						}}
					>
						<Icon 
							name="user" 
							color="#ffffff" 
							size={40} 
							style={{
								marginRight: 10,
								alignSelf: 'center'
							}} 

						/>
					</View>
						<View 
							style={{ 
								flexDirection: 'column', 
								flex: 5, 
								alignItems: 'center', 
								justifyContent: 'center' 
							}}
						>
						<Text 
							style={{ 
								color: '#ffffff', 
								fontSize: 18, 
								alignSelf: 'flex-start' 
							}}
						>
							Tài khoản
						</Text>
						<Text 
							style={{ 
								color: '#ffffff', 
								fontSize: 14, 
								alignSelf: 'flex-start' 
							}}
						>
							Đăng nhập/Đăng ký
						</Text>
					</View>
					<View style={{ flex: 2 }}>
						<Text 
							style={{ 
								color: '#ffffff', 
								fontSize: 30, 
								position: 'relative',
								top: 30,
								left: 30,
								fontWeight: '100'
							}}
							onPress={this.goToAuthentication.bind(this)}
						>
							<Icon 
								name="angle-right" 
								color="#ffffff" 
								size={40} 
								iconStyle={{ 
									fontWeight: '100',
									position: 'relative',
									top: -10 
								}} 
							/>
						</Text>
					</View>
				</View>
				<View style={lineStyle}>
					
					<Text 
						style={textStyle}
						onPress={this.goToMain.bind(this)}
					>
						<Icon name="home" color="#000" size={25} style={iconStyle} />     Trang chủ
					</Text>
				</View>
				<View style={lineStyle}>
					<Text 
						style={textStyle}
						onPress={this.goToCategory.bind(this)}
					>
					<Icon name="home" color="#000" size={25} style={iconStyle} />     Danh mục sản phẩm
					</Text>
				</View>
				<View style={lineStyle}>
					
					<Text style={textStyle}>	
						<Icon name="home" color="#000" size={25} style={iconStyle} />        Quản lý đơn hàng
					</Text>
				</View><View style={lineStyle}>
					
					<Text style={textStyle}>
						<Icon name="heart" color="#000" size={25} style={iconStyle} />          Sản phẩm yêu thích
					</Text>
				</View>
				<View style={lineStyle}>
					<Text style={textStyle}>
						<Icon name="user" color="#000" size={25} style={iconStyle} />       Quản lý tài khoản
					</Text>
				</View>
				<View style={lineStyle}>
					<Text style={textStyle}>
						<Icon name="bell" color="#000" size={25} style={iconStyle} />      Thông báo của tôi
					</Text>
				</View>
				<View style={lineStyle}>
					<Text 
						style={{
							fontSize: 16,
							color: 'lightgray'
						}}
					>KHUYẾN MÃI HOT</Text>
				</View>
				<View style={lineStyle}>
					
					<Text style={textStyle}>Tiki Deal</Text>
				</View>
				<View style={lineStyle}>
					
					<Text style={textStyle}>Phiếu quà tặng</Text>
				</View>
				<View style={lineStyle}>
					
					<Text style={textStyle}>Ưu đãi cho chủ thẻ ngân hàng</Text>
				</View>
				<View style={lineStyle}>
					
					<Text style={textStyle}>HOT LINE: 
						<Text 
							style={{ color: 'green', fontWeight: '500' }}
						>1800 - 6963
						</Text> (Miễn phí)
					</Text>
				</View>
				<View style={lineStyle}>
					
					<Text style={textStyle}>Cài đặt</Text>
				</View>
				<View style={lineStyle}>
				
					<Text style={textStyle}>Hỗ trợ khách hàng</Text>
				</View>
				<View style={lineStyle}>
					
					<Text style={textStyle}>Ưu đãi cho chủ thẻ ngân hàng</Text>
				</View>
			</ScrollView>
		);
	}
}

const styles = {
	//Style for each child view
	lineStyle: {
		width: '100%',
		height: 60,
		justifyContent: 'center',
		flex: 1,
		position: 'relative',
		left: 20
	},
	textStyle: {
		fontSize: 16,
		alignItems: 'flex-start'
	},
	iconStyle: {
		marginRight: 10,
		alignItems: 'flex-start',
		paddingLeft: 25
	},
	
};

export default Menu;
