import _ from 'lodash'

function format (str, data) {
  let result = str
  if (arguments.length < 2) {
    return result
  }

    result = result.replace(/\{([\d\w\.]+)\}/g, function (key) { // eslint-disable-line
    const keys = arguments[1].split('.')
    let r = null
    _.each(keys, function (value, index) {
      if (index) {
        r = r[value]
      } else {
        r = data[value]
      }
    })
    return r
  })

  return result
}

export default format
