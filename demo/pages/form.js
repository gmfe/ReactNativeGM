import React from 'react'
import {
  View, Text,
  TextInput,
  Dimensions
} from 'react-native'
import {
  Styles as S,
  Button,
  Radio,
  Mask
} from '../../src/index'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

class Component extends React.Component {
  static navigationOptions = {
    title: 'Form'
  }

  state = {
    value: '',
    checked: false,
    show: false
  }

  componentDidMount () {
    setInterval(() => {
      console.log(Dimensions.get('window').height)
    }, 2000)
  }

  render () {
    return (
      <View style={{ flex: 1 }}>
        <KeyboardAwareScrollView
          viewIsInsideTabBar={false}
        >
          <View>
            <Text>Input TODO</Text>
            <TextInput
              style={[S.input, S.border]}
              value={this.state.value}
              onChangeText={value => {
                this.setState({
                  value
                })
              }}
            />
          </View>

          <View>
            <Text>Radio</Text>
            <Radio checked={this.state.checked} onChange={(checked) => {
              this.setState({
                checked
              })
            }}>回家</Radio>
          </View>

          <View>
            <Text>键盘遮挡场景2</Text>

            <Button type='primary' onPress={() => {
              this.setState({
                show: true
              })
            }}>点我打开浮层 input</Button>
            <View style={{ height: 150 }}/>

            <View style={{ padding: 10, backgroundColor: 'white' }}>
              <Text>
                键盘遮挡场景1
              </Text>
              <TextInput
                style={[S.input, S.border]}
                value={this.state.value}
                onChangeText={value => {
                  this.setState({
                    value
                  })
                }}
              />
            </View>
          </View>
          <View style={{ height: 100 }}/>
        </KeyboardAwareScrollView>
        <Mask
          isVisible={this.state.show}
          onCancel={() => this.setState({ show: false })}
          style={S.flexJustifyEnd}
        >
          <View style={[S.padding8, S.bgWhite]}>
            <Text>购买数量</Text>
            <TextInput
              style={[S.input, S.border, S.marginTop8, S.marginBottom8]}
              value={this.state.value}
              onChangeText={value => {
                this.setState({
                  value
                })
              }}
            />
            <Button type='primary'>加入购物车</Button>
          </View>
        </Mask>
      </View>
    )
  }
}

export default Component
