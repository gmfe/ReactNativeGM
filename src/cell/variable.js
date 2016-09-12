import G from '../global/variable';

export default {
    cellBg: '#FFFFFF',
    cellBorderColor: G.borderColor,
    cellGapV: G.gap10,
    cellGapH: G.gap15,
    cellHeight: 44,
    cellFontSize: G.baseFontSize,
    cellTipsFontSize: 14,
    cellLabelWidth: 105,

    // unit((cellHeight - 2 * cellGapV) / cellFontSize)
    // 高度为44，减去上下padding的行高
    cellLineHeight: 44 - 20,
    // unit(20 / @cellFontSize, em),
    cellsMarginTop: 20,
};