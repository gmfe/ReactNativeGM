import React, {PropTypes} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Dimensions
} from 'react-native';
import V from '../variable';
import Modal from '../modal';

const styles = StyleSheet.create({
    dialog: {
        width: Dimensions.get('window').width - 60,
        borderRadius: 3
    },
    dialogHeader: {
        paddingTop: 1.2 * V.fontSize16,
        paddingBottom: 0.5 * V.fontSize16
    },
    dialogTitle: {
        fontWeight: '400',
        fontSize: 17,
        textAlign: 'center'
    },
    dialogBody: {
        paddingLeft: V.gap15,
        paddingRight: V.gap15
    },
    dialogFooter: {
        marginTop: 30,
        height: 42,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderColor: V.borderColor,
        borderStyle: 'solid'
    },
    dialogFooterOpr: {
        height: 42,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    dialogFooterOprWithBorder: {
        borderLeftWidth: StyleSheet.hairlineWidth,
        borderColor: V.borderColor,
        borderStyle: 'solid'
    },
    dialogFooterOprText: {
        fontSize: 17
    },
    defaultDialogFooterOprText: {
        color: V.defaultColor
    },
    primaryDialogFooterOprText: {
        color: V.primaryColor
    },
    warnDialogFooterOprText: {
        color: V.warnColor
    }
});

const underlayColor = V.activeColor;

class Dialog extends React.Component {
    renderButtons() {
        return this.props.buttons.map((button, i) => {
            const {
                type,
                label,
                ...others
            } = button;

            return (
                <TouchableHighlight
                    key={i}
                    style={[styles.dialogFooterOpr, i > 0 ? styles.dialogFooterOprWithBorder : {}]}
                    underlayColor={underlayColor}
                    {...others}
                >
                    <Text
                        style={[styles.dialogFooterOprText, styles[`${type}DialogFooterOprText`]]}
                    >{label}</Text>
                </TouchableHighlight>
            );
        });
    }

    render() {
        const {
            title,
            visible,
            onClose,
            wrapStyle,
            style,
            children
        } = this.props;

        return (
            <Modal
                visible={visible}
                onClose={onClose}
                style={[styles.dialog, style]}
                wrapStyle={wrapStyle}
            >
                <View style={styles.dialogHeader}>
                    <Text style={styles.dialogTitle}>{title}</Text>
                </View>
                <View style={styles.dialogBody}>
                    {children}
                </View>
                <View style={styles.dialogFooter}>
                    {this.renderButtons()}
                </View>
            </Modal>
        );
    }
}

Dialog.propTypes = {
    title: PropTypes.string,
    buttons: PropTypes.array.isRequired,
    visible: PropTypes.bool.isRequired,
    children: PropTypes.node,
    onClose: PropTypes.func
};

Dialog.defaultProps = {
    title: '提示'
};

export default Dialog;