import React from 'react';
import {View} from 'react-native';
import Dialog from './dialog';
import LayerRoot from '../layer_root';
import {Input} from '../form';
import {Text} from '../typography';
import S from '../styles';

const Prompt = (title, content, options = {}) => {
    return new Promise((resolve, reject) => {

        let text = '';

        const onOK = () => {
            if (options.shouleClose) {
                const result = options.shouleClose(text);
                if (result === false) {
                    return;
                }
            }
            resolve(text);
            LayerRoot.removeComponent(LayerRoot.TYPE.DIALOG);
        };

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
                    onPress: onOK
                }]}
                onClose={() => {
                    reject();
                    LayerRoot.removeComponent(LayerRoot.TYPE.DIALOG);
                }}
                style={{paddingBottom: 150}}
            >
                <Text style={S.textDesc}>{content}</Text>
                <View style={[S.border, S.padding5]}>
                    <Input
                        autoFocus
                        onSubmitEditing={onOK}
                        returnKeyType="done"
                        defaultValue={options.defaultValue || ''}
                        placeholder={options.placeholder}
                        onChangeText={(t) => {
                            text = t;
                        }}
                    />
                </View>
            </Dialog>
        );
    });
};

export default Prompt;