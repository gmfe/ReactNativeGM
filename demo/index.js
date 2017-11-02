import React from 'react';
import {
    View, ScrollView, ToastAndroid, BackHandler
} from 'react-native';
import {
    StackNavigator
} from 'react-navigation';
import {LayerRoot, S, Cells, Cell, CellBody} from '../src';
import _ from 'lodash';

import ButtonScreen from './page/button';
import TypographyScreen from './page/typography';
import CellScreen from './page/cell';
import FormScreen from './page/form';
import LayoutScreen from './page/layout';
import RequestScreen from './page/request';
import IconScreen from './page/icon';
import TabbarScreen from './page/tabbar';
import LazyloadScreen from './page/lazyload';
import SearchBarScreen from './page/search_bar';
import TabsScreen from './page/tabs';
import DialogWrap from './page/dialog';
import ToastWrap from './page/toast';
import StorageScreen from './page/storage';

console.disableYellowBox = true;


class MainScreen extends React.Component {
    static navigationOptions = {
        title: 'Function List'
    };

    handleBackPress = () => {
        if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
            //最近2秒内按过back键，可以退出应用。
            return false;
        }
        this.lastBackPressed = Date.now();
        ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
        return true;
    };

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    componentWillUnMount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    render() {
        const {navigate} = this.props.navigation;

        const cellList = _.filter(_.keys(navConfig), v => v !== 'Main');

        return (
            <ScrollView>
                <View>
                    <View>
                        <Cells>
                            {_.map(cellList, value => (
                                <Cell
                                    key={value}
                                    onPress={() => navigate(value)}
                                >
                                    <CellBody>{value}</CellBody>
                                </Cell>
                            ))}
                        </Cells>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const navConfig = {
    Main: {screen: MainScreen},
    Typography: {screen: TypographyScreen},
    Button: {screen: ButtonScreen},
    Cell: {screen: CellScreen},
    Form: {screen: FormScreen},
    Layout: {screen: LayoutScreen},
    Request: {screen: RequestScreen},
    Icon: {screen: IconScreen},
    Tabbar: {screen: TabbarScreen},
    Lazyload: {screen: LazyloadScreen},
    SearchBar: {screen: SearchBarScreen},
    Tabs: {screen: TabsScreen},
    Dialog: {screen: DialogWrap},
    Toast: {screen: ToastWrap},
    Storage: {screen: StorageScreen}
};

const Navigator = StackNavigator(navConfig);

class App extends React.Component {
    render() {
        return (
            <View style={S.flex}>
                <Navigator/>
                <LayerRoot/>
            </View>
        );
    }
}

export default App;