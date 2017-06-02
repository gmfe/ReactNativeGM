import React, {PropTypes} from 'react';
import {View, StyleSheet, Platform, TextInput, ViewPropTypes} from 'react-native';
import {Text} from '../typography';
import {Icon} from '../icon';
import V from '../variable';

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
        lineHeight: V.fontSize16,
        height: V.fontSize16 + 30,
        fontSize: V.fontSize16
    }
});

const CellBody = (props) => {
    const {bodyText, bodyType, bodyInputHolder, bodyStyle} = props;
    return(
        <View style={[styles.cellBody, bodyStyle, bodyType === 'error' ? {flexDirection: 'row'} : null]}>
            {
                bodyText ?
                <Text style={[styles.cellBodyText, bodyType === 'error' ? styles.error : null, bodyStyle]}>
                    {bodyText}
                    {bodyType === 'error' ? <Icon name="warn"/> : null}
                </Text> : null
            }
            {bodyType === 'input' ? <TextInput style={styles.input} placeholder={bodyInputHolder} /> : null}
        </View>
    );
};

CellBody.defaultProps = {
    bodyType: 'text'
};

CellBody.propTypes = {
    bodyText: PropTypes.string,
    bodyType: PropTypes.oneOf(['text', 'input', 'error']),
    bodyInputHolder: PropTypes.string,
    bodyStyle: ViewPropTypes.style
};

export default CellBody;
