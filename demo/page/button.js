import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ScrollView
} from 'react-native';

import _ from 'lodash';
import {Button, Variable as V} from '../../src';

const styles = StyleSheet.create({
    button: {
        marginTop: V.gap10,
        marginLeft: V.gap10,
        marginRight: V.gap10
    },
    inlineButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

const pressHandle = {
    onPress: () => console.log('onPress'),
    onPressIn: () => console.log('onPressIn'),
    onPressOut: () => console.log('onPressOut'),
    onLongPress: () => console.log('onLongPress')
};

const buttonTypeArr = [
    {
        type: 'default',
        text: 'default'
    },
    {
        type: 'default',
        state: 'disabled',
        text: 'default disabled'
    },
    {
        type: 'default',
        state: 'plain',
        text: 'default plain'
    },
    {
        type: 'primary',
        text: 'default'
    },
    {
        type: 'primary',
        state: 'disabled',
        text: 'primary disabled'
    },
    {
        type: 'primary',
        state: 'plain',
        text: 'primary plain'
    },
    {
        type: 'warn',
        text: 'warn'
    },
    {
        type: 'warn',
        state: 'disabled',
        text: 'warn disabled'
    }
];

class ButtonScreen extends Component {
    static navigationOptions = {
        title: 'Button'
    };

    render() {
        return (
            <ScrollView>
                {
                    _.map(buttonTypeArr, (value, i) => (
                        <Button
                            key={i}
                            type={value.type}
                            style={styles.button}
                            state={value.state}
                            {...pressHandle}
                        >
                            {value.text}
                        </Button>
                    ))
                }
                <View style={styles.inlineButtonContainer}>
                    <Button
                        type="primary"
                        style={styles.button}
                        size="small"
                    >primary</Button>
                    <Button
                        type="default"
                        style={styles.button}
                        size="small"
                    >primary</Button>
                </View>
            </ScrollView>
        );
    }
}

export default ButtonScreen;