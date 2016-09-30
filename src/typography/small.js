import React from 'react';
import {Text as T} from 'react-native';
import V from '../variable';

class Small extends React.Component {
    render() {
        return (
            <T
                {...this.props}
                style={[{
                    fontSize: V.smallFontSize,
                    color: V.defaultColor
                }, this.props.style]}
            >
                {this.props.children}
            </T>
        );
    }
}

export default Small;