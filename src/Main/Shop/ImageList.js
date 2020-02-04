import React, { Component } from 'react';
import { StyleSheet, Dimensions, Platform, View, Image } from 'react-native'; 
import SwiperFlatList from 'react-native-swiper-flatlist';

const { width } = Dimensions.get('window');

class ImageList extends Component {

	constructor(props) {
		super(props);
	
		this.state = {
			dataSource: [
				{	
					url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFvw0UfwgekatdBKG9YM5C3aJ_Rexh-v50KYKiBvvK4ntyFJ22',
					title: '',
					caption: ''
				},
				{
					url: 'https://salt.tikicdn.com/ts/banner/39/ee/c6/1cf7156f19b81a0efb436920660536c9.png',
					title: '',
					caption: ''
				},
				{
					url: 'https://salt.tikicdn.com/ts/banner/8d/4f/04/460b99ae72d7187c3144f0bb6d469d40.png',
					title: '',
					caption: ''
				},
				{
					url: 'https://salt.tikicdn.com/ts/banner/8d/4f/04/460b99ae72d7187c3144f0bb6d469d40.png',
					title: '',
					caption: ''
				},
				{
					url: 'https://salt.tikicdn.com/ts/banner/b9/6e/7e/5e31590b55f2025ef4df8eefdb958a73.png',
					title: '',
					caption: ''
				},
				{
					url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRg_HdIwBQGjMA7VwVKIbTppDfOCVbcsv0K4aVPXVTyIP1VLnT',
					title: '',
					caption: ''
				},
				{
					url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdtWGTXdU0zDlbw3JTXCwXr92azpeXWaubkit7JgIVw228OEWY',
					title: '',
					caption: ''
				}
			]
		};
	}

	componentDidMount() {
		this.setState({
			interval: setInterval(() => {
				this.setState({
				position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
				});
			}, 5000)
		});
	}

	render() {
		const { itemStyle, imageStyle } = styles; 

		const listImage = this.state.dataSource.map((image, id) => (
			<View key={id} style={itemStyle}> 
				<Image 
					style={imageStyle} 
					source={{ uri: image.url || 'https://salt.tikicdn.com/ts/banner/8d/4f/04/460b99ae72d7187c3144f0bb6d469d40.png' }}
				/>
			</View>
		));
		return (
			<SwiperFlatList 
				autoplay
				width={width}
				height={150}
				autoplayLoop
			>
				{ listImage }
			</SwiperFlatList>
		);
	}
}

const styles = StyleSheet.create({ 
	MainContainer: {
		flex: 1,
		alignItems: 'center',
		paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
		backgroundColor: '#FFF8E1'
	},
	itemStyle: {
		width,
		height: 200
	},
	imageStyle: {
		width,
		height: 200
	}
});

export default ImageList;
