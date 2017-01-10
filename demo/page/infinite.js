import React from 'react';
import {View} from 'react-native';
import {
    Header,
    Page,
    Infinite, Text,
    Styles as S
} from '../../src/index';
import _ from 'underscore';

class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            range: 10,
            done: false
        };
        this.handleBottom = ::this.handleBottom;
    }

    handleBottom() {
        console.log('bottom');
        // 返回一个promise，直到resolve才不转圈
        return new Promise(resolve => {
            setTimeout(() => {
                this.setState({
                    range: 15,
                    done: true
                });
                resolve();
            }, 5000);
        });

        // 或者其他，500后才不转圈
        // return;
    }

    render() {
        const {navigator} = this.props;
        return (
            <Page noScrollContent header={<Header navigator={navigator} pageName="GiftListView"/>}>
                <View style={{height: 200}}>
                    <Infinite done={this.state.done} onBottom={this.handleBottom}>
                        <View style={S.bgWhite}>
                            {_.map(_.range(this.state.range), (v, i) => <Text key={i} style={[S.padding10]}>{v}</Text>)}
                        </View>
                    </Infinite>
                </View>
            </Page>
        );
    }
}

export default Component;
