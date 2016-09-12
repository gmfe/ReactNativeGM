import React, {PropTypes} from 'react';
import {
    StyleSheet,
    TouchableHighlight,
    View
} from 'react-native';
import ButtonText from './button_text';
import V from '../variable';

const styles = StyleSheet.create({
    button: {
        borderRadius: V.btnBorderRadius,
        borderWidth: StyleSheet.hairlineWidth,
        paddingLeft: 14,
        paddingRight: 14,
        borderColor: V.borderColor,
        overflow: 'hidden',
    },

    mini: {
        paddingLeft: V.btnMiniFontSize * 0.75,
        paddingRight: V.btnMiniFontSize * 0.75,
    },

    default: {
        backgroundColor: V.btnDefaultBg,
    },

    primary: {
        backgroundColor: V.primaryColor,
    },

    warn: {
        backgroundColor: V.warnColor,
    },

    primaryPlain: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: V.primaryColor,
        backgroundColor: 'transparent'
    },

    defaultPlain: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: V.defaultColor,
        backgroundColor: 'transparent'
    },
});

const getButtonStyles = ({type, plain, size}) => {
    const config = [styles[type]];
    if (plain) config.push(styles[`${type}Plain`]);
    if (size === 'small') {
        config.push(styles.mini);
    }
    return config;
};

const Button = (props) => {
    const {
        disabled,
        type,
        size,
        plain,
        children,
        style,
        ...rest
    } = props;

    const buttonStyles = getButtonStyles({type, plain, size, disabled});

    let touchableProps = {};
    if (!disabled) {
        touchableProps = rest;
    }

    if (disabled) {
        return (
            <View style={[styles.button, ...buttonStyles, style]}>
                <ButtonText {...{type, plain, size, disabled}}>{children}</ButtonText>
            </View>
        );
    }

    return (
        <TouchableHighlight
            style={[styles.button, ...buttonStyles, style]}
            underlayColor={V.activeColor}
            {...touchableProps}
        >
            <View>
                <ButtonText {...{type, plain, size, disabled}}>{children}</ButtonText>
            </View>
        </TouchableHighlight>
    );
};

Button.propTypes = {
    type: PropTypes.oneOf(['default', 'primary', 'warn']),
    size: PropTypes.oneOf(['small']),
    plain: PropTypes.bool,
    disabled: PropTypes.bool,
    onPress: PropTypes.func,
    onPressIn: PropTypes.func,
    onPressOut: PropTypes.func,
    onLongPress: PropTypes.func,
    children: PropTypes.node,
};

Button.defaultProps = {
    type: 'default',
    disabled: false,
    plain: false
};

export default Button;