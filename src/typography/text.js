import React from 'react';
import {Text as T} from 'react-native';
import G from '../global/variable';

class Text extends React.Component {
    render() {
        return (
            <T
                {...this.props}
                style={[{
                    fontSize: G.baseFontSize,
                    color: G.defaultColor
                }, this.props.style]}
            >
                {this.props.children}
            </T>
        );
    }
}

export default Text;