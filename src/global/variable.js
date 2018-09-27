import { Platform } from 'react-native'

const variable = {
  n0: 0,
  n4: 4,
  n8: 8,
  n10: 10,
  n12: 12,
  n14: 14,
  n16: 16,
  n18: 18,
  n24: 24,
  n30: 30,

  // TODO
  statusHeight: (Platform.OS === 'ios' ? 20 : 0),
  headerHeight: (Platform.OS === 'ios' ? 58 : 50),

  // TODO
  baseLineHeight: (Platform.OS === 'ios' ? 1.90 : 2),

  // text color
  defaultColor: 'rgba(0, 0, 0, 0.9)',
  descColor: 'rgba(0, 0, 0, 0.6)',
  disabledColor: 'rgba(0, 0, 0, 0.3)',

  // color
  whiteColor: 'white',
  primaryColor: '#6cca28',
  primaryColorActive: '#6CCA28',
  warnColor: '#CE8585',
  warnColorActive: '#b17272',
  linkColor: '#586C94',
  redColor: '#f33',

  activeColor: '#ededed',
  placeholderColor: '#989898',

  // border
  borderColor: '#ededed',

  fontSize30: 30,
  fontSize24: 24,
  fontSize18: 18,
  fontSize16: 16,
  fontSize14: 14,
  fontSize12: 12,
  fontSize10: 10,
  fontSize8: 8,

  fontSizeH1: 14 * 2,
  fontSizeH2: 14 * 1.5,
  fontSizeH3: 14 * 1.17,
  fontSizeH4: 14,

  // gap
  gap0: 0,
  gap4: 4,
  gap8: 8,
  gap12: 12,
  gap14: 14,
  gap16: 16,

  // bg
  bgDefault: '#f4f4f4',
  bgWhite: 'white'
}

export default variable
