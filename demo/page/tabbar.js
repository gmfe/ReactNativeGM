import React from 'react';
import {
    Text
} from 'react-native';
import {
    Page,
    Tabbar,
    Header,
    TabbarItem,
    Variable as V,
} from '../../src/index';

export default class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {page: 'second'};
    }
    render() {
        return (
            <Page header={<Header navigator={this.props.navigator} pageName={'Tabbar'}/>} bottom={
                <Tabbar
                    selected={this.state.page}
                    style={{backgroundColor: 'white'}}
                    selectedStyle={{color: V.primaryColor}}
                    onSelect={(el)=>this.setState({page: el.props.name})}
                >
                    <TabbarItem name='first' text={'首页'} iconName={'home'}/>
                    <TabbarItem name='second' text={'购物车'} iconName={'cart'}/>
                    <TabbarItem name='third' text={'订单'} iconName={'order'}/>
                    <TabbarItem name='forth' text={'我的'} iconName={'user'}/>
                </Tabbar>
            }>
                <Text>selectPage：{this.state.page}</Text>
            </Page>
        );
    }
}

