import React, {PropTypes} from 'react';
import {
    StyleSheet,
    TextInput
} from 'react-native';
import V from '../variable';

const styles = StyleSheet.create({
    input: {
        color: V.defaultColor,
        fontSize: V.cellFontSize,
        height: V.cellLineHeight,
        lineHeight: V.cellFontSize * V.baseLineHeight
    }
});

const Input = (props) => {
    const {
        value,
        onChange,
        onChangeText,
        style,
        ...others
    } = props;

    return (
        <TextInput
            style={[styles.input, style]}
            value={value}
            onChange={onChange}
            onChangeText={onChangeText}
            {...others}
        />
    );
};

Input.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    onChangeText: PropTypes.func,
    style: TextInput.propTypes.style
};

export default Input;
