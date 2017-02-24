import React, {PropTypes} from 'react';
import {
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Dimensions
} from 'react-native';
import V from '../variable';
import _ from 'underscore';

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        top: -Dimensions.get('window').height,
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: V.bgMask
    },
    inner: {
        backgroundColor: V.whiteColor,
        overflow: 'hidden'
    }
});

class Modal extends React.Component {
    render() {
        const {
            visible,
            onClose,
            wrapStyle,
            style,
            children
        } = this.props;

        if (!visible) {
            return null;
        }

        return (
            <TouchableWithoutFeedback onPress={onClose}>
                <View style={[styles.wrapper, wrapStyle]}>
                    <TouchableWithoutFeedback onPress={null}>
                        <View style={[styles.inner, style]}>
                            {children}
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

Modal.propTypes = {
    visible: PropTypes.bool.isRequired,
    onClose: PropTypes.func,
    style: View.propTypes.style,
    wrapStyle: View.propTypes.style
};

Modal.defaultProps = {
    onClose: _.noop
};

export default Modal;