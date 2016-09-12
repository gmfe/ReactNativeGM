import React from 'react';
import {
    Text
} from 'react-native';

import {
    Styles as S,
    Variable as V,
    Header,
    Button,
    NProgress,
    Loading,
    Page
} from '../../src/index';

class Component extends React.Component {
    render() {
        const {navigator} = this.props;
        return (
            <Page header={<Header navigator={navigator}/>}>
                <Text>Request</Text>
                <Button
                    type="default"
                    style={S.marginTop10}
                    onPress={() => {
                        NProgress.start();
                    }}
                >nprogress start</Button>

                <Button
                    type="primary"
                    style={S.marginTop10}
                    onPress={() => {
                        NProgress.done();
                    }}
                >nprogress done</Button>


                <Text>Loading</Text>
                <Loading color={V.descColor}/>
            </Page>
        );
    }
}

export default Component;