import React, {PropTypes} from 'react';
import {Text} from 'react-native';
import {IconFont, glyphMap} from './iconfont';
import G from '../global/variable';

const IFont = (props) => {
    const {
        name,
        size = G.baseFontSize,
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
    style: Text.propTypes.style
};

IFont.glyphMap = glyphMap;

export default IFont;