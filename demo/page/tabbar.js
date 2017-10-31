import React from 'react';
import {
    View
} from 'react-native';
import {
    Text,
    TabbarItem,
    Tabbar
} from '../../src/index';

class PageTabbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {page: 'second'};
    }

    static navigationOptions = {
        title: 'Tabbar'
    };

    render() {
        return (
            <View style={{flex:1}}>
                <Text>selectPage：{this.state.page}</Text>
                <Tabbar
                    selected={this.state.page}
                    onSelect={(el)=>this.setState({page: el.props.name})}
                >
                    <TabbarItem name='first' text={'首页'} iconName={'home'}/>
                    <TabbarItem name='second' text={'购物车'} iconName={'cart'}/>
                    <TabbarItem name='third' text={'订单'} iconName={'order'} redPoint={true}/>
                    <TabbarItem name='forth' text={'我的'} iconName={'user'}/>
                </Tabbar>

            </View>
        );
    }
}

export default PageTabbar;