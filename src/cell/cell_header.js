import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import V from '../variable';
import S from '../styles';

const styles = StyleSheet.create({
  cellHeader: {
    marginRight: V.n4,
  },
  image: {
    width: V.n24,
    height: V.n24,
  },
});

class CellHeader extends React.Component {
  render() {
    const { children, style, ...rest } = this.props;

    const childrenWithProps = React.Children.map(children, (child) => {
      if (!child.type) {
        return (
          <Text {...rest} style={[S.text, styles.cellBodyText, style]}>
            {child}
          </Text>
        );
      } else if (child.type.displayName === 'Image' && !child.props.style) {
        return React.cloneElement(child, {
          style: [styles.image, child.props.style],
        });
      }

      return child;
    });
    return (
      <View style={[styles.cellHeader, style]} {...rest}>
        {childrenWithProps}
      </View>
    );
  }
}

CellHeader.displayName = 'CellHeader';
CellHeader.propTypes = {
  style: PropTypes.any,
};

export default CellHeader;
