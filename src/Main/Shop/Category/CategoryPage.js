import React, { PureComponent } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import data from './category.json';
import * as actions from '../../../actions/index';
import Category from './Category';

class CategoryPage extends PureComponent {

	
	onPress = title => {
		this.props.navigation.navigate('ProductCategory');
		this.props.showCategoryDetail(title);
	}

	goBack = () => {
		const { navigation } = this.props;
		navigation.goBack();
	}

	render() {
		const firstColumn = data.data.filter(category => category.id % 3 === 0);
		const secondColumn = data.data.filter(category => category.id % 3 === 1);
		const thirdColumn = data.data.filter(category => category.id % 3 === 2);

		const list1 = firstColumn.map(category => (
			<View key={category.id} style={{ marginBottom: 50 }}>
				<TouchableOpacity onPress={() => this.onPress(category.title)}>
					<Category 
						source={category.image} 
						key={category.id} 
						title={category.title} 
					/>
				</TouchableOpacity>
			</View>
		));

		const list2 = secondColumn.map(category => (
			<View key={category.id} style={{ marginBottom: 50 }}>
				<TouchableOpacity onPress={() => this.onPress(category.title)}>
					<Category 
						source={category.image} 
						key={category.id} 
						title={category.title} 
					/>
				</TouchableOpacity>
			</View>
		));

		const list3 = thirdColumn.map(category => (
			<View key={category.id} style={{ marginBottom: 50 }}>
				<TouchableOpacity>
					<Category 
						source={category.image} 
						key={category.id} 
						title={category.title} 
					/>
				</TouchableOpacity>
			</View>
		));

		console.log(list3);
		const { containerStyle } = styles;
		return (
			<ScrollView>
				<View 
					style={{
						marginTop: 0,
						width: '100%',
						height: 60,
						backgroundColor: '#ffffff',
						marginBottom: 50,
						flexDirection: 'row',
						flex: 1
					}}
				>
					<View style={{ flex: 1, justifyContent: 'center', paddingLeft: 10 }}>
						<Text 
							onPress={this.goBack.bind(this)}
						>
							<Icon name="angle-right" size={40} color="#189eff" />
						</Text>
					</View>
					<Text
						style={{
							fontSize: 20,
							textAlign: 'center',
							color: '#000',
							paddingTop: 20,
							flex: 4
						}}
					>
						Danh mục các mặt hàng
					</Text>
				</View>
				<View style={{ flexDirection: 'row' }}>
					<View style={containerStyle}>
						{ list1 }
					</View>
					<View style={containerStyle}>
						{ list2 }
					</View>
					<View style={containerStyle}>
						{ list3 }
					</View>
				</View>
			</ScrollView>
		);
	}
}	

const styles = {
	containerStyle: {
		flexDirection: 'column'
	}
};

const mapStateToProps = state => {
	const { title } = state.title;
	return { title };
};

const mapDispatchToProps = dispatch => ({
	showCategoryDetail: title => {
		dispatch(actions.showCategoryDetail(title));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
