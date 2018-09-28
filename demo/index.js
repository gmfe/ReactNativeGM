import React from 'react'
import {
  View
} from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { Cells, Cell, CellBody, CellFooter } from '../src'
import _ from 'lodash'

import Button from './pages/button'

console.disableYellowBox = true

const pages = {
  button: {
    screen: Button,
    title: '标题'
  }
}

class Home extends React.Component {
  handlePress = (page) => {
    this.props.navigation.navigate(page)
  }

  render () {
    return (
      <View>
        <Cells>
          {_.map(pages, (v, k) =>
            <Cell key={k} access onPress={this.handlePress.bind(this, k)}>
              <CellBody>{k + ' ' + v.title}</CellBody>
              <CellFooter/>
            </Cell>
          )}
        </Cells>
      </View>
    )
  }
}

const Navigator = createStackNavigator({
  home: {
    screen: Home
  },
  ...pages
}, {
  initialRouteName: 'button'
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
