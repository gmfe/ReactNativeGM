import React from 'react';
import {
    Text,
    StyleSheet
} from 'react-native';

import V from '../variable';

const getStyle = (fontSize) => {
    return {
        fontSize: fontSize,
        color: V.defaultColor,
        fontWeight: '400',
        lineHeight: fontSize * ((V.baseLineHeight - 1) / 2 + 1),
        paddingBottom: fontSize * (V.baseLineHeight - 1) / 2
    };
};

const styles = StyleSheet.create({
    h1: getStyle(V.h1FontSize),
    h2: getStyle(V.h2FontSize),
    h3: getStyle(V.h3FontSize),
    h4: getStyle(V.h4FontSize)
});

const H1 = (props) => (
    <Text style={[styles.h1, props.style]}>
        {props.children}
    </Text>
);

const H2 = (props) => (
    <Text style={[styles.h2, props.style]}>
        {props.children}
    </Text>
);


const H3 = (props) => (
    <Text style={[styles.h3, props.style]}>
        {props.children}
    </Text>
);

const H4 = (props) => (
    <Text style={[styles.h4, props.style]}>
        {props.children}
    </Text>
);

module.exports = {
    H1, H2, H3, H4
};