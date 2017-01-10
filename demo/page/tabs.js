import React from 'react';
import {
    Header,
    Page,
    Tabs, TabsItem
} from '../../src/index';

class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 1
        };
    }

    render() {
        const {navigator} = this.props;
        return (
            <Page white noScrollContent header={<Header navigator={navigator} pageName="GiftListView"/>}>
                <Tabs selected={this.state.selected} onChange={(selected) => {
                    this.setState({
                        selected
                    });
                }}>
                    <TabsItem value={1}>现金流水</TabsItem>
                    <TabsItem value={2}>抵扣金流水</TabsItem>
                </Tabs>
            </Page>
        );
    }
}

export default Component;
