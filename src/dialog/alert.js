import React from 'react';
import Dialog from './dialog';
import LayerRoot from '../layer_root';
import {Text} from '../typography';
import S from '../styles';

const Alert = (title, content, options = {}) => {
    return new Promise((resolve) => {
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
                style={options.style}
            >
                <Text style={S.textDesc}>{content}</Text>
            </Dialog>
        );
    });
};

export default Alert;