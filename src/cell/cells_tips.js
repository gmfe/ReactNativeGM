import React, {PropTypes} from 'react';
import {Text} from 'react-native';
import StyleSheet from '../style_sheet';
import V from '../variable';

const styles = StyleSheet.create({
    cellsTips: {
        paddingLeft: V.cellGapH,
        paddingRight: V.cellGapH,
        fontSize: V.cellTipsFontSize,
        color: V.descColor,
        marginBottom: V.cellTipsFontSize * 0.3,
        lineHeight: V.cellTipsFontSize * V.baseLineHeight,
        android: {
            lineHeight: Math.round(V.cellTipsFontSize * V.baseLineHeight)
        }
    }
});

class CellsTips extends React.Component {
    render() {
        const {children, style, ...others} = this.props;
        return <Text style={[styles.cellsTips, style]} {...others}>{children}</Text>;
    }
}

CellsTips.propTypes = {
    children: PropTypes.node,
    style: Text.propTypes.style,
    others: PropTypes.object
};

export default CellsTips;
