import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import V from '../variable';
const color_blue = '#24aaff';
const header_height = 48;
const status_height = 16;
const styles = StyleSheet.create({
    container: {
        height: header_height,
        paddingTop: status_height,
        backgroundColor: color_blue,
    },
    form: {
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
    static defaultProps = {
        backBtn: true,
        rightBtn: false
    };
    static propTypes = {
        //navColor: React.PropTypes.string,
        pageName: React.PropTypes.string,
        backBtn: React.PropTypes.bool,
        rightBtn: React.PropTypes.bool,
        rightText: React.PropTypes.string,
    };

    constructor(props) {
        super(props);
        this._backBtn = this._backBtn.bind(this);
        this._rightBtn = this._rightBtn.bind(this);
    }

    _backBtn() {
        if (!this.props.backBtn) {
            return (
                <View style={styles.btnNull}/>
            );
        }
        const {navigator} = this.props;
        return (
            <TouchableOpacity style={styles.btn} onPress={()=> {
                navigator.pop();
            }}><Text style={styles.btnText}>back</Text></TouchableOpacity>
        );
    }

    _rightBtn() {
        if (!this.props.rightBtn) {
            return (
                <View style={styles.btnNull}/>
            );
        }
        const {navigator} = this.props;
        return (
            <TouchableOpacity style={[styles.btn, styles.rightBtn]} onPress={()=> {
                navigator.pop();
            }}><Text style={styles.btnText}>{this.props.rightText}</Text></TouchableOpacity>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.form}>
                    {this._backBtn()}
                    <View style={styles.textBox}>
                        <Text style={styles.headerText}>{this.props.pageName}</Text>
                    </View>
                    {this._rightBtn()}
                </View>
            </View>
        );
    }
}


module.exports = Header;
