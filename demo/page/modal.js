import React, {Component} from 'react';
import {
    ScrollView,
    StyleSheet,
    View,
    Alert
} from 'react-native';

import {
    Variable as V,
    Button,
    Modal
} from '../../src';
import ActionSheet from "../../src/actionsheet/index";

const styles = StyleSheet.create({
    button: {
        marginTop: V.gap10,
        marginLeft: V.gap10,
        marginRight: V.gap10
    }
});

class PromptScreen extends Component {
    static navigationOptions = {
        title: 'Modal'
    };

    _onSubmitPress() {
        Alert.alert('well done');
    }

    _onChangeText(text) {
        console.log(text);
    }

    _onPressActionSheetItem(index) {
        console.log('you pressed: ' + index);
    }

    render() {
        return (
            <ScrollView>
                <Modal
                    ref={(ref) => this._promptModal = ref}
                    titleText="title"
                    desText="行行好说两句吧~"
                    placeHolder="说点啥~"
                    onSubmitPress={::this._onSubmitPress}
                    onChangeText={(text) => this._onChangeText(text)}
                />
                <ActionSheet
                    ref={(ref) => this._actionSheet = ref}
                    animRate={500}
                    buttonText={['share to WX', <View style={{width:100, height:20, backgroundColor: 'blue'}}/>]}
                    onPressItem={(i) => this._onPressActionSheetItem(i)}
                />
                <Button
                    style={styles.button}
                    type={'default'}
                    onPress={() => this._promptModal.showPrompt()}
                >
                    prompt
                </Button>
                <Button
                    style={styles.button}
                    type={'default'}
                    onPress={() => this._actionSheet.show()}
                >
                    actionsheet
                </Button>
            </ScrollView>
        );
    }
}

export default PromptScreen;