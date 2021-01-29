import React from 'react';
import { Text } from 'react-native';
import Dialog from './dialog';
import LayerRoot from '../layer_root';
import S from '../styles';

const Confirm = (title, content, options = {}) => {
  return new Promise((resolve, reject) => {
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
            onPress: () => {
              LayerRoot.removeComponent(LayerRoot.TYPE.DIALOG);
              setTimeout(() => {
                resolve();
              }, 0);
            },
          },
        ]}
        onCancel={() => {
          LayerRoot.removeComponent(LayerRoot.TYPE.DIALOG);
          setTimeout(() => {
            reject(new Error());
          }, 0);
        }}
        style={options.style}>
        {content && content.type !== undefined ? (
          content
        ) : (
          <Text style={[S.text, S.textDesc, S.textCenter]}>{content}</Text>
        )}
      </Dialog>,
    );
  });
};

export default Confirm;
