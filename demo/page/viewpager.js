import React, {Component} from 'react';
import {
    ScrollView,
    Image,
    Dimensions,
    Alert,
    TouchableWithoutFeedback
} from 'react-native';
import {
    ViewPager
} from '../../src/index';

const SCREEN_WIDTH = Dimensions.get('window').width;

const IMGS = [
    require('../image/viewpager_bg.jpg'),
    require('../image/timg.jpeg'),
    require('../image/timg1.jpeg'),
    require('../image/timg2.jpeg'),
    require('../image/timg3.jpeg')
];

class ViewPagerScreen extends Component {
    constructor() {
        super();
        const dataSource = new ViewPager.DataSource({
            pageHasChanged: (p1, p2) => p1 !== p2
        });
        this.state={
            dataSource: dataSource.cloneWithPages(IMGS)
        };
    }

    static navigationOptions = {
        title: 'ViewPager'
    };

    _renderPage(data, pageID) {
        return(
            <TouchableWithoutFeedback onPress={() => Alert.alert(pageID)}>
                <Image source={data} style={{height:150, width:SCREEN_WIDTH}} />
            </TouchableWithoutFeedback>);
    }

    render() {
        return (
            <ScrollView>
                <ViewPager
                    dataSource={this.state.dataSource}
                    renderPage={this._renderPage}
                    renderPageIndicator={this._renderPageIndicator}
                />
            </ScrollView>
        );
    }
}

export default ViewPagerScreen;