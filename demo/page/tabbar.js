import React from 'react';
import {
    Text,
    View
} from 'react-native';
import {
    Page,
    Tabbar,
    Header,
} from '../../src/index';

class PageTabbar extends React.Component {
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
                    onSelect={(el)=>this.setState({page: el.props.name})}
                >
                    <View name='first' text={'首页'} iconName={'home'}/>
                    <View name='second' text={'购物车'} iconName={'cart'}/>
                    <View name='third' text={'订单'} iconName={'order'}/>
                    <View name='forth' text={'我的'} iconName={'user'}/>
                </Tabbar>
            }>
                <Text>selectPage：{this.state.page}</Text>
            </Page>
        );
    }
}

export default PageTabbar;