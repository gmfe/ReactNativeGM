import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Platform, TextInput, ViewPropTypes} from 'react-native';
import {Text} from '../typography';
import {IFont} from '../icon';
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
        lineHeight: V.fontSize14,
        height: V.fontSize14 + 30,
        fontSize: V.fontSize14
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
                    {bodyType === 'error' ? <IFont name="warning" style={{color: V.warnColor}}/> : null}
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
