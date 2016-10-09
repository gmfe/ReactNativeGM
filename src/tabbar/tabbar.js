import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableWithoutFeedback
} from 'react-native';
import {IFont} from '../icon';
import V from '../variable';

const styles = StyleSheet.create({
    tabbarView: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        height: 49,
        opacity: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconView: {
        flex: 1,
        height: 49,
        justifyContent: 'center',
        alignItems: 'center',
    },
    adjustIcon: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});

class Tabbar extends Component {
    constructor(props) {
        super(props);
        this.onSelect = this.onSelect.bind(this);
    }

    onSelect(el) {
        if (el.props.onSelect) {
            el.props.onSelect(el);
        } else if (this.props.onSelect) {
            this.props.onSelect(el);
        }
    }

    render() {
        let selected = this.props.selected;
        if (!selected) {
            React.Children.forEach(this.props.children, el=> {
                if (!selected || el.props.initial) {
                    selected = el.props.name;
                }
            });
        }
        return (
            <View style={[styles.tabbarView, this.props.backgroundColor]}>
                {React.Children.map(this.props.children, (el)=> {
                    return (
                        <View style={styles.iconView}>
                            <Tabs
                                el={el}
                                onSelect={this.onSelect}
                                iconName={this.props.iconName}
                                iconStyle={selected === (el.props.name) ? this.props.selectedColor : this.props.ptColor}
                                text={this.props.text}
                            />
                        </View>
                        );
                    }
                )}
            </View>
        );
    }
}

class Tabs extends Component {
    constructor(props) {
        super(props);
        this.handlePress = ::this.handlePress;
    }

    handlePress() {
        return this.props.onSelect(this.props.el);
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={this.handlePress}>
                <View>
                    <TabbarItem {...this.props}/>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

class TabbarItem extends Component {
    render() {
        let {el}=this.props;
        return (
            <View style={styles.adjustIcon}>
                <IFont name={el.props.iconName} size={20} color={this.props.iconStyle.color}/>
                <Text style={[this.props.iconStyle, {fontSize: 12}]}>{el.props.text}</Text>
            </View>
        );
    }
}

Tabbar.PropTypes = {
    selected: PropTypes.object.isRequired,
    onSelect: PropTypes.func.isRequired,
    backgroundColor: View.propTypes.style, //tabbar背景颜色
    selectedColor: Text.propTypes.style, //tabbarItem被选中后的颜色

};

Tabbar.defaultProps = {
    backgroundColor: {color: 'white'},
    selectedColor: {color: V.primaryColor},
    ptColor: {color: '#555'}
};

TabbarItem.PropTypes = {
    name: PropTypes.string.isRequired,
    iconName: PropTypes.string, //ifont对应的name
    text: PropTypes.string, //下面的文字
};

export {
    Tabbar,
    TabbarItem,
};