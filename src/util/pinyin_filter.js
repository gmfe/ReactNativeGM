import Pinyin from './pinyin.js'
import _ from 'lodash'

let pinyin = null

// 字符串匹配，中文首字母拼音匹配，字母小写匹配
const pinYinFilter = (list, filterText, what) => {
  if (!pinyin) {
    pinyin = new Pinyin()
  }

  what = what || (v => v)
  filterText = filterText.toLowerCase()

  const strMatch = []; const fcMatch = []; const flMatch = []

  _.each(list, v => {
    let w = what(v)
    if (!_.isString(w)) {
      w = ''
    }
    w = w.toLowerCase()

    // 不用算pinyin出来
    if (w.indexOf(filterText) > -1) {
      strMatch.push(v)
      return
    }

    // 全拼集合  WoMen
    const fullChars = pinyin.getFullChars(w)
    if (fullChars.toLowerCase().indexOf(filterText) > -1) {
      fcMatch.push(v)
      return
    }

    // 首字母集合
    const firstLetter = fullChars.replace(/[a-z]/g, '')
    if (firstLetter.indexOf(filterText) > -1) {
      flMatch.push(v)
    }
  })

  return strMatch.concat(fcMatch).concat(flMatch)
}

export default pinYinFilter
