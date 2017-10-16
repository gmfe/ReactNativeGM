import React from 'react';
import PropTypes from 'prop-types';
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
        paddingTop: V.statusHeight,
        height: V.headerHeight,
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
        color: '#fff'
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
        width: (30 + 18)
    },
    btnText: {
        fontSize: V.fontSize14,
        color: V.whiteColor,
        lineHeight: V.fontSize14
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
    onPress: PropTypes.func
};

class Header extends React.Component {
    handleBackBtn() {
        if (!this.props.backBtn&&!this.props.leftBtn) {
            return (
                <View style={styles.btnNull}/>
            );
        }
        const {onBack} = this.props;
        if(this.props.leftBtn){
            return(
                <TouchableHighlight
                    style={styles.btn}
                    underlayColor={V.primaryColorActive}
                    onPress={()=>this.props.leftBtn.onPress()}
                >
                    <View>
                        {this.props.leftBtn.text?
                            <Text style={styles.btnText}>{this.props.leftBtn.text}</Text> :
                            (this.props.leftBtn.custom? this.props.leftBtn.custom:null)
                        }
                    </View>
                </TouchableHighlight>
            );
        }else{
            return <HeaderBack onPress={onBack ? onBack : null} {...this.props}/>;
        }

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
                <View>
                   {this.props.rightBtn.text?
                       <Text style={styles.btnText}>{this.props.rightBtn.text}</Text>
                       :(this.props.rightBtn.custom?this.props.rightBtn.custom:null)
                   }
                </View>
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
    leftBtn: PropTypes.shape({
        text: PropTypes.string,
        custom:PropTypes.node,
        onPress:PropTypes.func
    }),
    rightBtn: PropTypes.shape({
        text: PropTypes.string,
        custom:PropTypes.node,
        onPress: PropTypes.func
    })
};

export {
    Header,
    HeaderBack
};