import React from 'react'
import { View, Text } from 'react-native'

import {
  Page,
  Button,
  Popup,
  S
} from '../../src'

class Component extends React.Component {
  static navigationOptions = {
    title: 'Popup'
  }

  render () {
    return (
      <Page>
        <Button
          style={S.marginTop8}
          type={'default'}
          onPress={() => {
            Popup.render({
              children: <View style={{ height: 300 }}>
                <Text style={[S.text]}>浮层浮层浮层</Text>
              </View>
            }).catch(() => {
              console.log('关闭啦')
            })
          }}
        >
          默认底部弹出
        </Button>
        <Button
          style={S.marginTop8}
          type={'default'}
          onPress={() => {
            Popup.render({
              position: 'top',
              children: <View style={{ height: 300 }}>
                <Text style={[S.text]}>浮层浮层浮层</Text>
              </View>
            })
          }}
        >
          Top
        </Button>
        <Button
          style={S.marginTop8}
          type={'default'}
          onPress={() => {
            Popup.render({
              position: 'left',
              children: <View style={{ width: 300 }}>
                <Text style={[S.text]}>浮层浮层浮层</Text>
              </View>
            })
          }}
        >
          Left
        </Button>
        <Button
          style={S.marginTop8}
          type={'default'}
          onPress={() => {
            Popup.render({
              position: 'right',
              children: <View style={{ width: 100 }}>
                <Text style={[S.text]}>浮层浮层浮层</Text>
              </View>
            })
          }}
        >
          Right
        </Button>
      </Page>
    )
  }
}

export default Component
