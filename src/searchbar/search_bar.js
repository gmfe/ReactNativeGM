import React, {Component, PropTypes} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import {Icon} from '../icon';
import V from '../variable';

const styles = StyleSheet.create({
    searchBar: {
        position: 'relative',
        paddingTop: V.statusHeight,
        paddingHorizontal: V.pagePaddingHorizontal,
        paddingBottom: 8,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: V.primaryColor,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderStyle: 'solid',
        borderColor: '#C7C7C7',
    },
    searchOuter: {
        position: 'relative',
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#E6E6EA',
        borderRadius: 5,
    },
    searchInner: {
        position: 'relative',
        paddingHorizontal: V.pagePaddingHorizontal,
        paddingTop: V.gap5,
        paddingBottom: 4,
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchInput: {
        marginLeft: V.gap5,
        height: 20,
        fontSize: 14,
        flex: 1,
    },
    searchCover: {
        position: 'absolute',
        top: 1,
        right: 1,
        bottom: 1,
        left: 1,
        height: 26,
        borderRadius: 3,
        backgroundColor: V.bgWhite,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchCoverText: {
        textAlign: 'center',
        color: '#9B9B9B',
        marginLeft: V.gap5,
    },
    searchBtn: {
        fontSize: V.baseFontSize,
        marginLeft: V.gap10,
        color: 'white',
    },
    backBtn: {
        fontSize: V.baseFontSize,
        marginRight: V.gap10,
        color: 'white'

    }
});

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focus: false,
            text: '',
        };
        this.handleChange = ::this.handleChange;
        this.handleClear = ::this.handleClear;
        this.handleFocus = ::this.handleFocus;
        this.handleBlur = ::this.handleBlur;
        this.focus = ::this.focus;
    }

    handleChange(text) {
        this.setState({text});
        if (this.props.onChange) this.props.onChange(text);
    }

    handleSearch(text) {
        this.blur();
        if (this.props.onSearch) this.props.onSearch(text);
    }

    handleClear(e) {
        this.setState({text: ''});
        if (this.props.onClear) this.props.onClear(e);
        if (this.props.onChange) this.props.onChange('');
    }

    handleBack() {
        this.props.navigator.pop();
    }

    handleFocus() {
        this.setState({focus: true});
    }

    handleBlur() {
        this.setState({focus: false});
    }

    focus() {
        this.searchInput.focus();
    }

    blur() {
        this.searchInput.blur();
    }

    render() {
        const {
            placeholder,
            lang,
        } = this.props;
        const {focus, text} = this.state;

        return (
            <View style={styles.searchBar}>
                <Text style={styles.backBtn} onPress={()=>this.handleBack()}>{lang.back}</Text>
                <View style={styles.searchOuter}>
                    <View style={styles.searchInner}>
                        <Icon name="search"/>
                        <TextInput
                            ref={ref => {
                                this.searchInput = ref;
                            }}
                            style={styles.searchInput}
                            placeholder={placeholder}
                            onFocus={this.handleFocus}
                            onBlur={this.handleBlur}
                            onChangeText={this.handleChange}
                            value={text}
                            returnKeyType="search"
                        />
                        {text ? (
                            <Text onPress={this.handleClear}>
                                <Icon name="clear" style={styles.clearIcon}/>
                            </Text>
                        ) : null}
                    </View>
                    {(focus || text) ? null :
                        (<TouchableOpacity style={styles.searchCover} onPress={this.focus}>
                            <Icon name="search"/>
                            <Text style={styles.searchCoverText}>{placeholder}</Text>
                        </TouchableOpacity>)
                    }
                </View>
                <Text style={styles.searchBtn} onPress={()=>this.handleSearch(this.state.text)}>{lang.right}</Text>
            </View>
        );
    }
}

SearchBar.propTypes = {
    onChange: PropTypes.func,
    onClear: PropTypes.func,
    onSearch: PropTypes.func,
    lang: PropTypes.object,
    style: View.propTypes.style,
    placeholder: PropTypes.string,
};

SearchBar.defaultProps = {
    placeholder: '请输入内容',
    onChange: undefined,
    onClear: undefined,
    onSearch: undefined,
    lang: {
        back: '返回',
        right: '搜索',
    }
};

export default SearchBar;
