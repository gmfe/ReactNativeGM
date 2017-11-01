import React from 'react';
import PropTypes from 'prop-types';
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
        overflow: 'hidden'
    },
    mini: {
        paddingLeft: V.btnMiniFontSize * 0.75,
        paddingRight: V.btnMiniFontSize * 0.75
    },
    default: {
        backgroundColor: V.btnDefaultBg
    },
    primary: {
        backgroundColor: V.primaryColor
    },
    warn: {
        backgroundColor: V.warnColor
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
    }
});

const getButtonStyles = ({type, state, size}) => {
    const config = [styles[type]];
    if (state === 'plain') config.push(styles[`${type}Plain`]);
    if (size === 'small') {
        config.push(styles.mini);
    }
    return config;
};

const getUnderlayColor = (type, state) => {
    if (state === 'plain') {
        return V.activeColor;
    }
    switch (type) {
        case 'primary':
            return V.primaryColorActive;
        case 'warn':
            return V.warnColorActive;

        default:
            return V.activeColor;
    }
};


class Button extends React.Component {
    render() {
        const {
            type,
            size,
            state,
            children,
            style,
            ...rest
        } = this.props;

        const buttonStyles = getButtonStyles({type, state, size});

        let touchableProps = {};
        if (state === 'disabled') {
            return (
                <View style={[styles.button, ...buttonStyles, style]}>
                    <ButtonText {...{type, state, size}}>{children}</ButtonText>
                </View>
            );
        } else {
            touchableProps = rest;
        }

        const underlayColor = getUnderlayColor(type, state);

        return (
            <TouchableHighlight
                style={[styles.button, ...buttonStyles, style]}
                underlayColor={underlayColor}
                {...touchableProps}
            >
                <View>
                    <ButtonText {...{type, state, size}}>{children}</ButtonText>
                </View>
            </TouchableHighlight>
        );
    }
}

Button.propTypes = {
    type: PropTypes.oneOf(['default', 'primary', 'warn']),
    state: PropTypes.oneOf(['default', 'disabled', 'plain']),
    size: PropTypes.oneOf(['small']),
    onPress: PropTypes.func,
    onPressIn: PropTypes.func,
    onPressOut: PropTypes.func,
    onLongPress: PropTypes.func,
    children: PropTypes.node
};

Button.defaultProps = {
    type: 'default',
    state: 'default'
};

export default Button;