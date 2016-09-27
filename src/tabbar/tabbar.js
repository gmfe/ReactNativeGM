'use strict';

import React, {Component} from 'react';

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import {IFont} from '../icon';

const styles = StyleSheet.create({
    tabbarView: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        height: 50,
        opacity: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconView: {
        flex: 1,
        height: 50,
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
                {React.Children.map(this.props.children.filter(c=>c), (el)=>
                    <TouchableOpacity
                        key={el.props.name + "touch"}
                        style={[
                            styles.iconView,
                            this.props.iconStyle,
                            (el.props.name || el.key) === selected ?
                            this.props.selectedIconStyle || el.props.selectedIconStyle || {} : {}
                        ]}
                        onPress={()=>!this.props.locked && this.onSelect(el)}
                        onLongPress={()=>this.onSelect(el)}
                        activeOpacity={el.props.pressOpacity}
                        adjustICon={styles.adjustIcon}
                    >

                        {selected === (el.props.name || el.key) ?
                            React.cloneElement(el, {
                                selected: true,
                                style: styles.adjustIcon,
                                iconStyle: this.props.selectedStyle,
                            }) :
                            React.cloneElement(el, {
                                style: styles.adjustIcon,
                                iconStyle: {color: '#444'}
                            })}
                    </TouchableOpacity>
                )}
            </View>
        );
    }
}

class TabbarItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={this.props.style}>
                <IFont name={this.props.iconName} size={24} color={this.props.iconStyle.color}/>
                <Text style={this.props.iconStyle}>{this.props.text}</Text>
            </View >
        );
    }
}

export {
    Tabbar,
    TabbarItem
};
