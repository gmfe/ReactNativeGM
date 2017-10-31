import StyleSheet from './style_sheet';
import V from './variable';

// 方便快速构建UI, 不拆文件了，方便编辑器自动完成提示
const Styles = {
    // bg
    bgDefault: {
        backgroundColor: V.bgDefault
    },
    bgWhite: {
        backgroundColor: V.bgWhite
    },

    // text
    textWhite: {
        color: V.whiteColor
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
    textPrice: {
        color: V.priceColor
    },

    textSmall: {
        fontSize: V.fontSize12
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
        fontSize: V.fontSize14,
        color: V.defaultColor
    },

    border: {
        borderColor: V.borderColor,
        borderWidth: StyleSheet.hairlineWidth
    },
    borderLeft: {
        borderLeftColor: V.borderColor,
        borderLeftWidth: StyleSheet.hairlineWidth
    },
    borderTop: {
        borderTopColor: V.borderColor,
        borderTopWidth: StyleSheet.hairlineWidth
    },
    borderRight: {
        borderRightColor: V.borderColor,
        borderRightWidth: StyleSheet.hairlineWidth
    },
    borderBottom: {
        borderBottomColor: V.borderColor,
        borderBottomWidth: StyleSheet.hairlineWidth
    },

    positionAbsolute: {
        position: 'absolute'
    },
    positionRelative: {
        position: 'relative'
    },

    overflowVisible: {
        overflow: 'visible'
    },
    overflowHidden: {
        overflow: 'hidden'
    },

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


    // gap
    padding0: {
        padding: V.gap0
    },
    padding5: {
        padding: V.gap5
    },
    padding10: {
        padding: V.gap10
    },
    padding15: {
        padding: V.gap15
    },

    paddingLeft0: {
        paddingLeft: V.gap0
    },
    paddingLeft5: {
        paddingLeft: V.gap5
    },
    paddingLeft10: {
        paddingLeft: V.gap10
    },
    paddingLeft15: {
        paddingLeft: V.gap15
    },

    paddingRight0: {
        paddingRight: V.gap0
    },
    paddingRight5: {
        paddingRight: V.gap5
    },
    paddingRight10: {
        paddingRight: V.gap10
    },
    paddingRight15: {
        paddingRight: V.gap15
    },

    paddingTop0: {
        paddingTop: V.gap0
    },
    paddingTop5: {
        paddingTop: V.gap5
    },
    paddingTop10: {
        paddingTop: V.gap10
    },
    paddingTop15: {
        paddingTop: V.gap15
    },

    paddingBottom0: {
        paddingBottom: V.gap0
    },
    paddingBottom5: {
        paddingBottom: V.gap5
    },
    paddingBottom10: {
        paddingBottom: V.gap10
    },
    paddingBottom15: {
        paddingBottom: V.gap15
    },

    paddingVertical0: {
        paddingVertical: V.gap0
    },
    paddingVertical5: {
        paddingVertical: V.gap5
    },
    paddingVertical10: {
        paddingVertical: V.gap10
    },
    paddingVertical15: {
        paddingVertical: V.gap15
    },

    paddingHorizontal0: {
        paddingHorizontal: V.gap0
    },
    paddingHorizontal5: {
        paddingHorizontal: V.gap5
    },
    paddingHorizontal10: {
        paddingHorizontal: V.gap10
    },
    paddingHorizontal15: {
        paddingHorizontal: V.gap15
    },

    margin0: {
        margin: V.gap0
    },
    margin5: {
        margin: V.gap5
    },
    margin10: {
        margin: V.gap10
    },
    margin15: {
        margin: V.gap15
    },

    marginLeft0: {
        marginLeft: V.gap0
    },
    marginLeft5: {
        marginLeft: V.gap5
    },
    marginLeft10: {
        marginLeft: V.gap10
    },
    marginLeft15: {
        marginLeft: V.gap15
    },
    marginRight0: {
        marginRight: V.gap0
    },
    marginRight5: {
        marginRight: V.gap5
    },
    marginRight10: {
        marginRight: V.gap10
    },
    marginRight15: {
        marginRight: V.gap15
    },
    marginTop0: {
        marginTop: V.gap0
    },
    marginTop5: {
        marginTop: V.gap5
    },
    marginTop10: {
        marginTop: V.gap10
    },
    marginTop15: {
        marginTop: V.gap15
    },
    marginBottom0: {
        marginBottom: V.gap0
    },
    marginBottom5: {
        marginBottom: V.gap5
    },
    marginBottom10: {
        marginBottom: V.gap10
    },
    marginBottom15: {
        marginBottom: V.gap15
    },
    marginVertical0: {
        marginVertical: V.gap0
    },
    marginVertical5: {
        marginVertical: V.gap5
    },
    marginVertical10: {
        marginVertical: V.gap10
    },
    marginVertical15: {
        marginVertical: V.gap15
    },

    marginHorizontal0: {
        marginHorizontal: V.gap0
    },
    marginHorizontal5: {
        marginHorizontal: V.gap5
    },
    marginHorizontal10: {
        marginHorizontal: V.gap10
    },
    marginHorizontal15: {
        marginHorizontal: V.gap15
    },

    // mask
    mask: {
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)'
    },

    // input
    input: {
        color: V.defaultColor,
        fontSize: V.fontSize14,
        height: V.fontSize14 * V.baseLineHeight,
        lineHeight: V.fontSize14 * V.baseLineHeight,
        padding: 0
    }
};

export default StyleSheet.create(Styles);
