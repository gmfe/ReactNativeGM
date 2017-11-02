import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    TouchableHighlight
} from 'react-native';
import _ from 'lodash';
import Mask from '../mask';
import V from '../variable';
import S from '../styles';
import LayoutRoot from '../layer_root';

class ActionSheet extends React.Component {
    handlePress(v) {
        const {onSelect} = this.props;
        onSelect(v);
    }

    render() {
        const {
            list,
            style,
            onCancel
        } = this.props;

        return (
            <Mask onCancel={onCancel}>
                <View style={[S.flex, S.flexJustifyCenter, S.flexAlignCenter, {
                    paddingTop: 100,
                    paddingBottom: 100,
                    paddingLeft: 60,
                    paddingRight: 60
                }]}>
                    <View style={[S.bgWhite, style]}>
                        {_.map(list, v => (
                            <TouchableHighlight
                                key={v.name}
                                underlayColor={V.activeColor}
                                onPress={this.handlePress.bind(this, v)}
                                style={[S.padding15, S.borderBottom, {
                                    minWidth: 250
                                }]}
                            >
                                <Text style={S.text}>{v.name}</Text>
                            </TouchableHighlight>
                        ))}
                    </View>
                </View>
            </Mask>
        );
    }
}

ActionSheet.render = (list) => {
    return new Promise((resolve, reject) => {
        LayoutRoot.setComponent(LayoutRoot.TYPE.POPUP, (
            <ActionSheet
                list={list}
                onSelect={v => {
                    ActionSheet.hide();
                    resolve(v);
                }}
                onCancel={() => {
                    ActionSheet.hide();
                    reject();
                }}
            />
        ));
    });
};

ActionSheet.hide = () => LayoutRoot.removeComponent(LayoutRoot.TYPE.POPUP);

ActionSheet.propTypes = {
    list: PropTypes.array.isRequired, // [{name: 'xxx'}]
    onSelect: PropTypes.func.isRequired,
    onCancel: PropTypes.func
};

ActionSheet.defaultProps = {
    onCancel: _.noop
};

export default ActionSheet;