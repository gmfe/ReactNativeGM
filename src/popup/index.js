import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native'
import _ from 'lodash'
import Mask from '../mask'
import LayoutRoot from '../layer_root'
import S from '../styles'

const styles = StyleSheet.create({
  top: {
    justifyContent: 'flex-start',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0
  },
  bottom: {
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  },
  left: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  right: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
})

const animationInMap = {
  top: 'slideInDown',
  right: 'slideInRight',
  bottom: 'slideInUp',
  left: 'slideInLeft'
}

class Popup extends Component {
  render () {
    const {
      position,
      onCancel,
      children,
      style,
      ...rest
    } = this.props

    return (
      <Mask {...rest} animationIn={animationInMap[position]} onCancel={onCancel} style={[styles[position], style]}>
        <View style={[S.bgWhite]}>
          {children}
        </View>
      </Mask>
    )
  }
}

Popup.render = (props) => {
  return new Promise((resolve, reject) => {
    LayoutRoot.setComponent(LayoutRoot.TYPE.POPUP, (
      <Popup
        {...props}
        onCancel={() => {
          Popup.hide()
          reject(new Error())
        }}
      />
    ))
  })
}

Popup.hide = () => LayoutRoot.removeComponent(LayoutRoot.TYPE.POPUP)

Popup.propTypes = {
  position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  onCancel: PropTypes.func
}
Popup.defaultProps = {
  position: 'bottom',
  onCancel: _.noop
}

export default Popup
