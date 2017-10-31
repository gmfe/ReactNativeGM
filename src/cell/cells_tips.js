import React from 'react';
import PropTypes from 'prop-types';
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
const CellsTips = (props) => {
    const {children, style, ...others} = props;
    return <Text style={[styles.cellsTips, style]} {...others}>{children}</Text>;
};
CellsTips.propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    others: PropTypes.object
};

export default CellsTips;
