import React, {Component, PropTypes} from 'react';

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
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
        alignItems: 'center'
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
            React.Children.forEach(this.props.children.filter(c=>c), el=> {
                if (!selected || el.props.initial) {
                    selected = el.props.name || el.key;
                }
            });
        }
        return (
            <View style={[styles.tabbarView, this.props.style]}>
                {React.Children.map(this.props.children.filter(c=>c), (el)=> {
                        return (
                            <View style={[styles.iconView, this.props.iconStyle]}>
                                <TabbarItem
                                    el={el}
                                    onSelect={this.onSelect}
                                    iconName={this.props.iconName}
                                    iconStyle={selected === (el.props.name) ? this.props.selectedStyle : {color: '#434343'}}
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

class TabbarItem extends Component {
    constructor(props) {
        super(props);
        this.handlePress = ::this.handlePress;
    }

    handlePress() {
        return this.props.onSelect(this.props.el);
    }

    render() {
        let {el}=this.props;
        return (
            <TouchableOpacity style={styles.adjustIcon} onPress={this.handlePress}>
                <IFont name={el.props.iconName} size={20} color={this.props.iconStyle.color}/>
                <Text style={[this.props.iconStyle, {fontSize: 12}]}>{el.props.text}</Text>
            </TouchableOpacity >
        );
    }
}

Tabbar.PropTypes = {
    selected: PropTypes.string,
    onSelect: PropTypes.func,
    style: View.propTypes.style,
    selectedStyle: Text.propTypes.style,

};

Tabbar.defaultProps = {
    style: {backgroundColor: 'white'},
    selectedStyle: {color: V.primaryColor},
};

TabbarItem.PropTypes = {
    iconName: PropTypes.string, //ifont对应的name
    text: PropTypes.string, //下面的文字
    name: PropTypes.string,
};

export {
    Tabbar,
    TabbarItem,
};