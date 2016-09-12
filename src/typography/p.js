import React, {PropTypes} from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';
import V from '../variable';

const P = (props) => {
    const {
        style,
        children,
        ...others,
    } = props;

    const styleObj = StyleSheet.flatten(style || {});
    const fontSize = styleObj.fontSize || V.baseFontSize;
    const lineHeight = fontSize * ((V.baseLineHeight - 1) / 2 + 1);

    return (
        <Text
            style={[style, {
                fontSize,
                lineHeight,
                paddingBottom: (V.baseLineHeight - 1) / 2 * fontSize
            }]}
            {...others}
        >{children}</Text>
    );
};

P.propTypes = {
    style: Text.propTypes.style,
    children: PropTypes.node
};

export default P;