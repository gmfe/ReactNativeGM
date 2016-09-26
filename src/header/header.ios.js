import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import V from '../variable';
const header_height = 48;
const status_height = 16;
const styles = StyleSheet.create({
    container: {
        height: header_height,
        paddingTop: status_height,
        backgroundColor: V.primaryColor,
    },
    form: {
        height: (header_height - status_height),
        marginHorizontal: V.gap15,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 18,
        alignSelf: 'center',
        color: '#fff',
    },
    textBox: {
        flex: 1,
        alignSelf: 'center',
    },
    btn: {
        justifyContent: 'center',
        height: (header_height - status_height),
        width: 80,
        alignSelf: 'center',
    },
    rightBtn: {
        alignItems: 'flex-end'
    },
    btnNull: {
        width: 80
    },
    btnText: {
        fontSize: 16,
        color: '#fff'
    }
});

export default class Header extends Component {
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
            }}><Text style={styles.btnText}>back</Text></TouchableOpacity>
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
                <Text style={styles.btnText} onPress={()=>this.props.handleRight()}>{this.props.rightText}</Text>
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
    rightBtn: false
};

Header.propTypes = {
    navigator: PropTypes.object.isRequired,
    //navColor: PropTypes.string,
    pageName: PropTypes.string,
    backBtn: PropTypes.bool,
    rightBtn: PropTypes.bool,
    rightText: PropTypes.string,
    handleRight: PropTypes.func,
};
