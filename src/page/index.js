import React, {PropTypes} from 'react';
import {View, StyleSheet} from 'react-native';
import G from '../global/variable';
import InputScrollView from 'react-native-inputscrollview';



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
                    <InputScrollView style={[styles.pageContent, scrollViewProps.style]} {...scrollViewProps}>
                        {children}
                    </InputScrollView>
                )}
                {tabbar ? <View>{tabbar}</View> : undefined}
                {bottom ? bottom : undefined}
            </View>
        );
    }
}

Page.propTypes = {
    children: PropTypes.node,
    style: View.propTypes.style,
    white: PropTypes.bool,
    noScrollContent: PropTypes.bool,
    scrollViewProps: PropTypes.object,
    header: PropTypes.node,
    tabbar: PropTypes.node,
    bottom: PropTypes.node
};

export default Page;