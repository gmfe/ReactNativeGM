import React, {PropTypes} from 'react';
import {
    Text,
    View,
    TouchableHighlight,
    StyleSheet
} from 'react-native';
import V from '../variable';
import {IFont} from '../icon';

const $lineColor = '#E5E5E5';
const $grayColor = '#999999';
const styles = StyleSheet.create({
    PanelFooter: {
        paddingTop: 12, // 10
        paddingRight: 15,
        paddingBottom: 12,
        marginLeft: 15,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderStyle: 'solid',
        borderColor: $lineColor,
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
    },
    PanelFooterText: {
        flex: 1,
        color: $grayColor,
        fontSize: 14
    }
});
const PanelFooter = (props) => {
    const {children, style, textStyle, access, ...others} = props;
    return (
        <TouchableHighlight style={style} underlayColor={V.activeColor} {...others}>
            <View style={styles.PanelFooter}>
                <Text style={[styles.PanelFooterText, textStyle]}>
                    {children}
                </Text>
                {access ?
                    <IFont
                        name="angle-right"
                        size={V.cellFontSize * 0.8}
                        style={{marginLeft: 5, color: V.descColor, marginTop: 2}}
                    /> : undefined}
            </View>
        </TouchableHighlight>
    );
};

PanelFooter.propTypes = {
    access: PropTypes.bool,
    children: PropTypes.node,
    style: TouchableHighlight.propTypes.style,
    textStyle: Text.propTypes.style,
    others: PropTypes.object
};

export default PanelFooter;