import React from 'react';
import {
    View,
    Text
} from 'react-native';

import {
    Square, SquareImage,
    Header,
    Styles as S
} from '../../src/index';
import _ from 'underscore';

class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: ['red', 'blue', 'yellow']
        };
    }

    componentDidMount() {
        // 模拟宽度变的情况
        setTimeout(() => {
            this.setState({
                arr: ['red', 'blue', 'yellow', 'green']
            });
        }, 2000);
    }

    render() {
        const {navigator} = this.props;
        return (
            <View>
                <Header navigator={navigator} pageName="布局"/>
                <Text>正方形。以宽度为标准。</Text>
                <Text>一般用法， children 必须是only。</Text>
                <View style={[S.flex, S.flexRow]}>
                    {_.map(this.state.arr, (value, i) => (
                        <Square key={i} style={[S.flex, {backgroundColor: value}]}>
                            <Text>{value}</Text>
                        </Square>
                    ))}
                </View>
                <Text>溢出需要调用方处理。</Text>
                <View style={[S.flex, S.flexRow, S.flexAlignStart]}>
                    {_.map(this.state.arr, (value, i) => (
                        <Square key={i} style={[S.flex, {backgroundColor: value}, S.overflowHidden]}>
                            <View>
                                <Text>{value}</Text>
                                <Text>{value}</Text>
                                <Text>{value}</Text>
                                <Text>{value}</Text>
                                <Text>{value}</Text>
                                <Text>{value}</Text>
                                <Text>{value}</Text>
                                <Text>{value}</Text>
                                <Text>{value}</Text>
                                <Text>{value}</Text>
                                <Text>{value}</Text>
                                <Text>{value}</Text>
                                <Text>{value}</Text>
                                <Text>{value}</Text>
                                <Text>{value}</Text>
                            </View>
                        </Square>
                    ))}
                </View>
                <Text>图片比较特殊，可用SquareImage</Text>
                <View style={[S.flex, S.flexRow, S.flexAlignStart]}>
                    {_.map(this.state.arr, (value, i) => (
                        <View key={i} style={[S.flex, {backgroundColor: value}, S.margin10]}>
                            <Square>
                                <SquareImage
                                    source={{
                                        uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1796995164,3252526142&fm=80'
                                    }}
                                />
                            </Square>
                        </View>
                    ))}
                </View>
                <View style={{
                    width: 200
                }}>
                    <Square>
                        <SquareImage
                            source={{
                                uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1796995164,3252526142&fm=80'
                            }}
                        />
                    </Square>
                </View>
            </View>
        );
    }
}

export default Component;