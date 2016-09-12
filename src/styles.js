import StyleSheet from './style_sheet';
import V from './variable';

// 方便快速构建UI
const styles = StyleSheet.create({
    padding0: {
        padding: V.gap0
    },
    padding10: {
        padding: V.gap10
    },


    marginTop10: {
        marginTop: V.gap10
    },
    marginTop15: {
        marginTop: V.gap15
    },

    textPrimary: {
        color: V.primaryColor
    },
    textWarning: {
        color: V.warnColor
    },
    textDesc: {
        color: V.descColor
    },
    textLink: {
        color: V.linkColor
    },

    textLeft: {
        textAlign: 'left'
    },
    textRight: {
        textAlign: 'right'
    },
    textCenter: {
        textAlign: 'center'
    },

    text: {
        fontSize: V.baseFontSize,
        color: V.defaultColor
    },

    border: {
        borderColor: V.borderColor,
        borderWidth: StyleSheet.hairlineWidth,
        borderStyle: 'solid'
    },
    borderBottom: {
        borderBottomColor: V.borderColor,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderStyle: 'solid'
    },

    positionAbsolute: {
        position: 'absolute'
    },
    positionRelative: {
        position: 'relative'
    },

    /**
     * component
     */

    // flex
    flex: { // todo
        flex: 1
    },
    flexZero: {
        flex: 0
    },
    flexB1: {
        flex: -1
    },
    flexRow: {
        flexDirection: 'row'
    },
    flexColumn: {
        flexDirection: 'column'
    },
    flexRowReverse: {
        flexDirection: 'row-reverse'
    },
    flexColumnReverse: {
        flexDirection: 'column-reverse'
    },
    flexWrap: {
        flexWrap: 'wrap'
    },
    flexNoWrap: {
        flexWrap: 'nowrap'
    },
    flexJustifyStart: {
        justifyContent: 'flex-start'
    },
    flexJustifyEnd: {
        justifyContent: 'flex-end'
    },
    flexJustifyCenter: {
        justifyContent: 'center'
    },
    flexJustifyBetween: {
        justifyContent: 'space-between'
    },
    flexJustifyAround: {
        justifyContent: 'space-around'
    },
    flexAlignStart: {
        alignItems: 'flex-start'
    },
    flexAlignCenter: {
        alignItems: 'center'
    },
    flexAlignEnd: {
        alignItems: 'flex-end'
    },
    flexAlignStretch: {
        alignItems: 'stretch'
    },
    flexAlignSelfAuto: {
        alignSelf: 'auto'
    },
    flexAlignSelfStart: {
        alignSelf: 'flex-start'
    },
    flexAlignSelfEnd: {
        alignSelf: 'flex-end'
    },
    flexAlignSelfCenter: {
        alignSelf: 'center'
    },
    flexAlignSelfStretch: {
        alignSelf: 'stretch'
    },

});

export default styles;