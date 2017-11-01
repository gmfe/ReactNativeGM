import React from 'react';
import PropTypes from 'prop-types';
import {IconFont, glyphMap} from './iconfont';
import G from '../global/variable';

const IFont = (props) => {
    const {
        name,
        size = G.fontSize14,
        color = G.defaultColor,
        style
    } = props;

    return (
        <IconFont
            name={name}
            size={size}
            color={color}
            style={style}
        />
    );
};

IFont.propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.number,
    color: PropTypes.string,
    style: PropTypes.object
};

IFont.glyphMap = glyphMap;

export default IFont;