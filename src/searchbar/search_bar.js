import React, {Component, PropTypes} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import {Icon} from '../icon';
import V from '../variable';

const styles = StyleSheet.create({
    searchBar: {
        height: V.headerHeight - V.statusHeight,
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: V.primaryColor
    },
    searchOuter: {
        position: 'relative',
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#E6E6EA',
        borderRadius: 5
    },
    searchInner: {
        position: 'relative',
        paddingHorizontal: V.gap10,
        paddingTop: 4,
        paddingBottom: 4,
        flexDirection: 'row',
        alignItems: 'center'
    },
    searchInput: {
        marginLeft: V.gap5,
        height: 20,
        fontSize: 14,
        flex: 1
    },
    searchCover: {
        position: 'absolute',
        top: 1,
        right: 1,
        bottom: 1,
        left: 1,
        height: 26,
        borderRadius: 3,
        backgroundColor: V.whiteColor,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchCoverText: {
        textAlign: 'center',
        color: '#9B9B9B',
        marginLeft: V.gap5
    },
    searchBtn: {
        fontSize: V.baseFontSize,
        marginLeft: V.gap10,
        color: 'white'
    }
});

const noop = () => {
};

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focus: props.autoFocus
        };
        this.handleChange = ::this.handleChange;
        this.handleClear = ::this.handleClear;
        this.handleFocus = ::this.handleFocus;
        this.handleBlur = ::this.handleBlur;
        this.handleSearch = ::this.handleSearch;
        this.focus = ::this.focus;
    }

    handleChange(value) {
        this.props.onChange(value);
    }

    handleSearch() {
        this.blur();
        this.props.onSearch(this.props.value);
    }

    handleClear() {
        this.props.onClear();
        this.props.onChange('');
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
            searchBtn,
            autoFocus,
            fake,
            style
        } = this.props;

        const {value} = this.props;
        const {focus} = this.state;

        return (
            <View style={[styles.searchBar, style]}>
                <View style={styles.searchOuter}>
                    <View style={styles.searchInner}>
                        <Icon name="search"/>
                        <TextInput
                            ref={ref => {
                                this.searchInput = ref;
                            }}
                            autoFocus={autoFocus}
                            style={styles.searchInput}
                            placeholder={placeholder}
                            onFocus={this.handleFocus}
                            onBlur={this.handleBlur}
                            onChangeText={this.handleChange}
                            value={value}
                            returnKeyType="search"
                            onSubmitEditing={this.handleSearch}
                        />
                        {value ? (
                            <Text onPress={this.handleClear}>
                                <Icon name="clear" style={styles.clearIcon}/>
                            </Text>
                        ) : null}
                    </View>
                    {(focus || value) ? null : (
                        <TouchableOpacity style={styles.searchCover} onPress={fake ? fake : this.focus}>
                            <Icon name="search"/>
                            <Text style={styles.searchCoverText}>{placeholder}</Text>
                        </TouchableOpacity>
                    )}
                </View>
                {searchBtn ? (
                    <Text
                        style={styles.searchBtn}
                        onPress={this.handleSearch}
                    >{searchBtn === true ? '搜索' : searchBtn}</Text>
                ) : null}
            </View>
        );
    }
}

SearchBar.propTypes = {
    value: PropTypes.string,
    autoFocus: PropTypes.bool,
    onChange: PropTypes.func,
    onClear: PropTypes.func,
    onSearch: PropTypes.func,
    searchBtn: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    style: View.propTypes.style,
    placeholder: PropTypes.string,
    fake: PropTypes.func // 提供一个假输入框，点击的时候出发fake回调
};

SearchBar.defaultProps = {
    autoFocus: false,
    placeholder: '请输入内容',
    onChange: noop,
    onClear: noop,
    onSearch: noop,
    searchBtn: true
};

export default SearchBar;
