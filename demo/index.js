import React from 'react';
import {
    Navigator,
    StyleSheet,
    View
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

import {
    LayerRoot,
    Cells, Cell, CellBody, CellsTitle,
    Page
} from '../src/index';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

const navConfig = [{
    name: '排版', component: <PageTypography/>
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
}];

class Home extends React.Component {
    render() {
        const {navigator} = this.props;

        return (
            <Page>
                <CellsTitle>功能列表</CellsTitle>
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
        return (
            <View style={styles.container}>
                {React.cloneElement(this.getComponent(route, navigator), {
                    style: {flex: 1}
                })}
                <LayerRoot/>
            </View>
        );
    }

    render() {
        return (
            <Navigator
                ref="navigator"
                initialRoute={{name: 'home'}}
                renderScene={this.renderScene}
                configureScene={() => {
                    return Navigator.SceneConfigs.PushFromRight;
                }}
            />
        );
    }
}

export default Demo;