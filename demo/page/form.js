import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import {
    Styles as S,
    Header,
    TextArea,
    Input,
    // RadioCells,
    // CheckboxCells,
    // Picker,
    // Uploader,
    Select,
    Page,
    Radio
} from '../../src/index';

class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            checked: false
        };
    }

    render() {
        const {navigator} = this.props;
        return (
            <Page white header={<Header navigator={navigator} pageName={'Form'}/>}>
                <View style={S.padding10}>
                    <Text>TextArea</Text>
                    <TextArea
                        style={S.border}
                        value={this.state.value}
                        onChangeText={value => {
                            this.setState({
                                value
                            });
                        }}
                    />

                    <Text>Input</Text>
                    <Input
                        style={S.border}
                        value={this.state.value}
                        onChangeText={value => {
                            this.setState({
                                value
                            });
                        }}
                    />

                    <Text>Select</Text>
                    <View style={[S.border]}>
                        <Select
                            value={1}
                            pickerData={[1, 2, 3]}
                        />
                    </View>
                </View>

                <View>
                    <Radio checked={this.state.checked} onChange={(checked) => {
                        this.setState({
                            checked
                        });
                    }}>回家</Radio>
                </View>
            </Page>
        );
    }
}

export default Component;