import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import ButtonText from './button_text';
import V from '../variable';
import S from '../styles';
import _ from 'lodash';
import { is } from '../util';

const styles = {
  button: {
    borderRadius: V.n4,
    borderWidth: StyleSheet.hairlineWidth,
    paddingLeft: V.gap12,
    paddingRight: V.gap12,
    borderColor: V.borderColor,
    overflow: 'hidden',
  },
  default: {
    backgroundColor: V.bgWhite,
    borderColor: V.whiteColor,
  },
  primary: {
    backgroundColor: V.primaryColor,
    borderColor: V.primaryColor,
  },
  warning: {
    backgroundColor: V.warningColor,
    borderColor: V.warningColor,
  },
  defaultPlain: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: V.defaultColor,
    backgroundColor: V.whiteColor,
  },
  primaryPlain: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: V.primaryColor,
    backgroundColor: V.whiteColor,
  },
  warningPlain: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: V.warningColor,
    backgroundColor: V.whiteColor,
  },
  disabled: {
    backgroundColor: V.bgDisable,
    borderColor: V.bgDisable,
  },
  mini: {
    paddingLeft: V.gap8,
    paddingRight: V.gap8,
  },
};

const getButtonStyles = (type, mini, plain, disabled) => {
  const config = [styles[type]];

  if (disabled) {
    config.push(styles.disabled);
  } else {
    if (plain) {
      config.push(styles[`${type}Plain`]);
    }

    if (mini) {
      config.push(styles.mini);
    }
  }

  return config;
};

const getUnderlayColor = (type) => {
  if (type === 'primary') {
    return V.primaryColorActive;
  } else if (type === 'warning') {
    return V.warningColorActive;
  } else {
    return V.activeColor;
  }
};

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  handlePress = () => {
    const { onPress } = this.props;
    const { loading } = this.state;

    if (loading) {
      return;
    }

    const result = onPress();

    if (is.promise(result)) {
      this.setState({ loading: true });
      Promise.resolve(result).then(
        () =>
          this.setState({
            loading: false,
          }),
        () =>
          this.setState({
            loading: false,
          }),
      );
    }
  };

  render() {
    const { type, plain, disabled, mini, children, style } = this.props;
    const { loading } = this.state;

    const buttonStyles = getButtonStyles(type, mini, plain, disabled);

    let loadingColor = V.defaultColor;
    if (type === 'primary' || type === 'warning') {
      if (plain) {
        loadingColor = type === 'primary' ? V.primaryColor : V.warningColor;
      } else {
        loadingColor = V.whiteColor;
      }
    }

    return (
      <TouchableOpacity
        activeOpacity={0.8}
        disabled={disabled}
        style={[{ borderRadius: V.n4 }, styles.button, buttonStyles, style]}
        onPress={this.handlePress}>
        <View style={[S.flexRow, S.flexJustifyCenter]}>
          {loading && (
            <ActivityIndicator color={loadingColor} style={S.paddingRight4} />
          )}
          <ButtonText {...this.props}>{children}</ButtonText>
        </View>
      </TouchableOpacity>
    );
  }
}

Button.propTypes = {
  type: PropTypes.oneOf(['default', 'primary', 'warning']),
  plain: PropTypes.bool,
  disabled: PropTypes.bool,
  mini: PropTypes.bool,
  onPress: PropTypes.func,
  children: PropTypes.node,
};

Button.defaultProps = {
  type: 'default',
  plain: false,
  disabled: false,
  mini: false,
  onPress: _.noop,
};

export default Button;
