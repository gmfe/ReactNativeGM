import React from 'react';

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 0
        };
        this.handleLayout = ::this.handleLayout;
    }

    handleLayout(event) {
        const {width} = event.nativeEvent.layout;
        if (width) {
            this.setState({
                height: width
            });
        }
    }

    render() {
        const {height} = this.state;
        const child = React.Children.only(this.props.children);

        let p = {
            onLayout: this.handleLayout,
        };
        if (height) {
            p.style = [this.props.style, {
                height
            }];
        }

        return React.cloneElement(child, Object.assign({}, this.props, p));
    }
}

export default Square;