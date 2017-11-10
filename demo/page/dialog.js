import React from 'react';
import {ScrollView} from 'react-native';

import {
    Button,
    Alert, Confirm, Prompt,Popup,
    S
} from '../../src';
import Text from "../../src/typography/text";

class DialogWrap extends React.Component {
    static navigationOptions = {
        title: 'Dialog'
    };

    render() {
        return (
            <ScrollView>
                <Button
                    style={S.marginTop10}
                    type={'default'}
                    onPress={() => Alert('提示', 'well done')}
                >
                    alert
                </Button>

                <Button
                    style={S.marginTop10}
                    type={'default'}
                    onPress={() => Alert(null, 'well done')}
                >
                    alert without title
                </Button>

                <Button
                    style={S.marginTop10}
                    type={'default'}
                    onPress={() => {
                        Confirm('Confirm', 'well done').then(() => console.log('ok'), () => console.log('cancel'));
                    }}
                >
                    confirm 点遮罩可关闭
                </Button>

                <Button
                    style={S.marginTop10}
                    type={'default'}
                    onPress={() => {
                        Prompt('Prompt', 'well done').then((text) => console.log('ok', text), () => console.log('cancel'));
                    }}
                >
                    prompt 点遮罩可关闭
                </Button>

                <Button
                    style={S.marginTop10}
                    type={'default'}
                    onPress={() => {
                        Prompt('Prompt', 'well done', {
                            onOK: () => Promise.reject('reject')
                        }).then((text) => console.log('ok', text), () => console.log('cancel'));
                    }}
                >
                    prompt 在 onOK reject 拒绝关闭对话框
                </Button>
                <Button
                    style={S.marginTop10}
                    type={'default'}
                    onPress={()=>{
                        Popup.render(<Text>一个筛选遮罩popup</Text>);
                    }}
                >
                    Popup 一个类似抽屉式的条件筛选遮罩
                </Button>
            </ScrollView>
        );
    }
}

export default DialogWrap;