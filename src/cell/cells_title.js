import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';
import V from '../variable';

const styles = StyleSheet.create({
  cellsTitle: {
    paddingTop: V.gap18,
    paddingBottom: V.gap8,
    paddingHorizontal: V.gap12,
    fontSize: V.fontSize12,
    color: V.descColor,
  },
});

class CellsTitle extends React.Component {
  render() {
    const { children, style, ...rest } = this.props;

    return (
      <Text {...rest} style={[styles.cellsTitle, style]}>
        {children}
      </Text>
    );
  }
}

CellsTitle.propTypes = {
  children: PropTypes.node,
  style: PropTypes.any,
};

export default CellsTitle;
