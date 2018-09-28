import React from 'react'
import {
  View,
  Text,
  ScrollView
} from 'react-native'

import { Button, S } from '../../src'

class ButtonWrap extends React.Component {
  static navigationOptions = {
    title: 'Button'
  }

  render () {
    return (
      <ScrollView style={[S.flex]}>
        <View style={S.padding8}>

          <Text>按钮类型</Text>

          <Button>默认按钮</Button>
          <Button type='primary'>主要按钮</Button>
          <Button type='warning'>警告按钮</Button>

          <Text>朴素按钮</Text>

          <Button plain>默认按钮</Button>
          <Button type='primary' plain>主要按钮</Button>
          <Button type='warning' plain>警告按钮</Button>

          <Text>禁用</Text>

          <Button disabled>默认按钮</Button>

          <Button style={S.marginTop8} hasLoading onPress={() => {
            return new Promise(resolve => {
              setTimeout(() => {
                resolve()
              }, 5000)
            })
          }}>loading 5000s</Button>

          <Button type='primary' style={S.marginTop8} hasLoading onPress={() => {
            return new Promise(resolve => {
              setTimeout(() => {
                resolve()
              }, 5000)
            })
          }}>loading 5000s</Button>
          <Button type='warn' style={S.marginTop8} hasLoading onPress={() => {
            return new Promise(resolve => {
              setTimeout(() => {
                resolve()
              }, 5000)
            })
          }}>loading 5000s</Button>

          <Button style={S.marginTop8}>default</Button>
          <Button style={S.marginTop8} disabled>default disabled</Button>

          <Button style={S.marginTop8} type='primary'>primary</Button>
          <Button style={S.marginTop8} type='primary' disabled>primary disabled</Button>

          <Button style={S.marginTop8} type='warn'>warn</Button>
          <Button style={S.marginTop8} type='warn' disabled>warn disabled</Button>

          <Button style={S.marginTop8} plain>plain default</Button>
          <Button style={S.marginTop8} plain disabled>plain default disabled</Button>

          <Button style={S.marginTop8} plain type='primary'>plain primary</Button>
          <Button style={S.marginTop8} plain type='primary' disabled>plain primary disabled</Button>

          <View style={[S.flex, S.flexRow, S.marginTop10]}>
            <Button
              type='primary'
              mini
            >primary</Button>
            <Button
              type='default'
              mini
            >default</Button>
            <Button
              type='warn'
              mini
            >warn</Button>
          </View>
        </View>
      </ScrollView>
    )
  }
}

export default ButtonWrap
