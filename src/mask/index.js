import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Modal,
    TouchableWithoutFeedback
} from 'react-native';
import _ from 'lodash';
import S from '../styles';


class Mask extends React.Component {
    render() {
        const {
            style,
            onCancel,
            children,
            ...rest
        } = this.props;

        return (
            <Modal transparent onRequestClose={_.noop}>
                <TouchableWithoutFeedback onPress={onCancel}>
                    <View {...rest} style={[S.mask, style]}>
                        {children}
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        );
    }
}

Mask.propTypes = {
    onCancel: PropTypes.func
};

Mask.defaultProps = {
    onCancel: _.noop
};

export default Mask;