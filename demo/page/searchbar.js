import React, {Component} from 'react';
// import {
//     Text
// } from 'react-native';
import {
    Page,
    SearchBar
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
            <Page header={<SearchBar navigator={this.props.navigator} onSearch={this.handleSearch}/>}/>
        );
    }
}

export default PageSearchBar;