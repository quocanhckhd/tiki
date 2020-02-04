import React, { PureComponent } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../../actions/index';
import Product from './Product';
import data from './products.json';

class ProductList extends PureComponent {

//go to product to seen the product detail
	onButtonPress = (id) => {
		this.props.navigation.navigate('ProductDetail');
		this.props.showProductDetail(id);
	}

	render() {
		const leftSide = data.products.filter(product => (product.id % 2 === 0));
		const rightSide = data.products.filter(product => (product.id % 2 !== 0));
		const { containerStyle, leftContainerStyle, rightContainerStyle } = styles;
		const list = leftSide.map(product => {
			const discount = (product.newPrice / product.oldPrice) * 100;
			return (
				<TouchableOpacity key={product.id} onPress={() => this.onButtonPress(product.id)}>
					<Product 
						key={product.id}
						source={product.image}
						name={product.name}
						newPrice={product.newPrice}
						oldPrice={product.oldPrice}
						discount={discount}
						// navigation={this.props.navigation}
					/>
				</TouchableOpacity>
			);
		});
		const list1 = rightSide.map(product => {
			const discount = (product.newPrice / product.oldPrice) * 100;
			return (
				<TouchableOpacity key={product.id} onPress={() => this.onButtonPress(product.id)}>
					<Product 
						key={product.id}
						source={product.image}
						name={product.name}
						newPrice={product.newPrice}
						oldPrice={product.oldPrice}
						discount={discount}
						// navigation={this.props.navigation}
					/>
				</TouchableOpacity>
			);
		});
		console.log(list1);
		return (
			<View style={containerStyle}>
				<View style={leftContainerStyle}>
					{ list }
				</View>
				<View style={rightContainerStyle}>
					{ list1 }
				</View>
			</View>
		);
	}
}

const styles = {
	containerStyle: {
		height: 5400,
		width: '100%',
		flexDirection: 'row',
	},
	rightContainerStyle: {
		flexDirection: 'column',
	},
	leftContainerStyle: {
		flexDirection: 'column',
	}
};

const mapStateToProps = state => {
	const { id } = state.title;
	return { id };
};

const mapDispatchToProps = dispatch => ({
	showProductDetail: id => dispatch(actions.showProductDetail(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
