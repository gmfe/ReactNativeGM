import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import V from '../variable';

const styles = StyleSheet.create({
    container: {
        height: V.headerHeight,
        paddingTop: V.statusHeight,
        backgroundColor: V.primaryColor
    },
    form: {
        height: (V.headerHeight - V.statusHeight),
        marginHorizontal: V.gap15,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 18,
        alignSelf: 'center',
        color: '#fff',
        lineHeight: 18
    },
    textBox: {
        flex: 1,
        alignSelf: 'center'
    },
    btn: {
        justifyContent: 'center',
        height: (V.headerHeight - V.statusHeight),
        width: 80,
        alignSelf: 'center'
    },
    rightBtn: {
        alignItems: 'flex-end'
    },
    btnNull: {
        width: 80
    },
    btnText: {
        fontSize: V.baseFontSize,
        color: '#fff',
        lineHeight: V.baseFontSize
    }
});

class Header extends Component {
    constructor(props) {
        super(props);
        this.handleBackBtn = this.handleBackBtn.bind(this);
        this.handleRightBtn = this.handleRightBtn.bind(this);
    }

    handleBackBtn() {
        if (!this.props.backBtn) {
            return (
                <View style={styles.btnNull}/>
            );
        }
        return (
            <TouchableOpacity style={styles.btn} onPress={()=> {
                this.props.navigator.pop();
            }}>
                <Text style={styles.btnText}>{this.props.backText}</Text>
            </TouchableOpacity>
        );
    }

    handleRightBtn() {
        if (!this.props.rightBtn) {
            return (
                <View style={styles.btnNull}/>
            );
        }
        return (
            <TouchableOpacity style={[styles.btn, styles.rightBtn]}>
                <Text style={styles.btnText}
                      onPress={()=>this.props.rightBtn.onPress()}>{this.props.rightBtn.text}</Text>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.form}>
                    {this.handleBackBtn()}
                    <View style={styles.textBox}>
                        <Text style={styles.headerText}>{this.props.pageName}</Text>
                    </View>
                    {this.handleRightBtn()}
                </View>
            </View>
        );
    }
}

Header.defaultProps = {
    backBtn: true,
    backText: '返回'
};

Header.propTypes = {
    navigator: PropTypes.object.isRequired,
    pageName: PropTypes.string,
    backBtn: PropTypes.bool,
    backText: PropTypes.string,
    rightBtn: PropTypes.shape({
        text: PropTypes.string,
        onPress: PropTypes.func
    })
};

export default Header;