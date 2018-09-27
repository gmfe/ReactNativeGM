import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  TouchableHighlight,
  StyleSheet
} from 'react-native'
import V from '../variable'

const styles = StyleSheet.create({
  cell: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: V.cellGapH,
    paddingTop: V.cellGapV,
    paddingBottom: V.cellGapV,
    paddingRight: V.cellGapH,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: V.cellBorderColor
  },
  firstCell: {
    borderTopWidth: 0
  },
  inputCell: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0
  }
})

class Cell extends React.Component {
  render () {
    const { access, input, error, first, children, style, ...others } = this.props
    const childrenWithProps = React.Children.map(children, (child) => {
      if (access && child.type.displayName === 'CellFooter') {
        return React.cloneElement(child, { access: true })
      }
      if (input && child.type.displayName === 'CellBody') {
        return React.cloneElement(child, { input: true })
      }
      if (error && (child.type.displayName === 'CellHeader' || child.type.displayName === 'CellBody')) {
        return React.cloneElement(child, { error: true })
      }
      return child
    })
    return (
      <TouchableHighlight
        style={style}
        underlayColor={V.activeColor}
        {...others}
      >
        <View
          style={[
            styles.cell,
            first ? styles.firstCell : null,
            input ? styles.inputCell : null
          ]}
        >{childrenWithProps}</View>
      </TouchableHighlight>
    )
  }
}

Cell.propTypes = {
  first: PropTypes.bool,
  access: PropTypes.bool,
  input: PropTypes.bool,
  error: PropTypes.bool,
  children: PropTypes.node,
  style: PropTypes.object,
  others: PropTypes.object
}

export default Cell
