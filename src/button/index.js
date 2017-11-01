import React from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    TouchableHighlight,
    View
} from 'react-native';
import ButtonText from './button_text';
import V from '../variable';
import _ from 'lodash';

const styles = {
    button: {
        borderRadius: V.btnBorderRadius,
        borderWidth: StyleSheet.hairlineWidth,
        paddingLeft: V.gap15,
        paddingRight: V.gap15,
        borderColor: V.borderColor,
        overflow: 'hidden'
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
    },
    plainDisabled: {
        borderColor: V.borderColor
    },
    mini: {
        paddingLeft: V.gap10,
        paddingRight: V.gap10
    }
};

const getButtonStyles = (type, mini, plain, disabled) => {
    const config = [styles[type]];

    if (plain) {
        config.push(styles[`${type}Plain`]);
    }
    if (mini) {
        config.push(styles.mini);
    }

    if (plain && disabled) {
        config.push(styles.plainDisabled);
    }

    return config;
};

const getUnderlayColor = (type) => {
    if (type === 'primary') {
        return V.primaryColorActive;
    } else if (type === 'warn') {
        return V.warnColorActive;
    } else {
        return V.activeColor;
    }
};

class Button extends React.Component {
    render() {
        const {
            type,
            plain,
            disabled,
            mini,
            onPress,
            children,
            style
        } = this.props;

        const buttonStyles = getButtonStyles(type, mini, plain, disabled);

        const InView = (
            <View style={[styles.button, ...buttonStyles, style]}>
                <ButtonText {...this.props}>{children}</ButtonText>
            </View>
        );

        if (disabled) {
            return InView;
        }

        return (
            <TouchableHighlight underlayColor={getUnderlayColor(type)} onPress={onPress}>
                {InView}
            </TouchableHighlight>
        );
    }
}

Button.propTypes = {
    type: PropTypes.oneOf(['default', 'primary', 'warn']),
    plain: PropTypes.bool,
    disabled: PropTypes.bool,
    mini: PropTypes.bool,
    onPress: PropTypes.func,
    children: PropTypes.node
};

Button.defaultProps = {
    type: 'default',
    plain: false,
    disabled: false,
    mini: false,
    onPress: _.noop
};

export default Button;