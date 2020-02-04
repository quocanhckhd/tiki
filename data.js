import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import axios from 'axios';
import * as actions from './actions';


class Data extends Component {

  constructor(props) {
    super(props);
    this.state = {
      token: '',
      res: []
    }
  }

  componentDidMount() {

    const user = {
      username: 'admin',
      password: 'password'
    }

    axios.post('http://171.244.6.6/api/auth/login', user)
    .then((res) => {
      this.props.getToken(res.data.token);
      return axios.get('http://171.244.6.6/api/users', 
              {
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${res.data.token}`
                }
              }).then(res1 => this.setState({ res: res1.data }));
    })
    .catch(err => console.log(err));

    axios.get('http://171.244.6.6/api/users', 
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.state.token}`
      }
    }).then(res => console.log(res.data));
  }

  render() {
    // const list = this.state.res.map(item => <Text>{item.username}</Text>);
    // const list1 = this.props.tokens.map(item => <Text>{item}</Text>);
    return(
      <View>
          <Text>{ this.props.tokens }</Text>
        </View>
    );
  }
}


const mapStateToProps = ({ tokens }) => ({
  tokens
});

const mapDispatchToProps = dispatch => ({
  getToken: token => dispatch(actions.getToken(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(Data);