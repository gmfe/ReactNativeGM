import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    TextInput,
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    input: {
        padding: 0
    }
});

const InputComponent = (props) => {
    const {
        style,
        value,
        onChange,
        onChangeText,
        maxLength,
        defaultValue,
        ...others
    } = props;

    return (
        <View>
            <TextInput
                style={[styles.input, style]}
                autoCorrect={false}
                autoCapitalize='none'
                maxLength={maxLength}
                onChange={onChange}
                onChangeText={onChangeText}
                underlineColorAndroid='transparent'
                value={value}
                defaultValue={defaultValue}
                {...others}
            />

        </View>
    );
};

InputComponent.propTypes = {
    value: PropTypes.string,
    maxLength: PropTypes.number,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func,
    onChangeText: PropTypes.func,
    style: TextInput.propTypes.style
};


export default InputComponent;