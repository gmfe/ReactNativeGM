import React from 'react';
import {
    Text,
    StyleSheet
} from 'react-native';
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

const getTextStyles = (type, plain, mini, disabled) => {
    const config = [styles[`${type}Text`]];

    if (plain) {
        config.push(styles[`${type}PlainText`]);
    }
    if (mini) {
        config.push(styles.miniText);
    }
    if (disabled) {
        if (type === 'default' || plain) {
            config.push(styles.defaultDisabledText);
        } else {
            config.push(styles.disabledText);
        }
    }

    return config;
};

class ButtonText extends React.Component {
    render() {
        const {
            type,
            mini,
            disabled,
            plain,
            children
        } = this.props;

        const textStyles = getTextStyles(type, plain, mini, disabled);

        return (
            <Text style={[styles.text, ...textStyles]}>{children}</Text>
        );
    }
}

export default ButtonText;
