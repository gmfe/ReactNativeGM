import React, {PropTypes} from 'react';
import {View, ScrollView, ActivityIndicator} from 'react-native';
import {Text} from '../typography';
import S from '../styles';
import V from '../variable';

class Infinite extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };

        this.y = 0;
        this.timer = null;
        this.___unmounted = false;
        this.handleScroll = ::this.handleScroll;
    }

    componentDidUnMount() {
        this.___unmounted = true;
    }

    handleScroll(e) {
        const {contentOffset, contentSize, layoutMeasurement} = e.nativeEvent;
        const {bottomOffset, done} = this.props;

        if (contentOffset.y > this.y) {
            if (!this.state.loading && !done) {
                if (layoutMeasurement.height + contentOffset.y + bottomOffset >= contentSize.height) {
                    this.handleBottom();
                }
            }
        }
        this.y = contentOffset.y;
    }

    handleBottom() {
        const {onBottom} = this.props;

        clearTimeout(this.timer);

        this.setState({
            loading: true
        });

        const result = onBottom();
        // 简单判断是否promise
        if (result && result.then) {
            result.then(() => {
                if (!this.___unmounted) {
                    this.setState({
                        loading: false
                    });
                }
            }, () => {
                if (!this.___unmounted) {
                    this.setState({
                        loading: false
                    });
                }
            });
        } else {
            this.timer = setTimeout(() => {
                if (!this.___unmounted) {
                    this.setState({
                        loading: false
                    });
                }
            }, 500);
        }
    }

    render() {
        const {style, children, scrollEventThrottle, done, ...rest} = this.props;
        const {loading} = this.state;

        return (
            <ScrollView
                {...rest}
                style={[S.flex, style]}
                onScroll={this.handleScroll}
                scrollEventThrottle={scrollEventThrottle}
            >
                {children}
                {done ? (
                    <View style={[S.padding10, {
                        height: 40
                    }]}>
                        <Text style={[S.textDesc, S.textCenter, S.textSmall]}>没有更多数据</Text>
                    </View>
                ) : (loading && (
                    <View style={[S.padding10, {
                        height: 40
                    }]}>
                        <ActivityIndicator
                            animating={true}
                            color={V.textDesc}
                        />
                    </View>
                ))}
            </ScrollView>
        );
    }
}

Infinite.propTypes = {
    bottomOffset: PropTypes.number,
    onBottom: PropTypes.func.isRequired,
    done: PropTypes.bool,
    scrollEventThrottle: PropTypes.number
};

Infinite.defaultProps = {
    onBottom: () => {
    },
    bottomOffset: 100 + 40,
    scrollEventThrottle: 50
};

export default Infinite;