import React, {PropTypes} from 'react';

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
        this.setState({
            height: width
        });
    }

    render() {
        const {component} = this.props;

        const {height} = this.state;
        const child = React.Children.only(this.props.children);

        const componentProps = Object.assign({}, this.props, component.props, {
            height,
            onLayout: this.handleLayout
        });

        return React.cloneElement(component, Object.assign({}, componentProps, {
            children: React.cloneElement(child, Object.assign({
                style: {
                    width: height,
                    height
                }
            }))
        }));
    }
}

Square.propTypes = {
    component: PropTypes.element.isRequired
};

export default Square;