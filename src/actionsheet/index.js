import React, {PropTypes, Component} from 'react';
import {
    View,
    Modal,
    StyleSheet,
    ViewPropTypes,
    Dimensions,
    TouchableOpacity,
    Animated,
    Easing,
    Platform,
    Text as RNText
} from 'react-native';

import Text from "../typography/text";

import _ from 'underscore';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const ANDROID_BOTTOM_OFFSET = 25;

const styles = StyleSheet.create({
    sheetWrapper: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingTop: 1 / 4 * SCREEN_HEIGHT,
        alignItems: 'center'
    },
    sheetBox: {
        position: 'absolute',
        width: SCREEN_WIDTH,
        alignItems: 'center'
    },
    buttonWrapper: {
        marginTop: 10,
        alignSelf: 'center',
        width: SCREEN_WIDTH - 70 * 2,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cancelWrapper: {
        alignSelf: 'center'
    },
    sheetButton: {
        width: SCREEN_WIDTH,
        backgroundColor: 'white',
        alignItems: 'center',
        paddingBottom: 10,
        paddingTop: 10,
        marginBottom: 1
    },
    cancelButton: {
        width: SCREEN_WIDTH,
        backgroundColor: 'white',
        alignItems: 'center',
        paddingBottom: 10,
        paddingTop: 10,
        marginTop: 8
    },
    cancelText: {
        color: 'red'
    }
});


class ActionSheet extends Component {
    constructor() {
        super();

        this._sheetViewHeight = 0;                                  // items height渲染时动态获取
        this._sheetVisible = false;                                 // 标志位，items渲染或卸载时更改

        this.state = {
            visible: false,
            topPos: new Animated.Value(SCREEN_HEIGHT)
        };
    }

    show() {
        !this.state.visible && this.setState({visible: true});
    }

    _hide() {
        this._startAnimated(SCREEN_HEIGHT);
    }

    _getSheetViewHeight() {
        return this._sheetViewHeight;
    }

    _setSheetViewHeight(evt) {
        this._sheetViewHeight = evt.nativeEvent.layout.height;
        !this._getSheetVisible() && this._startAnimated(this._getSheetTopPos());
    }

    _getSheetVisible() {
        return this._sheetVisible;
    }

    _setSheetVisible(state: boolean) {
        this._sheetVisible = state;
    }

    _getSheetTopPos() {
        return SCREEN_HEIGHT - this._getSheetViewHeight() - (Platform.OS === 'android' ? ANDROID_BOTTOM_OFFSET : 0);
    }

    _startAnimated(pos: number) {
        const {animRate} = this.props;
        const _afterAnimated = (pos) => {
            if(pos === SCREEN_HEIGHT) {
                this._setSheetVisible(false);
                this.state.visible && this.setState({visible: false});
            }else{
                this._setSheetVisible(true);
            }
        };
        Animated.timing(this.state.topPos, {
            duration: animRate,
            toValue: pos,
            ease: Easing.linear
        }).start(() => _afterAnimated(pos));                       // 动画结束后传递位移值判断弹出还是收起修改标志位，是否卸载模态框
    }

    _renderSheet() {
        const {buttonText, onPressItem, buttonStyle} = this.props;
        let sheet = [];
        _.map(buttonText, (text, i) => {
            sheet.push (
                <TouchableOpacity
                    key={i}
                    onPress={() => {
                        this._hide();
                        onPressItem(i);
                    }}
                    style={[styles.sheetButton, buttonStyle]}
                >
                    {typeof(text) === 'string' ? <Text>{text}</Text> : text}
                </TouchableOpacity>
            );
        });
        return sheet;
    }

    _renderCancel() {
        const {cancelText, cancelTextStyle, buttonStyle} = this.props;
        return (
            <TouchableOpacity
                style={[styles.cancelButton, buttonStyle]}
                onPress={() => this._hide()}
            >
                <Text style={[styles.cancelText, cancelTextStyle]}>{cancelText}</Text>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <Modal
                visible={this.state.visible}
                transparent={true}
            >
                <View
                    style={styles.sheetWrapper}
                    onStartShouldSetResponder={() => this._hide()}
                >
                    <Animated.View
                        style={[
                            styles.sheetBox,
                            {top: this.state.topPos}
                        ]}
                        onLayout={(e) => this._setSheetViewHeight(e)}
                    >
                        {this._renderSheet()}
                        {this._renderCancel()}
                    </Animated.View>
                </View>
            </Modal>
        );
    }
}

ActionSheet.defaultProps = {
    cancelText: '取消',
    animRate: 200
};

ActionSheet.PropTypes = {
    onPressItem: PropTypes.func,
    buttonText: PropTypes.array,
    animRate: PropTypes.number,
    cancelText: PropTypes.string,
    cancelTextStyle: RNText.propTypes.style,
    buttonStyle: ViewPropTypes.style
};

export default ActionSheet;