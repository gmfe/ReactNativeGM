import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight, ScrollView } from 'react-native';
import _ from 'lodash';
import V from '../variable';
import S from '../styles';
import Mask from '../mask';
import Button from '../button';
import LayoutRoot from '../layer_root';

class ActionSheet extends React.Component {
  render() {
    const { title, list, style, onCancel, onSelect, ...rest } = this.props;

    return (
      <Mask
        {...rest}
        animationIn="slideInUp"
        onCancel={onCancel}
        style={[S.flexJustifyEnd, style]}>
        <View style={S.bgDefault}>
          <View
            style={[
              S.borderBottom,
              S.bgWhite,
              {
                maxHeight: 300,
              },
            ]}>
            {!!title && (
              <View style={[S.padding16, S.borderBottom]}>
                <Text style={[S.text, S.text14, S.textDesc, S.textCenter]}>
                  {title}
                </Text>
              </View>
            )}
            <ScrollView>
              {_.map(list, (v) => (
                <TouchableHighlight
                  key={v.value}
                  underlayColor={V.activeColor}
                  disabled={v.disabled}
                  onPress={() => onSelect(v.value)}>
                  <View
                    style={[
                      S.padding12,
                      S.borderTop,
                      {
                        minWidth: 250,
                        opacity: v.disabled ? 0.3 : 1,
                      },
                    ]}>
                    <Text style={[S.text16, S.textCenter]}>{v.text}</Text>
                    {v.desc && (
                      <Text style={[S.text, S.textDesc, S.textCenter]}>
                        {v.desc}
                      </Text>
                    )}
                  </View>
                </TouchableHighlight>
              ))}
            </ScrollView>
          </View>
          <View style={S.marginTop8} />
          <Button onPress={onCancel}>取消</Button>
        </View>
      </Mask>
    );
  }
}

ActionSheet.render = (props) => {
  return new Promise((resolve, reject) => {
    LayoutRoot.setComponent(
      LayoutRoot.TYPE.POPUP,
      <ActionSheet
        {...props}
        onSelect={(v) => {
          ActionSheet.hide();
          resolve(v);
        }}
        onCancel={() => {
          ActionSheet.hide();
          props.onCancel && props.onCancel();
          reject(new Error());
        }}
      />,
    );
  });
};

ActionSheet.hide = () => LayoutRoot.removeComponent(LayoutRoot.TYPE.POPUP);

ActionSheet.propTypes = {
  title: PropTypes.string,
  list: PropTypes.array.isRequired, // [{value, text, disabled, desc}]
  onSelect: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
};

ActionSheet.defaultProps = {
  onCancel: _.noop,
};

export default ActionSheet;
