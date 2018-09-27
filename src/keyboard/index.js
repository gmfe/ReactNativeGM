import React from 'react'
import { View, Dimensions, Text, TouchableHighlight } from 'react-native'
import PropTypes from 'prop-types'
import S from '../styles'
import V from '../variable'
import _ from 'lodash'

class Btn extends React.Component {
  render () {
    const { children, onPress, primary, style, disabled } = this.props
    return (
      <TouchableHighlight
        style={[S.flex, S.flexJustifyCenter, S.flexAlignCenter, S.borderBottom, S.borderRight, primary ? {
          backgroundColor: V.primaryColor
        } : {}, style]}
        underlayColor={primary ? V.primaryColorActive : V.activeColor}
        onPress={onPress || null}
        disabled={disabled}
      >
        <Text
          style={[{ fontSize: 22 }, primary ? { color: 'white' } : {}, primary && disabled ? { color: V.btnDefaultDisabledFontColor } : {}]}>{children}</Text>
      </TouchableHighlight>
    )
  }
}

class Keyboard extends React.Component {
  handlePress = (text) => {
    const { value, onChange, onSubmit } = this.props

    if (text === 'submit') {
      onSubmit(text)
      return
    }

    if (text === 'back') {
      onChange(value.slice(0, -1))
      return
    }

    onChange(value + text)
  }

  render () {
    const { height, value, btnOne, btnTwo, submitText } = this.props
    return (
      <View style={[S.bgWhite, {
        height,
        borderTopColor: V.borderColor,
        borderTopWidth: 1
      }]}>
        <View style={[S.flex, S.flexRow]}>
          <Btn onPress={this.handlePress.bind(this, 1)}>1</Btn>
          <Btn onPress={this.handlePress.bind(this, 2)}>2</Btn>
          <Btn onPress={this.handlePress.bind(this, 3)}>3</Btn>
          <Btn primary onPress={this.handlePress.bind(this, 'back')} disabled={!value}>退格</Btn>
        </View>
        <View style={[S.flex, S.flexRow]}>
          <Btn onPress={this.handlePress.bind(this, 4)}>4</Btn>
          <Btn onPress={this.handlePress.bind(this, 5)}>5</Btn>
          <Btn onPress={this.handlePress.bind(this, 6)}>6</Btn>
          {btnOne ? <Btn primary onPress={btnOne.onPress}>{btnOne.text}</Btn> : <Btn primary/>}
        </View>
        <View style={[S.flex, S.flexRow]}>
          <Btn onPress={this.handlePress.bind(this, 7)}>7</Btn>
          <Btn onPress={this.handlePress.bind(this, 8)}>8</Btn>
          <Btn onPress={this.handlePress.bind(this, 9)}>9</Btn>
          {btnTwo ? <Btn primary onPress={btnTwo.onPress}>{btnTwo.text}</Btn> : <Btn primary/>}
        </View>
        <View style={[S.flex, S.flexRow]}>
          <Btn onPress={this.handlePress.bind(this, 0)} style={{
            flex: 2
          }}>0</Btn>
          <Btn onPress={this.handlePress.bind(this, '.')}>.</Btn>
          <Btn primary onPress={this.handlePress.bind(this, 'submit')}>{submitText}</Btn>
        </View>
      </View>
    )
  }
}

Keyboard.propTypes = {
  height: PropTypes.number,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
  submitText: PropTypes.string,
  btnOne: PropTypes.shape({
    text: PropTypes.string,
    onPress: PropTypes.func
  }),
  btnTwo: PropTypes.shape({
    text: PropTypes.string,
    onPress: PropTypes.func
  })
}

Keyboard.defaultProps = {
  height: Dimensions.get('window').height * 0.43,
  onSubmit: _.noop,
  submitText: '完成'
}

export default Keyboard
