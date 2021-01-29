import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Modal from 'react-native-modal';

class Mask extends React.Component {
  handleCancel = () => {
    this.props.onCancel();
  };

  render() {
    const { isVisible, children, style, ...rest } = this.props;

    return (
      <Modal
        {...rest}
        isVisible={isVisible}
        avoidKeyboard
        backdropOpacity={0.1}
        onBackButtonPress={this.handleCancel}
        onBackdropPress={this.handleCancel}
        style={[{ margin: 0 }, style]}>
        {children}
      </Modal>
    );
  }
}

Mask.propTypes = {
  isVisible: PropTypes.bool,
  onCancel: PropTypes.func,
};

Mask.defaultProps = {
  onCancel: _.noop,
  isVisible: true,
};

export default Mask;
