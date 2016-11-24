import React, {PropTypes} from 'react';
import {
    View,
    Text,
    TextInput
} from 'react-native';
import StyleSheet from '../style_sheet';
import V from '../variable';


const InputComponent = (props) => {
    const {
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