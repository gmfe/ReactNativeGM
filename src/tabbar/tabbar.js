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
        height: 49,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconView: {
        flex: 1,
        height: 49,
        justifyContent: 'center',
        alignItems: 'center'
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
                        <TabbarItem
                            el={el}
                            onSelect={this.onSelect}
                            iconName={this.props.iconName}
                            selectedColor={selected === (el.props.name) ? this.props.selectedColor : this.props.ptColor}
                            text={this.props.text}
                        />
                    );
                })}
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
            <TouchableWithoutFeedback onPress={this.handlePress}>
                <View style={[styles.adjustIcon, styles.iconView]}>
                    <IFont name={el.props.iconName} size={20} color={this.props.selectedColor.color}/>
                    <Text style={[this.props.selectedColor, {fontSize: 12}]}>{el.props.text}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

Tabbar.PropTypes = {
    selected: PropTypes.object.isRequired,
    onSelect: PropTypes.func.isRequired,
    backgroundColor: View.propTypes.style, //tabbar背景颜色
    selectedColor: Text.propTypes.style //tabbarItem被选中后的颜色
};

TabbarItem.PropTypes = {
    name: PropTypes.string.isRequired,
    iconName: PropTypes.string, //ifont对应的name
    text: PropTypes.string //下面的文字
};

Tabbar.defaultProps = {
    backgroundColor: {backgroundColor: 'white'},
    selectedColor: {color: V.primaryColor},
    ptColor: {color: V.defaultColor}
};

export {
    Tabbar,
    TabbarItem
};