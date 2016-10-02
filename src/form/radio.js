import React, {PropTypes} from 'react';
import {
    View,
    TouchableHighlight,
    StyleSheet
} from 'react-native';
import {Text} from '../typography';
import {IFont} from '../icon';
import S from '../styles';
import V from '../variable';

const styles = StyleSheet.create({
    font: {
        paddingTop: 2,
        fontSize: V.baseFontSize * 1.3,
        marginRight: 2
    }
});

class Radio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        };
    }

    componentWillReceiveProps(newProps) {
        if ('checked' in newProps) {
            this.setState({
                checked: newProps.checked
            });
        }
    }

    render() {
        const {
            onChange,
            children,
            style,
            ...others
        } = this.props;
        const {checked} = this.state;

        return (
            <TouchableHighlight
                underlayColor={V.activeColor}
                onPress={() => onChange(!checked)}
            >
                <View {...others} style={[S.flexRow, S.flexAlignCenter, style]}>
                    {checked ? (
                        <IFont name="success" color={V.primaryColor} style={styles.font}/>
                    ) : (
                        <IFont name="circle" style={styles.font}/>
                    )}
                    {!children.type ? <Text>{children}</Text> : children}
                </View>
            </TouchableHighlight>
        );
    }
}

Radio.propTypes = {
    checked: PropTypes.bool,
    onChange: PropTypes.func.isRequired
};

export default Radio;