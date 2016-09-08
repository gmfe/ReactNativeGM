import React, { Component } from 'react';
import Parse from 'parse/react-native';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './App';
import env from './env';

function setup() {
  console.disableYellowBox = true;

  Parse.initialize('example');
  Parse.serverURL = `${env.serverURL}/parse`;

  class Root extends Component {
    constructor() {
      super();
      this.state = {
        isLoading: true,
        store: configureStore(() => this.setState({ isLoading: false })),
      };
    }
    render() {
      if (this.state.isLoading) {
        return null;
      }
      return (
        <Provider store={this.state.store}>
          <App />
        </Provider>
      );
    }
  }

  return Root;
}

export default setup;
