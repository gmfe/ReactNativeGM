import React from 'react';
import Dialog from './dialog';
import LayerRoot from '../layer_root';
import {Text} from '../typography';
import S from '../styles';

const Confirm = (title, content, options = {}) => {
    return new Promise((resolve, reject) => {
        LayerRoot.setComponent(LayerRoot.TYPE.DIALOG,
            <Dialog
                title={title}
                visible={true}
                buttons={[{
                    type: 'default',
                    label: options.CancelLabel || '取消',
                    onPress: () => {
                        reject();
                        LayerRoot.removeComponent(LayerRoot.TYPE.DIALOG);
                    }
                }, {
                    type: 'primary',
                    label: options.OKLabel || '确定',
                    onPress: () => {
                        resolve();
                        LayerRoot.removeComponent(LayerRoot.TYPE.DIALOG);
                    }
                }]}
                onClose={() => {
                    reject();
                    LayerRoot.removeComponent(LayerRoot.TYPE.DIALOG);
                }}
            >
                <Text style={S.textDesc}>{content}</Text>
            </Dialog>
        );
    });
};

export default Confirm;