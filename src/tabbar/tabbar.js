import React from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    View,
    TouchableWithoutFeedback,
    Dimensions
} from 'react-native';
import {Text} from '../typography';
import {IFont} from '../icon';
import V from '../variable';

const SCREEN_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
    tabbarView: {
        width: SCREEN_WIDTH,
        position: 'absolute',
        bottom: 0,
        height: 49,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: V.borderColor

    },
    iconView: {
        position: 'relative',
        height: 49,
        // width: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    adjustIcon: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    redPoint: {
        position: 'absolute',
        top: 4,
        right: 14,
        height: 8,
        width: 8,
        backgroundColor: 'red',
        borderRadius: 4
    }
});

class Tabbar extends React.Component {
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
                        <TabbarItem
                            el={el}
                            onSelect={this.onSelect}
                            iconName={this.props.iconName}
                            selectedColor={selected === (el.props.name) ? this.props.selectedColor : this.props.ptColor}
                            redPoint={el.props.redPoint}
                            text={this.props.text}
                        />
                    );
                })}
            </View>
        );
    }
}

class TabbarItem extends React.Component {
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
            <TouchableWithoutFeedback onPress={this.handlePress}>
                <View style={[styles.adjustIcon, styles.iconView]}>

                    <IFont name={el.props.iconName} size={20} color={this.props.selectedColor.color}/>
                    <Text style={[this.props.selectedColor, {fontSize: 12}]}>{el.props.text}</Text>
                    <View style={this.props.redPoint ? styles.redPoint : null}/>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

Tabbar.PropTypes = {
    selected: PropTypes.object.isRequired,
    onSelect: PropTypes.func.isRequired,
    backgroundColor: PropTypes.string, //tabbar背景颜色
    selectedColor: PropTypes.string //tabbarItem被选中后的颜色
};

TabbarItem.PropTypes = {
    name: PropTypes.string.isRequired,
    redPoint: PropTypes.bool, //红点
    iconName: PropTypes.string, //ifont对应的name
    text: PropTypes.string //下面的文字
};

Tabbar.defaultProps = {
    backgroundColor: {backgroundColor: V.bgWhite},
    selectedColor: {color: V.primaryColor},
    ptColor: {color: V.defaultColor}
};

export {
    Tabbar,
    TabbarItem
};