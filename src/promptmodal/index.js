import React from 'react';
import PropTypes from 'prop-types';
import {View, Modal, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import {
    TextInput,
    Styles as S
} from '../../src';
import Text from "../typography/text";


const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    promptWrapper: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingTop: 1 / 4 * SCREEN_HEIGHT,
        alignItems: 'center'
    },
    promptBox: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        width: SCREEN_WIDTH - 50 * 2,
        borderRadius: 5,
        backgroundColor: 'white',
        alignItems: 'flex-start'
    },
    buttonWrapper: {
        marginTop: 10,
        alignSelf: 'center',
        width: SCREEN_WIDTH - 70 * 2,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    titleText: {
        alignSelf: 'center'
    },
    desText: {
        marginTop: 10
    }
});


class PromptModal extends React.Component {
    constructor() {
        super();

        this.state = {
            visible: false
        };
    }

    showPrompt() {
        !this.state.visible && this.setState({visible: true});
    }

    _hidePrompt() {
        this.state.visible && this.setState({visible: false});
    }

    _renderTitle() {
        const {titleText, renderTitle, titleStyle} = this.props;
        if(titleText) {
            return <Text style={[styles.titleText, titleStyle]}>{titleText}</Text>;
        }
        if(renderTitle) {
            return renderTitle();
        }
    }

    _renderDes() {
        const {desText} = this.props;
        return <Text style={styles.desText}>{desText}</Text>;
    }

    _renderButton() {
        const {onSubmitPress, buttonText} = this.props;
        return(
            <View style={styles.buttonWrapper}>
                <TouchableOpacity onPress={() => this._hidePrompt()}><Text>{buttonText.cancel}</Text></TouchableOpacity>
                <TouchableOpacity onPress={onSubmitPress}><Text>{buttonText.submit}</Text></TouchableOpacity>
            </View>
        );
    }

    render() {
        const {onChangeText, placeHolder} = this.props;
        return (
            <Modal
                visible={this.state.visible}
                transparent={true}
            >
                <View style={styles.promptWrapper} onStartShouldSetResponder={() => this._hidePrompt()}>
                    <View style={styles.promptBox}>
                        {this._renderTitle()}
                        {this._renderDes()}
                        <TextInput
                            autoFocus={false}
                            style={[S.input, {width: SCREEN_WIDTH - 60 * 2}]}
                            placeholder={placeHolder}
                            onChangeText={(text) => onChangeText(text)}
                        />
                        {this._renderButton()}
                    </View>
                </View>
            </Modal>
        );
    }
}

PromptModal.defaultProps = {
    buttonText: {
        cancel: '取消',
        submit: '确定'
    }
};

PromptModal.PropTypes = {
    titleText: PropTypes.string,
    titleStyle: PropTypes.object,
    renderTitle: PropTypes.func,
    desText: PropTypes.string.isRequired,
    onSubmitPress: PropTypes.func,
    buttonText: PropTypes.object,
    placeholder: PropTypes.string,
    onChangeText: PropTypes.func
};

export default PromptModal;