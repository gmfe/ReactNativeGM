import React, {Component} from 'react';
import {
    Text,
    StyleSheet,
    View
} from 'react-native';
import {
    Page,
    Header,
} from '../../src/index';
import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
    slide1: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
});

class ScreenComponent extends Component {

    render() {
        return (
            <Page  noScrollContent={true} header={<Header navigator={this.props.navigator} />}>
                <Swiper style={styles.wrapper} showPagination={true} height={180} paginationStyle={{bottom:5}}>
                    <View style={styles.slide1}>
                        <Text style={styles.text}> Swiper 1</Text>
                    </View>
                    <View style={styles.slide2}>
                        <Text style={styles.text}>Swiper 2</Text>
                    </View>
                    <View style={styles.slide3}>
                        <Text style={styles.text}>Swiper 3</Text>
                    </View>
                </Swiper>
            </Page>
        );
    }
}

export default ScreenComponent;