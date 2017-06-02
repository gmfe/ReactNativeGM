import {
    StackNavigator
} from 'react-navigation';

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
import ViewPagerScreen from './page/viewpager';
import TabsScreen from './page/tabs';
import FlatlistScreen from './page/flatlist';
import PromptScreen from './page/modal';

const App = StackNavigator({
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
    ViewPager: {screen: ViewPagerScreen},
    Tabs: {screen: TabsScreen},
    Flatlist: {screen: FlatlistScreen},
    Modal: {screen: PromptScreen}
});

console.disableYellowBox = true;

// class Home extends Component {
//     constructor(props) {
//         super(props);
//     }
//
//     componentWillMount() {
//         if (Platform.OS === 'android') {
//             BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
//         }
//     }
//
//     // onBackAndroid = () => {
//     //     const routers = nav.getCurrentRoutes();
//     //     if (routers.length > 1) {
//     //         nav.pop();
//     //         return true;
//     //     }
//     //     if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
//     //         //最近2秒内按过back键，可以退出应用。
//     //         return false;
//     //     }
//     //     this.lastBackPressed = Date.now();
//     //     ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
//     //     return true;
//     // };
//
//     render() {
//         return(
//             <MainScreen />
//         );
//     }
// }

export default App;