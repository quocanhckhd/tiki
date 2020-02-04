import React, { PureComponent } from 'react';
import { ScrollView, View, Dimensions, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../../actions/index';
import data from './category.json';
import Category from './Category';


const { height } = Dimensions.get('window');

class CategoryList extends PureComponent {

	goToDetail = title => {
		this.props.navigation.navigate('ProductCategory');
		this.props.showCategoryDetail(title);
	}

	render() {
		const { containerStyle, scrollViewcontainerStyle } = styles;

		const aboveLine = data.data.filter(category => category.id % 2 === 0);
		const downLine = data.data.filter(category => category.id % 2 !== 0);
		const list = aboveLine.map((category) => (
				<TouchableOpacity 
					style={{ marginBottom: 50 }} 
					key={category.id} 
					onPress={() => this.goToDetail(category.title)}
				>
					<Category 
						source={category.image} 
						key={category.id} 
						title={category.title} 
					/>
				</TouchableOpacity>
		));
		const list1 = downLine.map((category) => (
				<TouchableOpacity 
					style={{ marginBottom: 50 }} 
					key={category.id} 
					onPress={() => this.goToDetail(category.title)}
				>
					<Category 
						source={category.image} 
						key={category.id}
						title={category.title} 
					/>
				</TouchableOpacity>
		));
		return (
			<ScrollView horizontal contentContainerStyle={scrollViewcontainerStyle}>	
				<View style={containerStyle}>
					{ list }
				</View>
				<View style={containerStyle}>
					{ list1 }
				</View>
			</ScrollView>
		);
	}
}

const styles = {
	containerStyle: {
		height: height * 0.2,
		flexDirection: 'row',
		position: 'relative',
		zIndex: 10
	},
	scrollViewcontainerStyle: {
		height: height * 0.4,
		flexDirection: 'column'
	}
};

const mapStateToProps = state => {
	const { title } = state.title;
	return { title };
};

const mapDisPatchToProps = dispatch => ({
		showCategoryDetail: title => {
			dispatch(actions.showCategoryDetail(title));
		},	
});

export default connect(mapStateToProps, mapDisPatchToProps)(CategoryList);
