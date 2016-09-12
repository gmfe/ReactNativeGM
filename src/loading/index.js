import React from 'react';
import {
    ActivityIndicator,
    ProgressBarAndroid,
    Platform
} from 'react-native';

const Loading = (props) => {
    if (Platform.OS === 'ios') {
        return <ActivityIndicator color="#fff" size="large" {...props}/>;
    }
    return <ProgressBarAndroid color="#fff" styleAttr="Large" {...props}/>;
};

export default Loading;