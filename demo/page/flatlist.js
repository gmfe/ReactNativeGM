import React, {PureComponent} from 'react';
import {FlatList} from 'react-native';
import {
    Cell
} from '../../src/index';

class MyListItem extends PureComponent {
    _onPress = () => {
        this.props.onPressItem(this.props.id);
    };

    render() {
        const {id, selected} = this.props;
        return(
            <Cell
                onPress={() => this._onPress()}
                bodyText={`the ${id} item is : ${selected} `}
            />
        );
    }
}

class FlatListDemo extends PureComponent {
    static navigationOptions = {
        title: 'FlatList'
    };

    state = {selected: (new Map())};

    _keyExtractor = (item) => item.id;

    _onPressItem = (id: string) => {
        this.setState((state) => {
            const selected = new Map(state.selected);
            selected.set(id, !selected.get(id));
            return {selected};
        });
    };

    _renderItem = ({item}) => (
        <MyListItem
            id={item.id}
            onPressItem={this._onPressItem}
            selected={!!this.state.selected.get(item.id)}
            title={item.title}
        />
    );

    render() {
        return (
            <FlatList
                data={this.props.data}
                extraData={this.state}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
            />
        );
    }
}

FlatListDemo.defaultProps = {
    data: [
        {
            id: 0,
            selected: false
        },
        {
            id: 1,
            selected: false
        },
        {
            id: 2,
            selected: false
        },
        {
            id: 3,
            selected: false
        },
        {
            id: 4,
            selected: false
        },
        {
            id: 5,
            selected: false
        },
        {
            id: 6,
            selected: false
        },
        {
            id: 7,
            selected: false
        },
        {
            id: 8,
            selected: false
        },
        {
            id: 9,
            selected: false
        },
        {
            id: 10,
            selected: false
        },
        {
            id: 11,
            selected: false
        },
        {
            id: 12,
            selected: false
        }
    ]
};

export default FlatListDemo;
