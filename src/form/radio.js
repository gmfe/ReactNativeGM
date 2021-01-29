import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import Icon from '../icon';
import S from '../styles';
import V from '../variable';

const styles = StyleSheet.create({
  font: {
    paddingTop: 2,
    fontSize: V.fontSize14 * 1.3,
    marginRight: 2,
  },
});

class Radio extends React.Component {
  handleChange = () => {
    this.props.onChange(!this.props.checked);
  };

  render() {
    const {
      onChange, // eslint-disable-line
      children,
      style,
      textStyle,
      color,
      checked,
      ...rest
    } = this.props;

    return (
      <TouchableHighlight
        onPress={this.handleChange}
        underlayColor={V.activeColor}>
        <View {...rest} style={[S.flexRow, S.flexAlignCenter, style]}>
          {checked ? (
            <Icon
              name="success-circle"
              color={color || V.primaryColor}
              style={styles.font}
            />
          ) : (
            <Icon name="circle" color={V.descColor} style={styles.font} />
          )}
          {!(children && children.type) ? (
            <Text style={[S.text, textStyle]}>{children}</Text>
          ) : (
            children
          )}
        </View>
      </TouchableHighlight>
    );
  }
}

Radio.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  color: PropTypes.string,
};

export default Radio;
