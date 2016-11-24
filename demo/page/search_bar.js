import React, {Component} from 'react';
import {
    View
} from 'react-native';
import {
    Page,
    SearchBar,
    TextInput
} from '../../src/index';


class PageSearchBar extends Component {
    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(text) {
        console.log(text);
    }

    render() {
        return (
            <Page header={<SearchBar navigator={this.props.navigator} onSearch={this.handleSearch}/>}>
                <View style={{height: 10}}></View>

                <TextInput/>
            </Page>
        );
    }
}

export default PageSearchBar;