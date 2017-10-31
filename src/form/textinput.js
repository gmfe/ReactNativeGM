import React from 'react';
import {
    TextInput as RNTextInput,
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    input: {
        padding: 0
    }
});

const TextInput = (props) => {
    const {
        style,
        ...others
    } = props;

    return (
        <RNTextInput
            autoCorrect={false}
            autoCapitalize='none'
            underlineColorAndroid='transparent'
            {...others}
            style={[styles.input, style]}
        />
    );
};

export default TextInput;
