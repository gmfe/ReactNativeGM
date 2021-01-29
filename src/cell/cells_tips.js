import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet, Platform } from 'react-native';
import V from '../variable';

const styles = StyleSheet.create({
  cellsTips: {
    paddingHorizontal: V.gap12,
    fontSize: V.fontSize12,
    color: V.descColor,
    marginBottom: V.gap8,
    lineHeight: V.fontSize12 * V.baseLineHeight,
    ...Platform.select({
      android: {
        lineHeight: Math.round(V.fontSize12 * V.baseLineHeight),
      },
    }),
  },
});

class CellsTips extends React.Component {
  render() {
    const { children, style, ...rest } = this.props;

    return (
      <Text {...rest} style={[styles.cellsTips, style]}>
        {children}
      </Text>
    );
  }
}

CellsTips.propTypes = {
  style: PropTypes.any,
};

export default CellsTips;
