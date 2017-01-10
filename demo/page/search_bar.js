import React, {Component} from 'react';
import {
    View
} from 'react-native';
import {
    Page,
    SearchBar
} from '../../src/index';


class PageSearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    handleSearch(text) {
        console.log(text);
    }

    render() {
        return (
            <Page>
                <View style={{height: 20}}/>
                <SearchBar
                    value={this.state.value}
                    onChange={(value) => {
                        this.setState({value});
                    }}
                    navigator={this.props.navigator} onSearch={::this.handleSearch}
                />
            </Page>
        );
    }
}

export default PageSearchBar;