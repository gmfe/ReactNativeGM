import React from 'react';
import {Text as T} from 'react-native';
import V from '../variable';

class Text extends React.Component {
    render() {
        return (
            <T
                {...this.props}
                style={[{
                    fontSize: V.fontSize16,
                    color: V.defaultColor
                }, this.props.style]}
            >
                {this.props.children}
            </T>
        );
    }
}

export default Text;