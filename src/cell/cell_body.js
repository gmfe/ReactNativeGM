import React, {PropTypes} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Icon} from '../icon';
import V from '../variable';

const styles = StyleSheet.create({
    cellBody: {
        flex: 1,
    },
    cellBodyText: {
        textAlign: 'left',
        fontSize: V.cellFontSize
    },
    error: {
        flex: 1,
        color: V.warnColor,
    },
});
const CellBody = (props) => {
    const {error, children, style, ...others} = props;
    const childrenWithProps = React.Children.map(children, (child) => {
        if (!child.type) {
            return <Text style={[styles.cellBodyText, style]} {...others}>{child}</Text>;
        }
        return React.cloneElement(child, {
            style: [child.props.style,
                error ? styles.error : null
            ]
        });
    });
    return (
        <View style={[styles.cellBody, style, error ? {flexDirection: 'row'} : null]} {...others}>
            {childrenWithProps}
            {error ? <Icon name="warn"/> : false}
        </View>
    );
};
CellBody.propTypes = {
    error: PropTypes.bool,
    children: PropTypes.node,
    style: View.propTypes.style,
    others: PropTypes.object
};

export default CellBody;
