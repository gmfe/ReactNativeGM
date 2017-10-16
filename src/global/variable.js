import {Platform} from 'react-native';

export default {
    baseLineHeight: (Platform.OS === 'ios' ? 1.90 : 2),
    fontSize14: 14,
    fontSize12: 12,
    fontSize10: 10,

    // gap
    gap0: 0,
    gap5: 5,
    gap10: 10,
    gap15: 15,

    // base color
    defaultColor: '#555555',
    whiteColor: 'white',
    primaryColor: '#34BE66',
    primaryColorActive: '#02AF63',
    infoColor: '#25A0E0',
    warnColor: '#CE8585',
    warnColorActive: '#b17272',
    linkColor: '#61749B',
    descColor: '#A3A3A3',
    activeColor: '#ededed',
    priceColor: '#d36a29',

    // border
    borderColor: '#D5D5D5',

    // bg
    bgDefault: '#eaeaea',
    bgWhite: 'white',
    bgMask: 'rgba(0,0,0,.2)',

    statusHeight: (Platform.OS === 'ios' ? 20 : 0),
    headerHeight: (Platform.OS === 'ios' ? 58 : 50)
};
