import React from 'react';
import Dialog from './dialog';
import LayerRoot from '../layer_root';
import {Text} from 'react-native';

const Alert = (title, content, options = {}) => {
    return new Promise((resolve, reject) => {
        LayerRoot.setComponent(LayerRoot.TYPE.DIALOG,
            <Dialog
                title={title}
                visible={true}
                buttons={[{
                    type: 'primary',
                    label: options.OKLabel || '确定',
                    onPress: () => {
                        resolve();
                        LayerRoot.removeComponent(LayerRoot.TYPE.DIALOG);
                    }
                }]}
                onRequestClose={() => {
                    reject();
                    LayerRoot.removeComponent(LayerRoot.TYPE.DIALOG);
                }}
            >
                <Text>{content}</Text>
            </Dialog>
        );
    });
};

export default Alert;