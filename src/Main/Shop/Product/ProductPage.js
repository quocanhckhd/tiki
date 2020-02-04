import React, { PureComponent } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../../actions/index';
import data from './products.json';
import Product from './Product';

class ProductPage extends PureComponent {

	//go to product to seen the product detail
	onButtonPress = (id) => {
		this.props.navigation.navigate('ProductDetail');
		this.props.showProductDetail(id);
	}

	render() {
		const { containerStyle, textContainerStyle, textStyle, leftSideStyle, rightSideStyle } = styles;
		const leftSide = data.products.filter(product => product.id % 2 === 0);
		const rightMenu = data.products.filter(product => product.id % 2 !== 0);
		const list = leftSide.map(product => {
			const discount = (product.newPrice / product.oldPrice) * 100;
			return (
				<TouchableOpacity onPress={() => this.onButtonPress(product.id)}>
					<Product 
						key={product.id}
						source={product.image}
						name={product.name}
						newPrice={product.newPrice}
						oldPrice={product.oldPrice}
						discount={discount}
						navigation={this.props.navigation}
					/>
				</TouchableOpacity>
			);
		});	

		const list1 = rightMenu.map(product => {
			const discount = (product.newPrice / product.oldPrice) * 100;
			return (
				<TouchableOpacity onPress={() => this.onButtonPress(product.id)}>
					<Product 
						key={product.id}
						source={product.image}
						name={product.name}
						newPrice={product.newPrice}
						oldPrice={product.oldPrice}
						discount={discount}
						navigation={this.props.navigation}
					/>
				</TouchableOpacity>
			);
		});

		return (
			<ScrollView contentContainerStyle={containerStyle}>
				<View style={textContainerStyle}>
					<Text style={textStyle}>Tiki Deal</Text>
				</View>
				<View style={{ flexDirection: 'row' }}>
					<View style={leftSideStyle}>
						{ list }
					</View>
					<View style={rightSideStyle}>
						{ list1 }
					</View>
				</View>
			</ScrollView>
		);
	}
}

const styles = {
	containerStyle: {
		backgroundColor: '#ffffff'
	},
	textStyle: {
		fontSize: 20,
		fontFamily: 'Helvetica',
		color: '#000'
	},
	textContainerStyle: {
		marginBottom: 10,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center'
	},
	leftSideStyle: {
		flexDirection: 'column'
	},	
	rightSideStyle: {
		flexDirection: 'column'
	}
};

const mapStateToProps = state => {
	const { id } = state.title;
	return { id };
};

const mapDispatchToProps = dispatch => ({
	showProductDetail: id => dispatch(actions.showProductDetail(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);

