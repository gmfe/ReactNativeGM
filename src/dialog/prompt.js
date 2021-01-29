import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Dialog from './dialog';
import LayerRoot from '../layer_root';
import S from '../styles';
import _ from 'lodash';

const Prompt = (title, content, options = {}) => {
  return new Promise((resolve, reject) => {
    let text = options.defaultValue || '';

    const onOK = () => {
      const sC = options.onOK || _.noop;

      Promise.resolve(sC(text)).then(() => {
        LayerRoot.removeComponent(LayerRoot.TYPE.DIALOG);
        setTimeout(() => {
          resolve(text);
        }, 0);
      });
    };

    LayerRoot.setComponent(
      LayerRoot.TYPE.DIALOG,
      <Dialog
        title={title}
        buttons={[
          {
            text: options.cancelText || '取消',
            onPress: () => {
              LayerRoot.removeComponent(LayerRoot.TYPE.DIALOG);
              setTimeout(() => {
                reject(new Error());
              }, 0);
            },
          },
          {
            text: options.okText || '确定',
            onPress: onOK,
          },
        ]}
        onCancel={() => {
          LayerRoot.removeComponent(LayerRoot.TYPE.DIALOG);
          setTimeout(() => {
            reject(new Error());
          }, 0);
        }}
        style={options.style}>
        <Text style={[S.text, S.textDesc]}>{content}</Text>
        <View style={[S.border, S.padding5]}>
          <TextInput
            style={S.input}
            autoFocus
            onSubmitEditing={onOK}
            returnKeyType="done"
            defaultValue={options.defaultValue || ''}
            placeholder={options.placeholder}
            keyboardType={options.keyboardType || 'default'}
            onChangeText={(t) => (text = t)}
          />
        </View>
      </Dialog>,
    );
  });
};

export default Prompt;
