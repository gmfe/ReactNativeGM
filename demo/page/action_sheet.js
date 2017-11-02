import React from 'react';
import {
    ScrollView
} from 'react-native';

import {
    Button,
    ActionSheet
} from '../../src/index';

class Component extends React.Component {
    static navigationOptions = {
        title: 'Request'
    };

    render() {
        return (
            <ScrollView>
                <Button
                    type="primary"
                    onPress={() => {
                        ActionSheet.render([{name: 1}, {name: '你好啊'}, {name: '拟为阿斯顿发沙发斯蒂芬'}]).then(selected => console.log(selected));
                    }}
                >request</Button>

            </ScrollView>
        );
    }
}

export default Component;