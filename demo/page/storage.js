import React from 'react';
import {
    View,
    ScrollView
} from 'react-native';

import {Storage, S, Text, Button, TextInput} from '../../src';

class StorageScreen extends React.Component {
    static navigationOptions = {
        title: 'Storage'
    };

    constructor(props) {
        super(props);
        this.state = {
            value: "1",
            data: null
        };

        Storage.getAll().then(data => this.setState({data}));
    }

    render() {
        return (
            <ScrollView style={[S.flex]}>
                <View style={S.padding10}>

                    <Text>传给Storage组件，会保存，之后数据变更时也保存</Text>
                    <Storage name="storage1" value={this.state.value}/>

                    <TextInput value={this.state.value} onChangeText={text => this.setState({value: text})}/>

                    <Text>传 autoSave false，则只有mount，</Text>

                    <Text>也可直接调用 静态方法，具体参考 api</Text>

                    <Button onPress={() => {
                        Storage.getAll().then(data => this.setState({data}));
                    }}>获取storage数据</Button>

                    <Text>{JSON.stringify(this.state.data)}</Text>
                </View>
            </ScrollView>
        );
    }
}

export default StorageScreen;