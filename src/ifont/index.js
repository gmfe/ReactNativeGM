import React from 'react'
import PropTypes from 'prop-types'
import { IconFont, glyphMap } from './iconfont'
import G from '../global/variable'

const Icon = (props) => {
  const {
    name,
    size = G.fontSize14,
    color = G.defaultColor,
    style
  } = props

  return (
    <IconFont
      name={name}
      size={size}
      color={color}
      style={style}
    />
  )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string
}

Icon.glyphMap = glyphMap

export default Icon
