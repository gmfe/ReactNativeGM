import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Platform } from 'react-native';
import V from '../variable';
import S from '../styles';
import Icon from '../icon';

const styles = StyleSheet.create({
  cellBody: {
    flex: 1,
  },
  cellBodyText: {
    textAlign: 'left',
  },
  error: {
    color: V.warningColor,
  },
  input: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? V.cellGapV : 0,
    paddingBottom: Platform.OS === 'ios' ? V.cellGapV : 0,
    paddingRight: V.cellGapH,
    lineHeight: V.fontSize14,
    height: V.fontSize14 + 30,
    fontSize: V.fontSize14,
  },
});

class CellBody extends React.Component {
  render() {
    const { error, input, children, style, ...rest } = this.props;

    const childrenWithProps = React.Children.map(children, (child) => {
      if (!child.type) {
        return (
          <Text style={[S.text, styles.cellBodyText, style]}>{child}</Text>
        );
      }
      return React.cloneElement(child, {
        style: [
          child.props.style,
          error ? styles.error : null,
          input ? styles.input : null,
        ],
      });
    });

    return (
      <View
        {...rest}
        style={[
          styles.cellBody,
          style,
          error ? { flexDirection: 'row' } : null,
        ]}>
        {childrenWithProps}
        {error && <Icon name="warning-circle" color={V.warningColor} />}
      </View>
    );
  }
}

CellBody.displayName = 'CellBody';
CellBody.propTypes = {
  input: PropTypes.bool,
  error: PropTypes.bool,
  style: PropTypes.any,
};

export default CellBody;
