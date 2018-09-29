import React from 'react'
import {
  View
} from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { Page, Cells, Cell, CellBody, CellFooter } from '../src'
import _ from 'lodash'

import Button from './pages/button'
import Icon from './pages/icon'
import Form from './pages/form'

console.disableYellowBox = true

const pages = {
  button: {
    screen: Button
  },
  icon: {
    screen: Icon
  },
  form: {
    screen: Form
  }
}

class Home extends React.Component {
  handlePress = (page) => {
    this.props.navigation.navigate(page)
  }

  render () {
    return (
      <Page onRefresh={() => {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve()
          }, 2000)
        })
      }}>
        <Cells>
          {_.map(pages, (v, k) =>
            <Cell key={k} access onPress={this.handlePress.bind(this, k)}>
              <CellBody>{k + ' ' + v.title}</CellBody>
              <CellFooter/>
            </Cell>
          )}
        </Cells>
      </Page>
    )
  }
}

const Navigator = createStackNavigator({
  home: {
    screen: Home
  },
  ...pages
}, {
  initialRouteName: 'icon'
})

class App extends React.Component {
  render () {
    return (
      <View style={{ flex: 1 }}>
        <Navigator/>
      </View>
    )
  }
}

export default App
