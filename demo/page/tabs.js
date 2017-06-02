import React from 'react';
import {
    Tabs, TabsItem
} from '../../src/index';

class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 1
        };
    }

    static navigationOptions = {
        title: 'Tabs'
    };

    render() {
        return (
            <Tabs selected={this.state.selected} onChange={(selected) => {
                this.setState({
                    selected
                });
            }}>
                <TabsItem value={1}>现金流水</TabsItem>
                <TabsItem value={2}>抵扣金流水</TabsItem>
            </Tabs>
        );
    }
}

export default Component;
