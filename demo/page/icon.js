import React from 'react';

import {
    View,
    Text,
    ScrollView
} from 'react-native';

import {
    Styles as S,
    Variable as V,
    IFont,
    Icon
} from '../../src/index';
import _ from 'lodash';

class Component extends React.Component {
    static navigationOptions = {
        title: 'Icon'
    };

    render() {
        return (
            <ScrollView>
                <View>
                    <Text>默认</Text>
                    <Icon name="success"/>
                    <Text>自定义颜色</Text>
                    <Icon name="success" color={V.primaryColor}/>
                    <Text>自定义大小</Text>
                    <Icon name="success" size={30}/>
                    <Text>自定义style，且优先级更高</Text>
                    <Icon name="success" color={V.primaryColor} size={30} style={{
                        color: V.warnColor,
                        fontSize: 25,
                        borderWidth: 1,
                        borderColor: 'red'
                    }}/>
                </View>
                <Text>Icon</Text>
                <View>
                    {_.map(Icon.glyphMap, (value, key) => (
                        <View key={key} style={S.flexRow}>
                            <Icon name={key}/>
                            <Text>{key}</Text>
                        </View>
                    ))}
                </View>

                <Text>IFont</Text>
                <View>
                    {_.map(IFont.glyphMap, (value, key) => (
                        <View key={key} style={S.flexRow}>
                            <IFont name={key}/>
                            <Text>{key}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        );
    }
}

export default Component;