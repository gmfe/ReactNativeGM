import React, {PropTypes} from 'react';
import {Text as RNText, View, StyleSheet} from 'react-native';
import {Text} from '../typography';
import V from '../variable';
import {IFont} from '../icon';

const styles = StyleSheet.create({
    cellFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 5,
    },
    cellFooterText: {
        textAlign: 'center',
        color: V.descColor,
        fontSize: V.smallFontSize
    },
    vcode: {
        width: 100,
        height: 44
    }
});
const CellFooter = (props) => {
    const {children, style, access, ...others} = props;
    const childrenWithProps = React.Children.map(children, child => {
        if (!child.type) {
            return <Text style={[styles.cellFooterText, style]} {...others}>{child}</Text>;
        }
        if (child.type && child.type.displayName === 'Image' && !child.props.style) {
            return React.cloneElement(child, {style: [styles.vcode, child.props.style]});
        }
        return child;
    });
    return (
        <View style={styles.cellFooter}>
            {childrenWithProps}
            {access ? (
                <IFont
                    name="angle-right"
                    size={V.smallFontSize}
                    style={{marginLeft: 5, color: V.descColor, marginTop: 2}}
                />
            ) : undefined}
        </View>
    );
};
CellFooter.propTypes = {
    access: PropTypes.bool,
    children: PropTypes.node,
    style: RNText.propTypes.style,
    others: PropTypes.object
};

export default CellFooter;
