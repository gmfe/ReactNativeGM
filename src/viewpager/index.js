import React, {PropTypes, Component} from 'react';
import {
    Dimensions,
    View,
    PanResponder,
    Animated,
    StyleSheet
} from 'react-native';

import StaticRenderer from 'react-native/Libraries/Components/StaticRenderer';
import DefaultViewPageIndicator from './default_viewpager_indicator';
import ViewPagerDataSource from './viewpager_datasource';

const SCREEN_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
    indicators: {
        flex: 1,
        alignItems: 'center',
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        backgroundColor: 'transparent'
    }
});

class ViewPager extends Component {
    constructor() {
        super();

        this.childIndex = 0;
        this.fling = false;

        this.state = {
            currentPage: 0,
            scrollValue: new Animated.Value(0)
        };
    }

    static DataSource = ViewPagerDataSource;

    _goToPage(pageNum, animate = true) {
        const step = pageNum - this.state.currentPage;
        this._movePage(step, null, animate);
    }

    _movePage(step: number, gestureState, animate: boolean = true ) {
        const {dataSource, isLoop, animation, onChangePage} = this.props;
        let pageCount = dataSource.getPageCount();
        let pageNum = this.state.currentPage + step;
        // 区分是否可循环滚动，可循环则取余
        pageNum = isLoop ? (
            pageCount === 0 ? 0 : ((pageNum + pageCount) % pageCount)
        ) : (
            Math.min(Math.max(0, pageNum), pageCount - 1)
        );
        const moved = pageNum !== this.state.currentPage;
        const scrollStep = (moved ? step : 0) + this.childIndex;
        const nextChildIdx = (pageNum > 0 || isLoop) ? 1 : 0;
        const postChange = () => {
            this.fling = false;
            this.childIndex = nextChildIdx;
            this.state.scrollValue.setValue(nextChildIdx);
            this.setState({
                currentPage: pageNum
            });
        };
        // 有动画则动画播放完毕后处理，没有立即处理
        if (animate) {
            this.fling = true;
            animation(this.state.scrollValue, scrollStep, gestureState)
                .start((event) => {
                    if (event.finished) {
                        postChange();
                    }
                    moved && onChangePage && onChangePage(pageNum);
                });
        } else {
            postChange();
            moved && onChangePage && onChangePage(pageNum);
        }
    }

    _getPage(pageIdx: number, loop:boolean = true ) {
        const {dataSource, renderPage} = this.props;
        const pageID = dataSource.pageIdentities[pageIdx];
        return (
            <StaticRenderer
                key={'p_' + pageID + (loop ? '_1' : '')}
                shouldUpdate={true}
                render={renderPage.bind(
                    null,
                    dataSource.getPageData(pageIdx),
                    pageID,
                    this.state.currentPage
                )}
            />
        );
    }

    componentWillMount() {
        const {isLoop} = this.props;
        // 释放时判断滑向最近一页或不滑动
        const release = (e, gestureState) => {
            const dxPercent = gestureState.dx / SCREEN_WIDTH, vx = gestureState.vx;
            let step = 0;
            (dxPercent < -0.5 || (dxPercent < 0 && vx <= -1e-6)) && (step = 1);
            (dxPercent > 0.5 || (dxPercent > 0 && vx >= 1e-6)) && (step = -1);
            this._movePage(step, gestureState);
        };
        this._panResponder = PanResponder.create({
            onMoveShouldSetPanResponder: (e, gestureState) => {
                if (Math.abs(gestureState.dx) > Math.abs(gestureState.dy) && !this.fling) {
                    return true;
                }
            },
            onPanResponderRelease: release,
            onPanResponderTerminate: release,
            // 视图随拖动移动
            onPanResponderMove: (e, gestureState) => {
                const dx = gestureState.dx;
                const offsetX = -dx / SCREEN_WIDTH + this.childIndex;
                this.state.scrollValue.setValue(offsetX);
            }
        });
        if(isLoop) {
            this.childIndex = 1;
            this.state.scrollValue.setValue(1);
        }
    }

    componentDidMount() {
        this.timer = new setInterval(() => this._movePage(1), 5000);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.dataSource) {
            const maxPage = nextProps.dataSource.getPageCount() - 1;
            const constrainedPage = Math.max(0, Math.min(this.state.currentPage, maxPage));
            this.setState({currentPage: constrainedPage});
            !nextProps.isLoop && (this.state.scrollValue.setValue(constrainedPage > 0 ? 1 : 0));
            this.childIndex = Math.min(this.childIndex, constrainedPage);
            this.fling = false;
        }
    }

    componentWillUnmount() {
        this.timer && clearInterval(this.timer);
    }

    _renderPageIndicator(params) {
        const renderPageIndicator = this.props.renderPageIndicator;
        if(renderPageIndicator) {
            return Object.assign(renderPageIndicator(), params);
        }
        return (
            <View style={styles.indicators}>
                <DefaultViewPageIndicator {...this.props} {...params}/>
            </View>
        );
    }

    _renderPrePage(pageCount: number, isLoop: boolean) {
        if (this.state.currentPage > 0) {
            return this._getPage(this.state.currentPage - 1);
        }
        if (this.state.currentPage === 0 && isLoop) {
            return this._getPage(pageCount - 1, true);
        }
    }

    _renderNextPage(pageCount: number, isLoop: boolean) {
        if (this.state.currentPage < pageCount - 1) {
            return this._getPage(this.state.currentPage + 1);
        }
        if (this.state.currentPage === pageCount - 1 && isLoop) {
            return this._getPage(0, true);
        }
    }

    render() {
        const {dataSource, isLoop} = this.props;
        const pageCount = dataSource.pageIdentities.length;
        const WINDOW_NUM = pageCount > 2 ? 3 : pageCount;
        const sceneContainerStyle = {
            width: SCREEN_WIDTH * WINDOW_NUM,
            flex: 1,
            flexDirection: 'row'
        };
        const translateX = this.state.scrollValue.interpolate({
            inputRange: [0, 1], outputRange: [0, -SCREEN_WIDTH]
        });
        return (
            <View>
                <Animated.View style={[sceneContainerStyle, {transform: [{translateX: translateX}]}]}
                               {...this._panResponder.panHandlers}>
                    {this._renderPrePage(pageCount, isLoop)}
                    {this._getPage(this.state.currentPage)}
                    {this._renderNextPage(pageCount, isLoop)}
                </Animated.View>
                {
                    this._renderPageIndicator({
                        goToPage: ::this._goToPage,
                        pageCount: pageCount,
                        activePage: this.state.currentPage,
                        scrollValue: this.state.scrollValue,
                        scrollOffset: this.childIndex
                    })
                }
            </View>
        );
    }
}

ViewPager.defaultProps = {
    isLoop: true,
    locked: false,
    dotSize: 6,
    dotColor: 'white',
    curDotColor: 'green',
    animation:
    (animate, toValue) => {
        return Animated.spring(animate, {
            toValue: toValue,
            tension: 50,
            friction: 10
        });
    }

};

ViewPager.PropTypes = {
    dataSource: PropTypes.instanceOf(ViewPagerDataSource).isRequired,
    renderPage: PropTypes.func.isRequired,
    onChangePage: PropTypes.func,
    renderPageIndicator: PropTypes.func,
    isLoop: PropTypes.bool,
    animation: PropTypes.func,
    dotSize: PropTypes.number,
    dotColor: PropTypes.color,
    curDotColor: PropTypes.color
};

export default ViewPager;