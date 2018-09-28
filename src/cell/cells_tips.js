import React from 'react'
import PropTypes from 'prop-types'
import { Text, StyleSheet, Platform } from 'react-native'
import V from '../variable'

const styles = StyleSheet.create({
  cellsTips: {
    paddingLeft: V.cellGapH,
    paddingRight: V.cellGapH,
    fontSize: V.cellTipsFontSize,
    color: V.descColor,
    marginBottom: V.cellTipsFontSize * 0.3,
    lineHeight: V.cellTipsFontSize * V.baseLineHeight,
    ...Platform.select({
      android: {
        lineHeight: Math.round(V.cellTipsFontSize * V.baseLineHeight)
      }
    })
  }
})

class CellsTips extends React.Component {
  render () {
    const { children, style, ...others } = this.props
    return <Text style={[styles.cellsTips, style]} {...others}>{children}</Text>
  }
}

CellsTips.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  others: PropTypes.object
}

export default CellsTips
