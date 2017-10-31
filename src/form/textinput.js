import React from 'react';
import {
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
        ...others
    } = props;

    return (
        <TextInput
            autoCorrect={false}
            autoCapitalize='none'
            underlineColorAndroid='transparent'
            {...others}
            style={[styles.input, style]}
        />
    );
};

export default InputComponent;
