import React from 'react';
import {View} from 'react-native';
import {
    Styles as S,
    Header,
    Button,
    Page,
    Modal,
    Text,
    LayerRoot
} from '../../src/index';

const showModal = () => {
    LayerRoot.setComponent(LayerRoot.TYPE.DIALOG, (
        <Modal
            visible={true}
            onClose={() => LayerRoot.removeComponent(LayerRoot.TYPE.DIALOG)}
        >
            <Text>adsfaf</Text>
        </Modal>
    ));
};

const showModalWithStyle = () => {
    LayerRoot.setComponent(LayerRoot.TYPE.DIALOG, (
        <Modal
            visible={true}
            onClose={() => LayerRoot.removeComponent(LayerRoot.TYPE.DIALOG)}
            style={{
                width: 150,
                height: 200
            }}
            wrapStyle={{
                backgroundColor: 'rgba(0,0,0,.5)'
            }}
        >
            <Text>style 控制内容中心区域样式 wrapStyle 控制背景样式，比如透明等等</Text>
        </Modal>
    ));
};

class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
    }

    render() {
        const {navigator} = this.props;
        return (
            <Page header={<Header navigator={navigator}/>}>
                <View style={S.padding10}>
                    <Button
                        type="primary"
                        style={S.marginTop10}
                        onPress={showModal}
                    >
                        show Modal
                    </Button>
                    <Button
                        type="primary"
                        style={S.marginTop10}
                        onPress={showModalWithStyle}
                    >
                        show Modal with style
                    </Button>
                </View>
            </Page>
        );
    }
}

export default Component;