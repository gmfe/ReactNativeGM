import React, {PropTypes} from 'react';
import {Image, findNodeHandle, Dimensions, NativeModules} from 'react-native';
import LazyManager from './lazy_manager';

const {UIManager} = NativeModules;
const image1px = {uri: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'};

const windowHeight = Dimensions.get('window').height;

class LazyImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
        this.refImage = null;
        this._isMounted = false;
    }

    componentWillUnMount() {
        this._isMounted = true;
        const {lazyScrollViewName} = this.props;
        LazyManager.remove(lazyScrollViewName);
    }

    componentDidMount() {
        const {lazyScrollViewName} = this.props;
        // TODO
        // 延迟下。 否则measure的是0，还没理解内部机制。
        setTimeout(() => {
            this.doLazy();
        }, 500);
        LazyManager.add(lazyScrollViewName, () => {
            this.doLazy();
        });
    }

    doLazy() {
        if (this._isMounted) {
            return;
        }
        if (this.state.show) {
            return;
        }

        // 简单判断。 垂直方向存在于屏幕内就显示
        UIManager.measure(findNodeHandle(this.refImage), (x, y, width, height, pageX, pageY) => {
            if (this._isMounted) {
                return;
            }

            if (pageY < (windowHeight + 100) || (pageY + height) < 0) {
                this.setState({
                    show: true
                });
            }
        });
    }

    render() {
        const {placeholder, source, ...rest} = this.props;
        const {show} = this.state;

        return (
            <Image
                ref={ref => this.refImage = ref}
                {...rest}
                onLayout={this.handleLayout}
                source={show ? source : placeholder}
            />
        );
    }
}

LazyImage.propTypes = {
    lazyScrollViewName: PropTypes.string.isRequired,
    placeholder: Image.propTypes.source
};

LazyImage.defaultProps = {
    placeholder: image1px
};

export default LazyImage;