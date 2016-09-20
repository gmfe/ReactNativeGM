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
    Page,
    Toast,
    Util
} from '../../src/index';

const {Request} = Util;

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

                <Button
                    type="primary"
                    onPress={() => {
                        Request('/aadf').data({
                            id: 1
                        }).post().then(() => {
                            Toast.success('成功');
                        }).catch((reason) => {
                            Toast.warning('失败 ' + reason);
                        });
                    }}
                >request</Button>
            </Page>
        );
    }
}

export default Component;