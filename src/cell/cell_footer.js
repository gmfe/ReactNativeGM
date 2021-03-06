import React from 'react'
import PropTypes from 'prop-types'
import { Text as RNText, View, StyleSheet } from 'react-native'
import Text from '../text'
import V from '../variable'
import Icon from '../ifont'

const styles = StyleSheet.create({
  cellFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5
  },
  cellFooterText: {
    textAlign: 'center',
    color: V.descColor,
    fontSize: V.fontSize14
  },
  vcode: {
    width: 100,
    height: 44
  }
})

class CellFooter extends React.Component {
  render () {
    const { children, style, access, ...others } = this.props
    const childrenWithProps = React.Children.map(children, child => {
      if (!child.type) {
        return <Text style={[styles.cellFooterText, style]} {...others}>{child}</Text>
      }
      if (child.type && child.type.displayName === 'Image' && !child.props.style) {
        return React.cloneElement(child, { style: [styles.vcode, child.props.style] })
      }
      return child
    })
    return (
      <View style={styles.cellFooter}>
        {childrenWithProps}
        {access ? (
          <Icon
            name='right-small'
            size={V.fontSize14}
            style={{ marginLeft: 5, color: V.descColor, marginTop: 2 }}
          />
        ) : undefined}
      </View>
    )
  }
}

CellFooter.displayName = 'CellFooter'
CellFooter.propTypes = {
  access: PropTypes.bool,
  children: PropTypes.node,
  style: PropTypes.object,
  others: PropTypes.object
}

export default CellFooter
