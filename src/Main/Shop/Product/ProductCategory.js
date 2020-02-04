import React, { PureComponent } from 'react';
import { ScrollView, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import data from './products.json';
import Product from './Product'; 
import Header from '../../Header';

class ProductCategory extends PureComponent {

//go Back to the main screen
	goBack = () => {
		this.props.navigation.goBack();
	}


	render() {
		const { title } = this.props;
		const { containerStyle, leftContainerStyle, rightContainerStyle } = styles;

		//Filter products which have the same category with the props title
		const filter = data.products.filter(product => product.category === title);


		const leftSide = filter.filter(product => product.id % 2 === 0);
		const rightSide = filter.filter(product => product.id % 2 !== 0);

		//List all the products item in the first column
		const list = leftSide.map(product => {
			const discount = (product.newPrice / product.oldPrice) * 100;
			return (
				<Product 
					key={product.id}
					source={product.image}
					name={product.name}
					newPrice={product.newPrice}
					oldPrice={product.oldPrice}
					discount={discount}
				/>
			);
		});

	//List all the products items in the second column
		const list1 = rightSide.map(product => {
			const discount = (product.newPrice / product.oldPrice) * 100;
			return (
				<Product 
					key={product.id}
					source={product.image}
					name={product.name}
					newPrice={product.newPrice}
					oldPrice={product.oldPrice}
					discount={discount}
				/>
			);
		});

		return (
			<ScrollView>
				<View style={containerStyle}>
					<Header 
						navigation={this.props.navigation} 
						goBack={this.goBack.bind(this)} 
						content={this.props.title} 
					/>
					<Text 
						style={{ 
							alignSelf: 'flex-start', 
							paddingTop: 5,
							paddingLeft: 5 
						}}
						onPress={this.goBack.bind(this)}
					>
						<Icon name="close" size={30} color="#189eff" />
					</Text>
					<View style={{ flexDirection: 'row' }}>
						<View style={leftContainerStyle}>
							{ list }
						</View>	
						<View style={rightContainerStyle}>
							{ list1 }
						</View>
					</View>
				</View>
			</ScrollView>
		);
	}
}

const styles = {
//Style for Product Category screen
	containerStyle: {
		height: 1250,
		width: '100%',
		flexDirection: 'column',
		flex: 1
	},
//Style for first column item in ProductCategory screen
	leftContainerStyle: {
		flexDirection: 'column'
	},
//Style for second column in ProductCategory screen
	rightContainerStyle: {
		flexDirection: 'column'
	}
};

export default ProductCategory;
