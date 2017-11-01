import React from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    TouchableHighlight,
    View,
    ActivityIndicator
} from 'react-native';
import ButtonText from './button_text';
import V from '../variable';
import S from '../styles';
import _ from 'lodash';
import Util from '../util';

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
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
        this.handlePress = ::this.handlePress;
    }

    handlePress() {
        const {onPress, hasLoading} = this.props;
        const {loading} = this.state;

        if (loading) {
            return;
        }

        const result = onPress();

        if (hasLoading && Util.is.promise(result)) {
            this.setState({loading: true});
            Promise.resolve(result).then(() => this.setState({
                loading: false
            }), () => this.setState({
                loading: false
            }));
        }
    }

    render() {
        const {
            type,
            plain,
            disabled,
            mini,
            hasLoading,
            children,
            style
        } = this.props;
        const {loading} = this.state;

        const buttonStyles = getButtonStyles(type, mini, plain, disabled);

        let loadingColor = V.btnDefaultFontColor;
        if (type === 'primary' || type === 'warn') {
            if (plain) {
                loadingColor = V.primaryColor;
            } else {
                loadingColor = V.btnFontColor;
            }
        }

        return (
            <TouchableHighlight disabled={disabled} style={style} underlayColor={getUnderlayColor(type)}
                                onPress={this.handlePress}>
                <View style={[S.flex, S.flexRow, S.flexJustifyCenter, styles.button, ...buttonStyles]}>
                    <ButtonText {...this.props}>{children}</ButtonText>
                    {loading && hasLoading && <ActivityIndicator color={loadingColor}/>}
                </View>
            </TouchableHighlight>
        );
    }
}

Button.propTypes = {
    type: PropTypes.oneOf(['default', 'primary', 'warn']),
    plain: PropTypes.bool,
    disabled: PropTypes.bool,
    mini: PropTypes.bool,
    hasLoading: PropTypes.bool,
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