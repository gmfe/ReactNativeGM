import React from 'react';
import {
    View,
    ScrollView
} from 'react-native';

import {Button, S} from '../../src';

class ButtonScreen extends React.Component {
    static navigationOptions = {
        title: 'Button'
    };

    render() {
        return (
            <ScrollView style={[S.flex]}>
                <View style={S.padding10}>

                    <Button style={S.marginTop10} hasLoading onPress={() => {
                        return new Promise(resolve => {
                            setTimeout(() => {
                                resolve();
                            }, 5000);
                        });
                    }}>loading 5000s</Button>
                    <Button type="primary" style={S.marginTop10} hasLoading onPress={() => {
                        return new Promise(resolve => {
                            setTimeout(() => {
                                resolve();
                            }, 5000);
                        });
                    }}>loading 5000s</Button>
                    <Button type="warn" style={S.marginTop10} hasLoading onPress={() => {
                        return new Promise(resolve => {
                            setTimeout(() => {
                                resolve();
                            }, 5000);
                        });
                    }}>loading 5000s</Button>

                    <Button style={S.marginTop10}>default</Button>
                    <Button style={S.marginTop10} disabled>default disabled</Button>

                    <Button style={S.marginTop10} type="primary">primary</Button>
                    <Button style={S.marginTop10} type="primary" disabled>primary disabled</Button>

                    <Button style={S.marginTop10} type="warn">warn</Button>
                    <Button style={S.marginTop10} type="warn" disabled>warn disabled</Button>

                    <Button style={S.marginTop10} plain>plain default</Button>
                    <Button style={S.marginTop10} plain disabled>plain default disabled</Button>

                    <Button style={S.marginTop10} plain type="primary">plain primary</Button>
                    <Button style={S.marginTop10} plain type="primary" disabled>plain primary disabled</Button>

                    <View style={[S.flex, S.flexRow, S.marginTop10]}>
                        <Button
                            type="primary"
                            mini
                        >primary</Button>
                        <Button
                            type="default"
                            mini
                        >default</Button>
                        <Button
                            type="warn"
                            mini
                        >warn</Button>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default ButtonScreen;