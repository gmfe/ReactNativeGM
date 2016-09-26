import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback
} from 'react-native';
// import V from '../variable';
// import {IFont} from '../icon';
const styles = StyleSheet.create({
    container: {
        height: 56
    },
    Container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        padding: 5,
        paddingTop: 5,
        backgroundColor: '#fff',
        borderTopColor: '#d9d9d9',
        borderTopWidth: StyleSheet.hairlineWidth,
    },
    box: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    image: {
        justifyContent: 'space-between',
        resizeMode: 'stretch',
        alignSelf: 'center',
        flexDirection: 'row',
    },
    picText: {
        flex: 1,
        fontSize: 13,
        marginTop: 3,
        alignSelf: 'center',
        fontWeight: '100',
        color: '#848484',
    },
    picked: {
        fontSize: 13,
        marginTop: 3,
        alignSelf: 'center',
        fontWeight: '100',
        color: '#24aaff',
    },
});
export default class Tabbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pickedTab: this.props.pickedTab,
        };
        this.handlePressTab = this.handlePressTab.bind(this);
    }

    handlePressTab() {

    }

    render() {
        return (
            <View style={styles.Container}>
                <TouchableWithoutFeedback style={styles.box} onPress={() =>this.handlePressTab('1')}>
                    <View>

                        <Text style={this.state.pickedTab === '1' ? styles.picked : styles.picText}>TAB1</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback style={styles.box} onPress={() =>this.handlePressTab('2')}>
                    <View>

                        <Text style={this.state.pickedTab === '2' ? styles.picked : styles.picText}>TAB2</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback style={styles.box} onPress={() =>this.handlePressTab('3')}>
                    <View>

                        <Text style={this.state.pickedTab === '3' ? styles.picked : styles.picText}>TAB3</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback style={styles.box} onPress={() =>this.handlePressTab('4')}>
                    <View>
                        <Text style={this.state.pickedTab === '4' ? styles.picked : styles.picText}>TAB4</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}
Tabbar.defaultProps = {
    pickedTab: 1
};
