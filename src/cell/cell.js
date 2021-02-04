import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableHighlight, StyleSheet } from 'react-native';
import V from '../variable';

const styles = StyleSheet.create({
  cell: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: V.n12,
    paddingVertical: V.n12,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: V.borderColor,
  },
  firstCell: {
    borderTopWidth: 0,
  },
  inputCell: {
    paddingVertical: 0,
  },
});

class Cell extends React.Component {
  render() {
    const {
      access,
      onPress,
      input,
      error,
      first,
      children,
      style,
      ...rest
    } = this.props;

    const childrenWithProps = React.Children.map(children, (child) => {
      if (access && child.type.displayName === 'CellFooter') {
        return React.cloneElement(child, { access: true });
      }
      if (input && child.type.displayName === 'CellBody') {
        return React.cloneElement(child, { input: true });
      }
      if (
        error &&
        (child.type.displayName === 'CellHeader' ||
          child.type.displayName === 'CellBody')
      ) {
        return React.cloneElement(child, { error: true });
      }
      return child;
    });

    return (
      <TouchableHighlight onPress={onPress} underlayColor={V.activeColor}>
        <View
          {...rest}
          style={[
            styles.cell,
            first ? styles.firstCell : null,
            input ? styles.inputCell : null,
            style
          ]}>
          {childrenWithProps}
        </View>
      </TouchableHighlight>
    );
  }
}

Cell.propTypes = {
  first: PropTypes.bool,
  access: PropTypes.bool,
  onPress: PropTypes.func,
  input: PropTypes.bool,
  error: PropTypes.bool,
  children: PropTypes.node,
  style: PropTypes.any,
};

export default Cell;
