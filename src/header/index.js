import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';
import {IFont} from '../icon';

import V from '../variable';

const styles = StyleSheet.create({
    container: {
        height: V.headerHeight,
        paddingTop: V.statusHeight,
        backgroundColor: V.primaryColor
    },
    form: {
        height: (V.headerHeight - V.statusHeight),
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
        paddingHorizontal: V.gap15,
        alignSelf: 'center'
    },
    rightBtn: {
        alignItems: 'flex-end'
    },
    btnNull: {
        width: 30 + 18
    },
    btnText: {
        fontSize: V.baseFontSize,
        color: V.whiteColor,
        lineHeight: V.baseFontSize
    }
});

class HeaderBack extends React.Component {
    constructor(props) {
        super(props);
        this.handleBack = ::this.handleBack;
    }
    handleBack() {
        this.props.onPress ? this.props.onPress() : this.props.navigator.pop();
    }

    render() {
        return (
            <TouchableHighlight
                style={styles.btn}
                underlayColor={V.primaryColorActive}
                onPress={this.handleBack}
            >
                <View>
                    <IFont color={V.whiteColor} name="angle-left"/>
                </View>
            </TouchableHighlight>
        );
    }
}

HeaderBack.propTypes = {
    onPress: PropTypes.bool
};

class Header extends Component {
    handleBackBtn() {
        if (!this.props.backBtn) {
            return (
                <View style={styles.btnNull}/>
            );
        }
        const {onBack} = this.props;
        return <HeaderBack onPress={onBack ? onBack : null} navigator={this.props.navigator}/>;
    }

    handleRightBtn() {
        if (!this.props.rightBtn) {
            return (
                <View style={styles.btnNull}/>
            );
        }
        return (
            <TouchableHighlight
                style={[styles.btn, styles.rightBtn]}
                underlayColor={V.primaryColorActive}
                onPress={()=>this.props.rightBtn.onPress()}
            >
                <Text style={styles.btnText}>{this.props.rightBtn.text}</Text>
            </TouchableHighlight>
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
    backBtn: true
};

Header.propTypes = {
    navigator: PropTypes.object.isRequired,
    pageName: PropTypes.string,
    backBtn: PropTypes.bool,
    onBack: PropTypes.func,
    rightBtn: PropTypes.shape({
        text: PropTypes.string,
        onPress: PropTypes.func
    })
};

export {
    Header,
    HeaderBack
};