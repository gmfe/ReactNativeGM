import React, {Component} from 'react';
import {
    View
} from 'react-native';
import {
    Page,
    SearchBar,
    Header
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
        const {navigator} = this.props;
        return (
            <Page header={<Header navigator={navigator} pageName="SearchBar"/>}>
                <View style={{height: 10}}></View>
                <SearchBar navigator={this.props.navigator} onSearch={this.handleSearch}/>

                <SearchBar autoFocus navigator={this.props.navigator} onSearch={this.handleSearch}/>
            </Page>
        );
    }
}

export default PageSearchBar;