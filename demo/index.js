import React from 'react';
import {
    View
} from 'react-native';
import {
    StackNavigator
} from 'react-navigation';
import {LayerRoot, S} from '../src';

import MainScreen from './page/mainscreen';
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

const Navigator = StackNavigator({
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
    Toast: {screen: ToastWrap}
});

console.disableYellowBox = true;

class App extends React.Component {
    render() {
        return (
            <View style={S.flex}>
                <LayerRoot/>
                <Navigator/>
            </View>
        );
    }
}

export default App;