import React, {PropTypes} from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import {Text} from '../typography';
import V from '../variable';
import IFont from "../ifont";

const styles = StyleSheet.create({
    cellBody: {
        flex: 1
    },
    cellBodyText: {
        textAlign: 'left'
    },
    error: {
        flex: 1,
        color: V.warnColor
    },
    input: {
        flex: 1,
        paddingTop: (Platform.OS === 'ios' ? V.cellGapV : 0),
        paddingBottom: (Platform.OS === 'ios' ? V.cellGapV : 0),
        paddingRight: V.cellGapH,
        lineHeight: V.fontSize14,
        height: V.fontSize14 + 30,
        fontSize: V.fontSize14
    }
});

class CellBody extends React.Component {
    render() {
        const {error, input, children, style, ...others} = this.props;
        const childrenWithProps = React.Children.map(children, (child) => {
            if (!child.type) {
                return <Text style={[styles.cellBodyText, style]} {...others}>{child}</Text>;
            }
            return React.cloneElement(child, {
                style: [
                    child.props.style,
                    error ? styles.error : null,
                    input ? styles.input : null
                ]
            });
        });
        return (
            <View style={[styles.cellBody, style, error ? {flexDirection: 'row'} : null]} {...others}>
                {childrenWithProps}
                {error ? <IFont name="warning" color={V.warnColor}/> : false}
            </View>
        );
    }
}

CellBody.displayName = 'CellBody';
CellBody.propTypes = {
    input: PropTypes.bool,
    error: PropTypes.bool,
    children: PropTypes.node,
    style: View.propTypes.style,
    others: PropTypes.object
};

export default CellBody;
