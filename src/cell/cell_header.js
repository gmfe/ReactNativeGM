import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Image} from 'react-native';
import V from '../variable';
import {Text} from '../typography';

const styles = StyleSheet.create({
    cellHeader: {
        marginRight: 5
    },
    image: {
        width: 24,
        height: 24
    },
    error: {
        color: V.warnColor
    },
    headerIcon: {
        height: 16,
        width: 16
    }
});

const CellHeader = (props) => {
    const {headerText, headerIconUri, headerStyle} = props;
    if(headerText) {
        return (
            <View style={styles.cellHeader}>
                <Text style={headerStyle}>{headerText}</Text>
            </View>);
    }
    if(headerIconUri) {
        return (
            <View style={styles.cellHeader}>
                <Image source={{uri: headerIconUri}} style={[styles.headerIcon, headerStyle]} />
            </View>
        );
    }
};

CellHeader.propTypes = {
    headerText: PropTypes.string,
    headerIconUri: PropTypes.string,
    headerStyle: PropTypes.style
};

export default CellHeader;
