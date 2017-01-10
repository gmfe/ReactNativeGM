import {createIconSet} from 'react-native-vector-icons';
import _ from 'underscore';

const glyphMap = {
    circle: 'EA01',
    download: 'EA02',
    info: 'EA03',
    safe_success: 'EA04',
    safe_warn: 'EA05',
    success: 'EA06',
    success_circle: 'EA07',
    success_no_circle: 'EA08',
    waiting: 'EA09',
    waiting_circle: 'EA0A',
    warn: 'EA0B',
    info_circle: 'EA0C',
    cancel: 'EA0D',
    search: 'EA0E',
    clear: 'EA0F'
};

_.each(glyphMap, (value, key) => {
    glyphMap[key] = parseInt(value, 16);
});

let Weui = createIconSet(glyphMap, 'Weui', 'Weui.ttf');

export {
    Weui, glyphMap
};