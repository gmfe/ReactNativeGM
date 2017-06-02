import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Animated
} from 'react-native';

const DOT_SAPCE = 4;

const styles = StyleSheet.create({
    tab: {
        paddingLeft: DOT_SAPCE,
        paddingRight: DOT_SAPCE,
        paddingTop: DOT_SAPCE,
        paddingBottom: DOT_SAPCE,
        alignItems: 'center'
    },

    tabs: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    curDot: {
        position: 'absolute',
        bottom: DOT_SAPCE
    }
});

class DefaultViewPageIndicator extends Component {
    _renderIndicator(page) {
        const {dotSize, dotColor} = this.props;
        return (
            <View style={styles.tab} key={'idc_' + page}>
                <View style={{width:dotSize, height:dotSize, borderRadius:dotSize / 2, backgroundColor:dotColor}} />
            </View>
        );
    }

    render() {
        const {dotSize, curDotColor, pageCount, activePage, scrollOffset, scrollValue} = this.props;
        const itemWidth = dotSize + (DOT_SAPCE * 2);
        const offsetX = itemWidth * (activePage - scrollOffset);
        // 最后一个圆点不再播放动画
        const left = ((activePage === (pageCount - 1) || activePage === 0) && pageCount > 1) ? (offsetX + itemWidth + DOT_SAPCE) : scrollValue.interpolate({
            inputRange: [0, 1], outputRange: [offsetX + DOT_SAPCE, offsetX + itemWidth + DOT_SAPCE]
        });
        let indicators = [];
        for (let i = 0; i < pageCount; i++) {
            indicators.push(this._renderIndicator(i));
        }
        return (
            <View style={styles.tabs}>
                {indicators}
                <Animated.View style={[styles.curDot, {left}, {width:dotSize, height:dotSize, borderRadius:dotSize / 2, backgroundColor:curDotColor}]} />
            </View>
        );
    }
}

export default DefaultViewPageIndicator;