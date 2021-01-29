import React from 'react';
import PropTypes from 'prop-types';
import IconFont from './iconfont';
import glyphMap from './glyph_map';
import Variable from '../variable';

const Icon = (props) => {
  const {
    name,
    size = Variable.fontSize14,
    color = Variable.defaultColor,
    style,
  } = props;

  return <IconFont name={name} size={size} color={color} style={style} />;
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
};

Icon.glyphMap = glyphMap;

export default Icon;
