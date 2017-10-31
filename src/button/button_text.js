import React from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet
} from 'react-native';
import {Text} from '../typography';
import V from '../variable';

const styles = StyleSheet.create({
    text: {
        fontSize: V.btnFontSize,
        textAlign: 'center',
        marginTop: (V.btnHeight - V.btnFontSize) / 2,
        marginBottom: (V.btnHeight - V.btnFontSize) / 2
    },

    miniText: {
        fontSize: V.btnMiniFontSize,
        marginTop: (V.btnMiniHeight * V.btnMiniFontSize
        - V.btnMiniFontSize) / 2,
        marginBottom: (V.btnMiniHeight * V.btnMiniFontSize
        - V.btnMiniFontSize) / 2
    },

    defaultText: {
        color: V.btnDefaultFontColor
    },

    primaryText: {
        color: V.btnFontColor
    },

    warnText: {
        color: V.btnFontColor
    },

    primaryPlainText: {
        color: V.primaryColor
    },

    defaultPlainText: {
        color: V.defaultColor
    },

    disabledText: {
        color: V.btnDisabledFontColor
    },
    defaultDisabledText: {
        color: V.btnDefaultDisabledFontColor
    }
});

const getTextStyles = ({type, state, size}) => {
    const config = [styles[`${type}Text`]];
    if (state === 'plain') config.push(styles[`${type}PlainText`]);
    if (size === 'small') config.push(styles.miniText);
    if (state === 'disabled') {
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
        type,
        size,
        state,
        children
    } = props;

    const textStyles = getTextStyles({type, state, size});

    return (
        <Text style={[styles.text, ...textStyles]}>{children}</Text>
    );
};

ButtonText.propTypes = {
    type: PropTypes.oneOf(['default', 'primary', 'warn']),
    state: PropTypes.oneOf(['default', 'disabled', 'plain']),
    size: PropTypes.oneOf(['small']),
    children: PropTypes.node
};

ButtonText.defaultProps = {
    type: 'default',
    state: 'default'
};
export default ButtonText;
