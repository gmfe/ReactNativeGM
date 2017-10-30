import React from 'react';
import {
    View
} from 'react-native';

const TYPE = {
    POPUP: 'popup',
    DIALOG: 'dialog',
    TOAST: 'toast'
};

let setComponentFunc = null;

class LayerRoot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popup: null,
            dialog: null,
            toast: null
        };
    }

    componentDidMount() {
        setComponentFunc = (type, component) => {
            const s = {};
            s[type] = component;
            this.setState(s);
        };
    }

    componentWillUnMount() {
        setComponentFunc = null;
    }

    render() {
        // 有层级关系
        return (
            <View>
                <View>{this.state.popup}</View>
                <View>{this.state.dialog}</View>
                <View>{this.state.toast}</View>
            </View>
        );
    }
}

LayerRoot.setComponent = (type, com) => {
    if (setComponentFunc) {
        LayerRoot.removeComponent();
        setComponentFunc(type, com);
    } else {
        console.warn('LayerRoot is uninitialized');
    }
};

LayerRoot.removeComponent = (type) => {
    if (setComponentFunc) {
        setComponentFunc(type, undefined);
    } else {
        console.warn('LayerRoot is uninitialized');
    }
};

LayerRoot.TYPE = TYPE;

export default LayerRoot;