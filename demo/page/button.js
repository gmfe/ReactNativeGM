import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import {Button, Header, Variable as V, Page} from '../../src/index';

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

class Component extends React.Component {
    render() {
        const {navigator} = this.props;
        return (
            <Page header={<Header navigator={navigator} pageName={'Button'}/>}>
                <Button
                    type="default"
                    style={styles.button}
                    {...pressHandle}
                >default</Button>
                <Button
                    type="default"
                    style={styles.button}
                    disabled
                    {...pressHandle}
                >default disabled</Button>
                <Button
                    type="default"
                    style={styles.button}
                    plain
                    {...pressHandle}
                >default plain</Button>

                <Button
                    type="primary"
                    style={styles.button}
                    {...pressHandle}
                >primary</Button>
                <Button
                    type="primary"
                    style={styles.button}
                    disabled
                    {...pressHandle}
                >primary disabled</Button>
                <Button
                    type="primary"
                    style={styles.button}
                    plain
                    {...pressHandle}
                >plain plain</Button>

                <Button
                    type="warn"
                    style={styles.button}
                    {...pressHandle}
                >warn</Button>
                <Button
                    type="warn"
                    style={styles.button}
                    disabled
                    {...pressHandle}
                >warn disabled</Button>

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
            </Page>
        );
    }
}

export default Component;