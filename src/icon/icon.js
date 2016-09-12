import React, {PropTypes} from 'react';
import {Text} from 'react-native';
import {Weui, glyphMap} from './weui';
import G from '../global/variable';

const Icon = (props) => {
    const {
        name,
        size = G.baseFontSize,
        color = G.defaultColor,
        style
    } = props;

    return (
        <Weui
            name={name}
            size={size}
            color={color}
            style={style}
        />
    );
};

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.number,
    color: PropTypes.string,
    style: Text.propTypes.style,
};

Icon.glyphMap = glyphMap;

export default Icon;