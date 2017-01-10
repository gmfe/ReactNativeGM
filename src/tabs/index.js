import React, {PropTypes} from 'react';
import {View, TouchableHighlight, StyleSheet} from 'react-native';
import {Text} from '../typography';
import S from '../styles';
import V from '../variable';
import _ from 'underscore';

const styles = StyleSheet.create({
    redPoint: {
        position: 'absolute',
        top: 4,
        right: 0,
        height: 18,
        width: 18,
        backgroundColor: 'red',
        borderRadius: 9,
        overflow: 'hidden'
    },
    redCount: {
        color: 'white',
        fontSize: 12
    }
});


class TabsItem extends React.Component {
    render() {
        const {children, redCount, active, onPress} = this.props;
        return (
            <TouchableHighlight
                style={[S.flex, S.flexAlignCenter]}
                underlayColor={V.activeColor}
                onPress={onPress}
            >
                <View>
                    <View style={[S.flexRow, active ? {
                        borderBottomWidth: 2,
                        borderBottomColor: V.primaryColor
                    } : {}]}>
                        <Text
                            /*因为红点的width为18所以hrozontalpadding一定要超过18*/
                            style={[{paddingHorizontal: 20}, S.paddingVertical10, active && S.textPrimary]}
                        >{children}</Text>

                    </View>
                    {
                        redCount ? <View style={[S.flexJustifyCenter, S.flexAlignCenter, styles.redPoint]}>
                            <Text style={styles.redCount}>{redCount > 99 ? '...' : redCount}</Text>
                        </View>
                            : null
                    }
                </View>
            </TouchableHighlight>
        );
    }
}

TabsItem.displayName = 'TabsItem';

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
