import React, {PropTypes} from 'react';

import {ScrollView} from 'react-native';

import LazyManager from './lazy_manager';

class LazyScrollView extends React.Component {
    constructor(props) {
        super(props);
        this.handleScroll = ::this.handleScroll;
    }

    handleScroll(event) {
        const {onScroll, name} = this.props;
        if (onScroll) {
            onScroll(event);
        }
        LazyManager.trigger(name);
    }

    render() {
        const {
            style,
            scrollEventThrottle,
            children,
            ...rest
        } = this.props;

        return (
            <ScrollView
                {...rest}
                style={[{
                    flex: 1
                }, style]}
                onScroll={this.handleScroll}
                scrollEventThrottle={scrollEventThrottle}
            >
                {children}
            </ScrollView>
        );
    }
}

LazyScrollView.propTypes = {
    name: PropTypes.string.isRequired // 全局唯一
};

LazyScrollView.defaultProps = {
    scrollEventThrottle: 1000
};

export default LazyScrollView;