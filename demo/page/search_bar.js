import React from 'react';
import {
    SearchBar
} from '../../src/index';


class PageSearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    static  navigationOptions = {
        header: null
    };

    handleSearch(text) {
        console.log(text);
    }

    render() {
        return (
            <SearchBar
                value={this.state.value}
                onChange={(value) => {
                    this.setState({value});
                }}
                navigator={this.props.navigator} onSearch={::this.handleSearch}
            />
        );
    }
}

export default PageSearchBar;