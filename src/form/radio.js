import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet
} from 'react-native'
import Icon from '../ifont'
import S from '../styles'
import V from '../variable'

const styles = StyleSheet.create({
  font: {
    paddingTop: 2,
    fontSize: V.fontSize14 * 1.3,
    marginRight: 2
  }
})

class Radio extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      checked: props.checked || false
    }
  }

  componentWillReceiveProps (newProps) {
    if ('checked' in newProps) {
      this.setState({
        checked: newProps.checked
      })
    }
  }

  render () {
    const {
      onChange,
      children,
      style,
      textStyle,
      color,
      ...others
    } = this.props
    const { checked } = this.state

    return (
      <TouchableWithoutFeedback
        onPress={() => onChange(!checked)}
      >
        <View {...others} style={[S.flexRow, S.flexAlignCenter, style]}>
          {checked ? (
            <Icon name='success' color={color || V.primaryColor} style={styles.font}/>
          ) : (
            <Icon name='circle' color={V.descColor} style={styles.font}/>
          )}
          {!children.type ? <Text style={[S.text, textStyle]}>{children}</Text> : children}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

Radio.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  color: PropTypes.string
}

export default Radio
