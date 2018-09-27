import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  StyleSheet
} from 'react-native'
import V from '../variable'

const styles = StyleSheet.create({
  cells: {
    marginTop: V.cellsMarginTop,
    backgroundColor: V.cellBg,
    overflow: 'hidden',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: V.cellBorderColor
  }
})

class Cells extends React.Component {
  render () {
    const { children, style, ...others } = this.props
    const childrenWithProps = React.Children.map(children, (child, idx) => {
      if (idx === 0) {
        return React.cloneElement(child, { first: true })
      }
      return child
    })
    return (
      <View style={[styles.cells, style]} {...others}>
        {childrenWithProps}
      </View>
    )
  }
}

Cells.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  others: PropTypes.object
}

export default Cells
