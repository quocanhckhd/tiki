import React, { PureComponent } from 'react';
import { ScrollView, View, Dimensions } from 'react-native';
import Media from './Media';

const { height } = Dimensions.get('window');

class MediaList extends PureComponent {
	render() {
		const { containerStyle, scrollViewcontainerStyle } = styles;
		return (
			<ScrollView horizontal showsHorizontalScrollIndicator contentContainerStyle={scrollViewcontainerStyle}>	
				<View style={containerStyle}>
					<Media icon="home" title="Mua thẻ điện thoại" />
					<Media icon="home" title="Vé máy bay" />
					<Media icon="home" title="Phiếu quà tặng" />
					<Media icon="home" title="Thẻ game" />
					<Media icon="home" title="Mua bảo hiểm online" />
					<Media icon="home" title="Thẻ 3G/4G" />
					<Media icon="home" title="Đặt phòng/Booking" />
				</View>
			</ScrollView>
		);
	}
}

const styles = {
	containerStyle: {
		height: height * 0.2,
		flexDirection: 'row',
	},
	scrollViewcontainerStyle: {
		height: height * 0.2,
		flexDirection: 'column'
	}
};

export default MediaList;
