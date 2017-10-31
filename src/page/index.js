import React from 'react';
import PropTypes from 'prop-types';
import {View, ScrollView, StyleSheet} from 'react-native';
import G from '../global/variable';



const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: G.bgDefault
    },
    pageWhite: {
        backgroundColor: G.bgWhite
    },
    pageContent: {
        flex: 1
    }
});

class Page extends React.Component {
    render() {
        const {
            style,
            white,
            noScrollContent,
            scrollViewProps = {},
            header,
            tabbar,
            bottom,
            children,
            ...rest
        } = this.props;

        return (
            <View {...rest} style={[styles.page, white ? styles.pageWhite : {}, style]}>
                {header ? <View>{header}</View> : undefined}
                {noScrollContent ? (
                    <View style={styles.pageContent}>
                        {children}
                    </View>
                ) : (
                    <ScrollView keyboardShouldPersistTaps={true} keyboardDismissMode={'on-drag'}
                                style={[styles.pageContent, scrollViewProps.style]} {...scrollViewProps}>
                        {children}
                    </ScrollView>
                )}
                {tabbar ? <View>{tabbar}</View> : undefined}
                {bottom ? bottom : undefined}
            </View>
        );
    }
}

Page.propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    white: PropTypes.bool,
    noScrollContent: PropTypes.bool,
    scrollViewProps: PropTypes.object,
    header: PropTypes.node,
    tabbar: PropTypes.node,
    bottom: PropTypes.node
};

export default Page;