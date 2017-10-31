import React from 'react';
import {View} from 'react-native';
import Dialog from './dialog';
import LayerRoot from '../layer_root';
import {TextInput} from '../form';
import {Text} from '../typography';
import S from '../styles';
import _ from 'lodash';

const Prompt = (title, content, options = {}) => {
    return new Promise((resolve, reject) => {
        let text = options.defaultValue || '';

        const onOK = () => {
            const sC = options.onOK || _.noop;

            Promise.resolve(sC(text)).then(() => {
                resolve(text);
                LayerRoot.removeComponent(LayerRoot.TYPE.DIALOG);
            });
        };

        LayerRoot.setComponent(LayerRoot.TYPE.DIALOG,
            <Dialog
                title={title}
                buttons={[{
                    text: options.cancelText || '取消',
                    onPress: () => {
                        reject();
                        LayerRoot.removeComponent(LayerRoot.TYPE.DIALOG);
                    }
                }, {
                    text: options.okText || '确定',
                    onPress: onOK
                }]}
                onCancel={() => {
                    reject();
                    LayerRoot.removeComponent(LayerRoot.TYPE.DIALOG);
                }}
                style={options.style}
            >
                <Text style={S.textDesc}>{content}</Text>
                <View style={[S.border, S.padding5]}>
                    <TextInput
                        style={S.input}
                        autoFocus
                        onSubmitEditing={onOK}
                        returnKeyType="done"
                        defaultValue={options.defaultValue || ''}
                        placeholder={options.placeholder}
                        keyboardType={options.keyboardType || 'default'}
                        onChangeText={(t) => text = t}
                    />
                </View>
            </Dialog>
        );
    });
};

export default Prompt;