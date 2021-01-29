import React from 'react';
import { Text, StyleSheet } from 'react-native';
import V from '../variable';

const styles = StyleSheet.create({
  text: {
    fontSize: V.btnFontSize,
    textAlign: 'center',
    marginTop: (V.btnHeight - V.btnFontSize) / 2,
    marginBottom: (V.btnHeight - V.btnFontSize) / 2,
  },
  miniText: {
    fontSize: V.fontSize12,
    marginTop: (V.btnMiniHeight * V.fontSize12 - V.fontSize12) / 2,
    marginBottom: (V.btnMiniHeight * V.fontSize12 - V.fontSize12) / 2,
  },
  defaultText: {
    color: V.defaultColor,
  },
  primaryText: {
    color: V.whiteColor,
  },
  warningText: {
    color: V.whiteColor,
  },
  defaultPlainText: {
    color: V.defaultColor,
  },
  primaryPlainText: {
    color: V.primaryColor,
  },
  warningPlainText: {
    color: V.warningColor,
  },
  disabledText: {
    color: V.disabledColor,
  },
});

const getTextStyles = (type, plain, mini, disabled) => {
  const config = [styles[`${type}Text`]];

  if (disabled) {
    config.push(styles.disabledText);
  } else {
    if (plain) {
      config.push(styles[`${type}PlainText`]);
    }

    if (mini) {
      config.push(styles.miniText);
    }
  }

  return config;
};

class ButtonText extends React.Component {
  render() {
    const { type, mini, disabled, plain, children } = this.props;

    const textStyles = getTextStyles(type, plain, mini, disabled);

    return <Text style={[styles.text, ...textStyles]}>{children}</Text>;
  }
}

export default ButtonText;
