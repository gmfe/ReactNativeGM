import React from 'react';
import {
    Text
} from 'react-native';
import {
    Page,
    TabbarItem,
    Tabbar,
    Header
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
                    onSelect={(el)=>this.setState({page: el.props.name})}
                    backgroundColor={{backgroundColor: '#eee'}}
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

export default PageTabbar;