import React, { PureComponent } from 'react';
import { ScrollView, View, Text } from 'react-native';
import BestFindItem from './BestFindItem';

class BestFind extends PureComponent {
	render() {
		const { containerStyle, itemStyle, itemContainerStyle, titleStyle, titleContainerStyle } = styles;
		return (
			<ScrollView contentContainerStyle={containerStyle} horizontal>	
				<View style={titleContainerStyle}>
					<Text style={titleStyle}>Tìm kiếm nhiều nhất</Text>
				</View>
				<View style={itemContainerStyle}>
					<View style={itemStyle}>
						<BestFindItem title="Bitis Hunter" />
						<BestFindItem title="Điện thoại" />
						<BestFindItem title="Đồ chơi" />
						<BestFindItem title="Sách" />
						<BestFindItem title="English" />
					</View>
					<View style={itemStyle}>
						<BestFindItem title="Điện thoại" />
						<BestFindItem title="Macbook" />
						<BestFindItem title="Laptop" />
						<BestFindItem title="Marvel" />
					</View>

				</View>
			</ScrollView>
		);
	}
}

const styles = {
	containerStyle: {
		height: 150,
		backgroundColor: '#ffffff',
		flexDirection: 'column',
		marginTop: 15,
		paddingBottom: 10
	},
	itemStyle: {
		flexDirection: 'row'
	},
	itemContainerStyle: {
		height: 130,
		flexDirection: 'column',
		position: 'relative',
		left: 10
	},
	titleContainerStyle: {
		height: 20,
		justifyContent: 'center',
		aignItems: 'flex-start',
		paddingTop: 10,
	},
	titleStyle: {
		fontSize: 18,
		fontFamily: 'Helvetica',
		fontWeight: '200',
		color: '#000',
		paddingLeft: 10
	}
};

export default BestFind;
