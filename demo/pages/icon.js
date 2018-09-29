import React from 'react'

import {
  View,
  Text,
  ScrollView
} from 'react-native'

import {
  Styles as S,
  Variable as V,
  Icon
} from '../../src/index'
import _ from 'lodash'

class Component extends React.Component {
  static navigationOptions = {
    title: 'Icon'
  }

  render () {
    return (
      <ScrollView>
        <View>
          <Text>默认</Text>
          <Icon name='ok'/>
          <Text>自定义颜色</Text>
          <Icon name='ok' color={V.primaryColor}/>
          <Text>自定义大小</Text>
          <Icon name='ok' size={30}/>
          <Text>自定义style，且优先级更高</Text>
          <Icon name='ok' color={V.primaryColor} size={30} style={{
            color: V.warningColor,
            fontSize: 25,
            borderWidth: 1,
            borderColor: 'red'
          }}/>
        </View>

        <Text>IFont</Text>
        <View>
          {_.map(Icon.glyphMap, (value, key) => (
            <View key={key} style={S.flexRow}>
              <Icon name={key} size={30}/>
              <Text>{key}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    )
  }
}

export default Component
