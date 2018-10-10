import React from 'react'
import {
  View
} from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { Page, Cells, Cell, CellBody, CellFooter, LayerRoot } from '../src'
import _ from 'lodash'

import ButtonDemo from './pages/button'
import IconDemo from './pages/icon'
import FormDemo from './pages/form'
import CellDemo from './pages/cell'
import DialogDemo from './pages/dialog'
import PopupDemo from './pages/popup'
import ActionSheetDemo from './pages/action_sheet'

console.disableYellowBox = true

const pages = {
  button: {
    screen: ButtonDemo
  },
  icon: {
    screen: IconDemo
  },
  form: {
    screen: FormDemo
  },
  cell: {
    screen: CellDemo
  },
  dialog: {
    screen: DialogDemo
  },
  popup: {
    screen: PopupDemo
  },
  actionSheet: {
    screen: ActionSheetDemo
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
  initialRouteName: 'actionSheet'
})

class App extends React.Component {
  render () {
    return (
      <View style={{ flex: 1 }}>
        <Navigator/>
        <LayerRoot/>
      </View>
    )
  }
}

export default App
