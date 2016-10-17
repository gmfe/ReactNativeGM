import React from 'react';
import {
    Image
} from 'react-native';

class SquareImage extends React.Component {
    render() {
        return (
            <Image
                {...this.props}
                style={this.props.style}
            />
        );
    }
}

export default SquareImage;