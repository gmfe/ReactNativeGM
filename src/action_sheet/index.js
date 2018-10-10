import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  TouchableHighlight,
  ScrollView
} from 'react-native'
import _ from 'lodash'
import V from '../variable'
import S from '../styles'
import Mask from '../mask'
import Button from '../button'
import LayoutRoot from '../layer_root'

class ActionSheet extends React.Component {
  render () {
    const {
      list,
      style,
      onCancel,
      onSelect,
      ...rest
    } = this.props

    return (
      <Mask
        {...rest}
        animationIn='slideInUp'
        onCancel={onCancel}
        style={[S.flexJustifyEnd, S.margin8, style]}
      >
        <View>
          <View style={[S.bgWhite, {
            maxHeight: 300
          }]}>
            <ScrollView>
              <View>
                {_.map(list, v => (
                  <TouchableHighlight
                    key={v.value}
                    underlayColor={V.activeColor}
                    onPress={() => onSelect(v.value)}
                    style={[S.padding12, S.borderBottom, {
                      minWidth: 250
                    }]}
                  >
                    <Text style={S.text}>{v.text}</Text>
                  </TouchableHighlight>
                ))}
              </View>
            </ScrollView>
          </View>
          <Button onPress={onCancel} style={S.marginTop4}>取消</Button>
        </View>
      </Mask>
    )
  }
}

ActionSheet.render = (props) => {
  return new Promise((resolve, reject) => {
    LayoutRoot.setComponent(LayoutRoot.TYPE.POPUP, (
      <ActionSheet
        {...props}
        onSelect={v => {
          ActionSheet.hide()
          resolve(v)
        }}
        onCancel={() => {
          ActionSheet.hide()
          props.onCancel && props.onCancel()
          reject(new Error())
        }}
      />
    ))
  })
}

ActionSheet.hide = () => LayoutRoot.removeComponent(LayoutRoot.TYPE.POPUP)

ActionSheet.propTypes = {
  list: PropTypes.array.isRequired, // [{value, text}]
  onSelect: PropTypes.func.isRequired,
  onCancel: PropTypes.func
}

ActionSheet.defaultProps = {
  onCancel: _.noop
}

export default ActionSheet
