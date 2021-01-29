import { createIconSet } from 'react-native-vector-icons';
import _ from 'lodash';
import glyph_map from './glyph_map';

_.each(glyph_map, (value, key) => {
  glyph_map[key] = parseInt(value, 16);
});

const IconFont = createIconSet(glyph_map, 'xfont', 'iconfont.ttf');

export default IconFont;
