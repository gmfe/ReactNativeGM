import React, {PropTypes} from 'react';
import {View, TouchableHighlight} from 'react-native';
import {Text} from '../typography';
import S from '../styles';
import V from '../variable';
import _ from 'underscore';

class TabsItem extends React.Component {
    render() {
        const {children, active, onPress} = this.props;
        return (
            <TouchableHighlight
                style={[S.flex, S.flexAlignCenter]}
                underlayColor={V.activeColor}
                onPress={onPress}
            >
                <View style={active ? {
                    borderBottomWidth: 2,
                    borderBottomColor: V.primaryColor
                } : {}}>
                    <Text
                        style={[S.paddingTop10, S.paddingBottom10, S.paddingLeft15, S.paddingRight15, active && S.textPrimary]}
                    >{children}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}

class Tabs extends React.Component {
    render() {
        const {children, selected, onChange} = this.props;

        const items = [];

        _.each(children, (child, i) => {
            const value = child.props.value;
            if (child.type.displayName === 'TabsItem') {
                items.push(React.cloneElement(child, Object.assign({}, child.props, {
                    key: value,
                    active: selected === value,
                    onPress: () => onChange(value)
                })));

                if (i < children.length - 1) {
                    items.push(
                        <View
                            key={'gap-' + value}
                            style={[S.borderRight, S.marginTop10, S.marginBottom10]}
                        />
                    );
                }
            }
        });

        return (
            <View style={[S.flexRow, S.borderBottom, S.bgWhite]}>
                {items}
            </View>
        );
    }
}

Tabs.propTypes = {
    selected: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired
};

export {
    Tabs, TabsItem
};
