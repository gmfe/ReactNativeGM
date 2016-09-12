import React, {PropTypes} from 'react';
import {
    View,
    Text,
    TextInput,
} from 'react-native';
import StyleSheet from '../style_sheet';
import V from '../variable';

const styles = StyleSheet.create({
    textarea: {
        color: V.defaultColor,
        fontSize: V.cellFontSize,
        height: V.cellFontSize * V.baseLineHeight * 3,
        lineHeight: V.cellFontSize * V.baseLineHeight,
        android: {
            lineHeight: Math.round(V.cellFontSize * V.baseLineHeight),
        },
    },
    textareaCounter: {
        color: V.descColor,
        textAlign: 'right',
    }
});

const TextArea = (props) => {
    const {
        style,
        value,
        onChange,
        onChangeText,
        showCounter,
        maxLength,
        defaultValue,
        ...others
    } = props;

    return (
        <View>
            <TextInput
                multiline={true}
                maxLength={maxLength}
                onChange={onChange}
                onChangeText={onChangeText}
                value={value}
                defaultValue={defaultValue}
                style={[styles.textarea, style]}
                {...others}
            />
            {showCounter ? (
                <Text style={styles.textareaCounter}>
                    {(value || defaultValue || '').length}
                    {maxLength ? `/ ${maxLength}` : false}
                </Text>
            ) : false}
        </View>
    );
};

TextArea.propTypes = {
    value: PropTypes.string,
    showCounter: PropTypes.bool,
    maxLength: PropTypes.number,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func,
    onChangeText: PropTypes.func,
    style: TextInput.propTypes.style,
};

TextArea.defaultProps = {
    showCounter: true
};

export default TextArea;