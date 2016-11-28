import React from 'react';
import {
    Navigator,
    View,
    BackAndroid,
    Platform,
    ToastAndroid
} from 'react-native';
import _ from 'underscore';

import PageButton from './page/button';
import PageTypography from './page/typography';
import PageCell from './page/cell';
import PageDialog from './page/dialog';
import PageToast from './page/toast';
import PageForm from './page/form';
import PageLayout from './page/layout';
import PageRequest from './page/request';
import PageIcon from './page/icon';
import PageTabbar from './page/tabbar';
import PageLazyload from './page/lazyload';
import PageSearchBar from './page/search_bar';
import PageSwiper from './page/swiper';
import PageTabs from './page/tabs';
import PageInfinite from './page/infinite';

import {
    LayerRoot,
    Cells, Cell, CellBody,
    Page,
    Header,
    Styles as S
} from '../src/index';

const navConfig = [{
    name: 'Typography', component: <PageTypography/>
}, {
    name: 'Button', component: <PageButton/>
}, {
    name: 'Cell', component: <PageCell/>
}, {
    name: 'Dialog', component: <PageDialog/>
}, {
    name: 'Toast', component: <PageToast/>
}, {
    name: 'Form', component: <PageForm/>
}, {
    name: 'Layout', component: <PageLayout/>
}, {
    name: 'Request', component: <PageRequest/>
}, {
    name: 'Icon', component: <PageIcon/>
}, {
    name: 'Tabbar', component: <PageTabbar/>
}, {
    name: 'Lazyload', component: <PageLazyload/>
}, {
    name: 'SearchBar', component: <PageSearchBar/>
}, {
    name: 'Swiper', component: <PageSwiper/>
}, {
    name: 'Tabs', component: <PageTabs/>
}, {
    name: 'Infinite', component: <PageInfinite/>
}];


class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        if (Platform.OS === 'android') {
            BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }

    onBackAndroid = () => {
        const nav = this.props.navigator;
        const routers = nav.getCurrentRoutes();
        if (routers.length > 1) {
            nav.pop();
            return true;
        }
        if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
            //最近2秒内按过back键，可以退出应用。
            return false;
        }
        this.lastBackPressed = Date.now();
        ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
        return true;
    };

    render() {
        const {navigator} = this.props;

        return (
            <Page header={
                <Header
                    navigator={navigator}
                    pageName="功能列表"
                    backBtn={false}
                />
            }>
                <Cells>
                    {_.map(navConfig, (value, i) => (
                        <Cell key={i} onPress={() => navigator.push({
                            name: value.name,
                            component: value.component
                        })}>
                            <CellBody>{value.name}</CellBody>
                        </Cell>
                    ))}
                </Cells>
            </Page>
        );
    }
}

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.renderScene = ::this.renderScene;
        this.refNavigator = null;
    }

    getComponent(route, navigator) {
        if (route.name === 'home') {
            return <Home navigator={navigator}/>;
        }
        if (route.component) {
            return React.cloneElement(route.component, {
                navigator
            });
        }
    }

    renderScene(route, navigator) {
        return React.cloneElement(this.getComponent(route, navigator), {
            style: {flex: 1}
        });
    }

    render() {
        return (
            <View style={S.flex}>
                <Navigator
                    ref={ref => this.refNavigator = ref}
                    initialRoute={{name: 'home'}}
                    renderScene={this.renderScene}
                    configureScene={() => {
                        return Navigator.SceneConfigs.PushFromRight;
                    }}
                />
                <LayerRoot/>
            </View>
        );
    }
}

export default Demo;