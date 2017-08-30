import {createIconSet} from 'react-native-vector-icons';
import _ from 'lodash';

let glyphMap = {
    'mobile': 'e618',
    'hui': 'e62c',
    'wallet': 'e620',
    'rili': 'e635',
    'home': 'e613',
    'qianbi': 'e639',
    'fenxiang': 'e636',
    'home1': 'e619',
    'dianhua': 'e62f',
    'down': 'e61a',
    'edit': 'e621',
    'location': 'e614',
    'circle': 'e610',
    'xialajiantou': 'e60a',
    'close-no-circle': 'e61b',
    'password': 'e622',
    'chrome': 'e600',
    'key': 'e623',
    'angle-right': 'e612',
    'setting': 'e6b5',
    'warning': 'e601',
    'phone': 'e624',
    'mima': 'e6ec',
    'plus': 'e61c',
    'minus': 'e61d',
    'shangdian': 'e60d',
    'print': 'e6bb',
    'shucai': 'e62e',
    'cart': 'e615',
    'star': 'e605',
    'angle-left': 'e62a',
    'comments': 'e607',
    'info-circle': 'e602',
    'suini-baskets': 'e608',
    'success': 'e603',
    'lanya': 'e648',
    'menu': 'e606',
    'dingdan': 'e60c',
    'baicai': 'e609',
    'user': 'e616',
    'order': 'e617',
    'close': 'e604',
    'jiantouxia': 'e630',
    'telephone': 'e625',
    'up': 'e627',
    'angle-down': 'e629',
    'shangchuantupian': 'e62d',
    'solid-arrow-up': 'e628',
    'question': 'e633',
    'star-full': 'e60f',
    'solid-arrow-down': 'e62b',
    'order2': 'e626',
    'location1': 'e61e',
    'dagou': 'e632',
    'shangla': 'e60e',
    'wo': 'e60b',
    'shouqian-copy': 'e611',
    'add-circle': 'e61f',
    'dianhuabu': 'e638',
    'avatar': 'e731',
    'xunjia': 'e634',
    'shangjiantou': 'e631',
    'dianzicheng': 'e728',
    'renwu': 'e637',
    'category': 'e640',
    'angle-up':'e7de',
    'search':'e672'
};

_.each(glyphMap, (value, key) => {
    glyphMap[key] = parseInt(value, 16);
});

const IconFont = createIconSet(glyphMap, 'ifont', 'iconfont.ttf');


export {
    IconFont,
    glyphMap
};


