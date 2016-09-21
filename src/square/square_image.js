import React from 'react';
import {
    Image
} from 'react-native';

class SquareImage extends React.Component {
    render() {
        // 不知道为啥要设置下width:0，没有就显示不出来
        return (
            <Image
                {...this.props}
                style={[{
                    width: 0
                }, this.props.style]}
            />
        );
    }
}

export default SquareImage;