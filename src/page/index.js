import React from 'react';
import PropTypes from 'prop-types';
import {View, ScrollView} from 'react-native';
import G from '../global/variable';

class Page extends React.Component {
    render() {
        const {
            style,
            white,
            noScrollContent,
            scrollViewProps,
            top,
            bottom,
            children,
            ...rest
        } = this.props;

        return (
            <View {...rest} style={[{
                flex: 1,
                backgroundColor: white ? G.bgWhite : G.bgDefault
            }, style]}>
                {top && <View>{top}</View>}
                {noScrollContent ? (
                    <View style={{flex: 1}}>
                        {children}
                    </View>
                ) : (
                    <ScrollView
                        keyboardShouldPersistTaps="always"
                        keyboardDismissMode={'on-drag'}
                        style={[{flex: 1}, scrollViewProps.style]}
                        {...scrollViewProps}
                    >
                        {children}
                    </ScrollView>
                )}
                {bottom ? bottom : undefined}
            </View>
        );
    }
}

Page.propTypes = {
    top: PropTypes.node,
    bottom: PropTypes.node,
    white: PropTypes.bool,
    children: PropTypes.node,
    noScrollContent: PropTypes.bool,
    scrollViewProps: PropTypes.object
};

Page.defaultProps = {
    scrollViewProps: {}
};

export default Page;