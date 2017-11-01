import React, {PropTypes} from 'react';
import {Text, StyleSheet} from 'react-native';
import V from '../variable';

const styles = StyleSheet.create({
    cellsTitle: {
        marginTop: V.cellTipsFontSize * 0.77 + (14 * V.baseLineHeight - 14) * 0.5,
        marginBottom: V.cellTipsFontSize * 0.3 + (14 * V.baseLineHeight - 14) * 0.5,
        paddingLeft: V.cellGapH,
        paddingRight: V.cellGapH,
        fontSize: V.cellTipsFontSize,
        color: V.descColor
    }
});

class CellsTitle extends React.Component {
    render() {
        const {children, style, ...others} = this.props;
        return <Text style={[styles.cellsTitle, style]} {...others}>{children}</Text>;
    }
}

CellsTitle.propTypes = {
    children: PropTypes.node,
    style: Text.propTypes.style,
    others: PropTypes.object
};

export default CellsTitle;