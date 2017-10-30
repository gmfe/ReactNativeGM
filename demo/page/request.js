import React from 'react';
import {
    Text,
    ScrollView
} from 'react-native';

import {
    Button,
    Toast,
    Util
} from '../../src/index';

const {Request} = Util;

class Component extends React.Component {
    static navigationOptions = {
        title: 'Request'
    };

    render() {
        return (
            <ScrollView>
                <Text>Request</Text>

                <Text>Loading</Text>

                <Button
                    type="primary"
                    onPress={() => {
                        Request('/aadf').data({
                            id: 1
                        }).post().then(() => {
                            Toast.success('成功');
                        }).catch((reason) => {
                            Toast.warning('失败 ' + reason);
                        });
                    }}
                >request</Button>
            </ScrollView>
        );
    }
}

export default Component;