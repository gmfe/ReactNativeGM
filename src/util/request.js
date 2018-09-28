import param from './param.js'
import _ from 'lodash'
import RequestInterceptor from './request_interceptor'

const { fetch, FormData } = window

const setPromiseTimeout = function (promise, ms) {
  if (ms === false) {
    return promise
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('连接超时，请稍后重试'))
    }, ms)
    promise.then(resolve, reject)
  })
}

const processRequest = function (config) {
  return RequestInterceptor.interceptor.request(config)
}

const processResponse = function (promise, url, sucCode, config) {
  let response = null
  return setPromiseTimeout(promise, config.options.timeout).then(function (res) {
    response = res
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(new Error(`服务器错误 ${res.status} ${res.statusText}`))
  }).then((json) => {
    return RequestInterceptor.interceptor.response(json, config, response)
  }, (reason) => {
    return Promise.reject(RequestInterceptor.interceptor.responseError(reason, config))
  }).then(function (json) {
    if (sucCode.indexOf(json.code) > -1) {
      return json
    } else {
      console.log(`*** Request url: ${url}、code: ${json.code}、msg: ${json.msg}`)
      return Promise.reject(json.msg || '未知错误')
    }
  }).catch(function (reason) {
    // reason 有点复杂，各种实现，碰到一个解决一个吧
    if (toString.call(reason) === '[object Object]' && toString.call(reason.then) === '[object Function]') {
      return reason.catch(rea => {
        if (toString.call(rea) === '[object Error]') {
          console.warn('*** Request catch ' + rea)
          return Promise.reject(new Error('' + rea))
        }

        console.warn('*** Request catch ' + rea)
        // reason 是个对象。目前先给字符串。吧。后续有需要在扩展
        return Promise.reject(new Error('' + rea))
      })
    } else {
      console.warn('*** Request catch reason ' + reason)
      // reason 是个对象。目前先给字符串。吧。后续有需要在扩展
      return Promise.reject(new Error('' + reason))
    }
  })
}

const Request = function (url, options) {
  this._data = {}
  this.url = url
  this.sucCode = [0]
  this.options = Object.assign({
    timeout: 20000, // number or false
    method: 'get',
    headers: {
      'Accept': 'application/json'
    },
    credentials: 'same-origin' // 需要设置才能获取cookie
  }, options)
}
Request.prototype = {
  code: function (codes) {
    if (_.isArray(codes)) {
      this.sucCode = this.sucCode.concat(codes)
    } else {
      this.sucCode.push(codes)
    }
    return this
  },
  timeout: function (timeout) {
    Object.assign(this.options, {
      timeout
    })
    return this
  },
  data: function (_data) {
    // 过滤null  undefined 只Object 类型。
    this._data = Object.assign({}, _data)
    if (toString.call(this._data) === '[object Object]') {
      this._data = _.pickBy(this._data, value => {
        return value !== null && value !== undefined
      })
    }
    return this
  },
  json: function (_data) {
    this._data = JSON.stringify(_data)
    return this
  },
  _getConfig: function () {
    const t = this
    return {
      url: t.url,
      data: t._data,
      sucCode: t.sucCode,
      options: t.options
    }
  },
  _setConfig: function (d) {
    const t = this
    t.url = d.url
    t._data = d.data
    t.sucCode = d.sucCode
    t.options = d.options
  },
  _beforeRequest: function () {
    const t = this
    return processRequest(t._getConfig()).then(t._setConfig.bind(t))
  },
  get: function () {
    const t = this

    return t._beforeRequest().then(function () {
      const p = param(t._data)
      const newUrl = t.url + (p ? ((t.url.indexOf('?') > -1 ? '&' : '?') + p) : '')
      return processResponse(fetch(newUrl, t.options), t.url, t.sucCode, t._getConfig())
    })
  },
  post: function () {
    const t = this
    const data = t._data
    let body
    t.options.method = 'post'

    return t._beforeRequest().then(function () {
      // 兼容传[json string] [formData] 的情况,暂时这两种. 其他的看情况
      if (toString.call(data) === '[object Object]') {
        // 如果存在File，就用表单上传
        if (_.find(data, v => toString.call(v) === '[object File]')) {
          body = new FormData()
          for (var e in data) {
            body.append(e, data[e])
          }
        } else {
          // 否则 x-www-form-urlencoded。  和jquery的post一样
          t.options.headers = Object.assign({}, t.options.headers, {
            'Content-Type': 'application/x-www-form-urlencoded'
          })
          body = param(data)
        }
      } else {
        body = data
      }
      t.options.body = body
      return processResponse(fetch(t.url, t.options), t.url, t.sucCode, t._getConfig())
    })
  }
}

function RequestFactory (url, options) {
  return new Request(url, options)
}

export default RequestFactory
