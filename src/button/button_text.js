import React, {PropTypes} from 'react';
import {
    StyleSheet,
    Text,
} from 'react-native';
import V from '../variable';

const styles = StyleSheet.create({
    text: {
        fontSize: V.btnFontSize,
        textAlign: 'center',
        marginTop: (V.btnHeight - V.btnFontSize) / 2,
        marginBottom: (V.btnHeight - V.btnFontSize) / 2,
    },

    miniText: {
        fontSize: V.btnMiniFontSize,
        marginTop: (V.btnMiniHeight * V.btnMiniFontSize
        - V.btnMiniFontSize) / 2,
        marginBottom: (V.btnMiniHeight * V.btnMiniFontSize
        - V.btnMiniFontSize) / 2,
    },

    defaultText: {
        color: V.btnDefaultFontColor,
    },

    primaryText: {
        color: V.btnFontColor,
    },

    warnText: {
        color: V.btnFontColor,
    },

    primaryPlainText: {
        color: V.primaryColor,
    },

    defaultPlainText: {
        color: V.defaultColor,
    },

    disabledText: {
        color: V.btnDisabledFontColor
    },
    defaultDisabledText: {
        color: V.btnDefaultDisabledFontColor
    },
});

const getTextStyles = ({type, plain, size, disabled}) => {
    const config = [styles[`${type}Text`]];
    if (plain) config.push(styles[`${type}PlainText`]);
    if (size === 'small') config.push(styles.miniText);
    if (disabled) {
        if (type === 'default') {
            config.push(styles.defaultDisabledText);
        } else {
            config.push(styles.disabledText);
        }
    }
    return config;
};

const ButtonText = (props) => {
    const {
        disabled = false,
        type = 'default',
        size,
        plain = false,
        children,
    } = props;

    const textStyles = getTextStyles({type, plain, size, disabled});

    return (
        <Text style={[styles.text, ...textStyles]}>{children}</Text>
    );
};

ButtonText.propTypes = {
    type: PropTypes.oneOf(['default', 'primary', 'warn']),
    size: PropTypes.oneOf(['small']),
    plain: PropTypes.bool,
    disabled: PropTypes.bool,
    children: PropTypes.node
};

export default ButtonText;
