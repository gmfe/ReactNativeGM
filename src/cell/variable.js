import G from '../global/variable'

export default {
  cellBg: '#ffffff',
  cellBorderColor: G.borderColor,
  cellGapV: G.gap12,
  cellGapH: G.gap12,
  cellHeight: 55,
  cellFontSize: G.fontSize14,
  cellTipsFontSize: 14,
  cellLabelWidth: 105,

  // unit((cellHeight - 2 * cellGapV) / cellFontSize)
  // 高度为44，减去上下padding的行高
  cellLineHeight: 44 - 20,
  // unit(20 / @cellFontSize, em),
  cellsMarginTop: 20
}
