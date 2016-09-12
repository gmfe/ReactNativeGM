import React from 'react';
import {
    View,
    Dimensions,
    StyleSheet
} from 'react-native';
import LayerRoot from '../layer_root';


const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 2
    },
    inner: {
        // 保持和微信浏览器原生的一致
        backgroundColor: '#3cc51f',
        height: 2,
        width: 0
    }
});

class NProgress extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            percent: 0
        };

        this.timer = null;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.percent) {
            clearTimeout(this.timer);
            this.setState({
                percent: nextProps.percent
            });
            this.doInc();
        }
    }

    render() {
        const {percent} = this.state;
        return (
            <View style={styles.container}>
                <View style={[styles.inner, {
                    width: percent / 100 * width
                }]}/>
            </View>
        );
    }

    componentDidMount() {
        this.doInc();
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    doInc() {
        this.timer = setTimeout(() => {
            this.setState({
                percent: this.state.percent + (100 - this.state.percent) * 0.2
            });
            if (this.state.percent < 90) {
                this.doInc();
            }
        }, 150);
    }
}

let timer = null;

NProgress.start = () => {
    clearTimeout(timer);
    LayerRoot.setComponent(LayerRoot.TYPE.NPROGRESS, <NProgress percent={1}/>);
};

NProgress.done = () => {
    LayerRoot.setComponent(LayerRoot.TYPE.NPROGRESS, <NProgress percent={100}/>);
    timer = setTimeout(() => {
        LayerRoot.removeComponent(LayerRoot.TYPE.NPROGRESS);
    }, 150);
};

export default NProgress;