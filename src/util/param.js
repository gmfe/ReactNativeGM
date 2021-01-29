import _ from 'lodash'

var param = function (obj) {
  // encodeURIComponent
  return _.map(obj, function (v, k) {
    return [encodeURIComponent(k), '=', encodeURIComponent(v)].join('')
  }).join('&').replace(/%20/g, '+')
}

export default param
