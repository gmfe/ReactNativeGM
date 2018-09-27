import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import Mask from '../mask'
import LayoutRoot from '../layer_root'
import _ from 'lodash'
import S from '../styles'

const styles = StyleSheet.create({
  content: {
    marginLeft: 60
  }
})

class Popup extends Component {
  render () {
    const {
      onCancel,
      children
    } = this.props

    return (
      <Mask onCancel={onCancel}>
        <TouchableWithoutFeedback onPress={null}>
          <View style={[S.flex, styles.content, S.bgWhite]}>
            {children}
          </View>
        </TouchableWithoutFeedback>
      </Mask>
    )
  }
}

Popup.render = (children) => {
  return new Promise((resolve, reject) => {
    LayoutRoot.setComponent(LayoutRoot.TYPE.POPUP, (
      <Popup
        onCancel={() => {
          Popup.hide()
          reject(new Error())
        }}
      >
        {children}
      </Popup>
    ))
  })
}

Popup.hide = () => LayoutRoot.removeComponent(LayoutRoot.TYPE.POPUP)

Popup.propTypes = {
  onCancel: PropTypes.func
}
Popup.defaultProps = {
  onCancel: _.noop
}

export default Popup
