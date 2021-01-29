import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Dimensions,
} from 'react-native';
import _ from 'lodash';
import Mask from '../mask';
import V from '../variable';
import S from '../styles';
import LayerRoot from '../layer_root';

const styles = StyleSheet.create({
  dialog: {
    backgroundColor: 'white',
    width: Dimensions.get('window').width - 60,
    borderRadius: 3,
  },
  dialogTitle: {
    fontSize: V.fontSize16,
    textAlign: 'center',
  },
  dialogFooter: {
    marginTop: 30,
    height: 42,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: V.borderColor,
    borderStyle: 'solid',
  },
  dialogFooterOpr: {
    height: 42,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dialogFooterOprWithBorder: {
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderColor: V.borderColor,
    borderStyle: 'solid',
  },
});

class Dialog extends React.Component {
  renderButtons(buttons) {
    return buttons.map((button, i) => {
      const { text, onPress } = button;

      return (
        <TouchableHighlight
          key={button.text}
          style={[
            styles.dialogFooterOpr,
            i > 0 ? styles.dialogFooterOprWithBorder : {},
          ]}
          underlayColor={V.activeColor}
          onPress={onPress}>
          <Text
            style={[
              S.text,
              {
                fontSize: 17,
                color:
                  i + 1 === buttons.length ? V.primaryColor : V.defaultColor,
              },
            ]}>
            {text}
          </Text>
        </TouchableHighlight>
      );
    });
  }

  render() {
    const { title, onCancel, style, buttons, children } = this.props;

    return (
      <Mask animationIn="zoomIn" onCancel={onCancel} style={S.flexAlignCenter}>
        <View>
          <View style={[styles.dialog, style]}>
            {title && (
              <View style={[S.paddingHorizontal12, S.paddingTop12]}>
                <Text style={styles.dialogTitle}>{title}</Text>
              </View>
            )}
            <View style={[S.paddingHorizontal12, S.paddingTop12]}>
              {children}
            </View>
            {buttons && buttons.length > 0 && (
              <View style={styles.dialogFooter}>
                {this.renderButtons(buttons)}
              </View>
            )}
          </View>
        </View>
      </Mask>
    );
  }
}

Dialog.propTypes = {
  title: PropTypes.string,
  buttons: PropTypes.array,
  children: PropTypes.node,
  onCancel: PropTypes.func,
};

Dialog.defaultProps = {
  onCancel: _.noop,
};

Dialog.render = (props) => {
  return new Promise((resolve, reject) => {
    LayerRoot.setComponent(LayerRoot.TYPE.DIALOG, <Dialog {...props} />);
  });
};

Dialog.hide = () => {
  LayerRoot.removeComponent(LayerRoot.TYPE.DIALOG);
};

export default Dialog;
