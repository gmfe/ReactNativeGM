import React from 'react';
import PropTypes from 'prop-types';
import {ActivityIndicator} from 'react-native';
import {IFont} from '../icon';
import LayerRoot from '../layer_root';
import {Text} from '../typography';
import Mask from '../mask';
import S from '../styles';
import _ from 'lodash';

const renderIcon = (icon) => {
    if (icon === 'loading') {
        return <ActivityIndicator color="#fff" style={[S.marginVertical0]}/>;
    }

    return <IFont name={icon} style={[S.marginBottom10, S.textWhite, S.textCenter]}/>;
};

class Toast extends React.Component {
    render() {
        const {
            icon,
            children
        } = this.props;

        console.log('adsfasdf');

        return (
            <Mask
                style={[S.flexAlignCenter, S.flexJustifyCenter, {
                    backgroundColor: 'transparent',
                    borderRadius: 5
                }]}
                onCancel={_.noop}
            >
                {icon && renderIcon(icon)}
                <Text style={[S.marginBottom10, S.textWhite, S.textCenter]}>{children}</Text>
            </Mask>
        );
    }
}

const processOptions = (options) => {
    if (typeof options === 'string') {
        options = {
            children: options
        };
    }
    return options;
};

let timer = null;

// 静态方法支持time参数。 false 或者 数字
Object.assign(Toast, {
    clear() {
        LayerRoot.removeComponent(LayerRoot.TYPE.TOAST);
    },
    tip(options) {
        clearTimeout(timer);
        options = processOptions(options);
        LayerRoot.setComponent(LayerRoot.TYPE.TOAST, <Toast {...options}/>);
        if (options.time !== false && options.time !== 0) {
            timer = setTimeout(() => {
                LayerRoot.removeComponent(LayerRoot.TYPE.TOAST);
            }, options.time || 2000);
        }
    },
    success(options) {
        options = processOptions(options);
        Toast.tip(Object.assign({icon: 'success'}, options));
    },
    info(options) {
        options = processOptions(options);
        Toast.tip(Object.assign({icon: 'info-circle'}, options));
    },
    warning(options) {
        options = processOptions(options);
        Toast.tip(Object.assign({icon: 'warning'}, options));
    },
    danger(options) {
        options = processOptions(options);
        Toast.tip(Object.assign({icon: 'close'}, options));
    },
    loading(options) {
        options = processOptions(options);
        Toast.tip(Object.assign({icon: 'loading', children: '加载中...'}, options));
    }
});

Toast.propTypes = {
    icon: PropTypes.string, // iconfont 的图标名字
    children: PropTypes.node
};

export default Toast;