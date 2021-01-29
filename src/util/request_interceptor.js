import _ from 'lodash'

const RequestInterceptor = (function () {
  let interceptors = [] // [{request: function(){}, response: function(){}, responseError: function(){}}]
  let id = 0

  return {
    add: function (interceptor) {
      interceptor.__id = id++
      interceptors.push(interceptor)
      return interceptor.__id
    },
    remove: function (interceptorId) {
      interceptors = _.filter(interceptors, function (value) {
        return value.__id !== interceptorId
      })
    },

    // 私有方法,谁用谁死
    interceptor: {
      request: function (config) {
        let promise = Promise.resolve(config)
        _.each(interceptors, function (value) {
          if (value.request) {
            promise = promise.then(function (_config) {
              // 如果request不按规范来,啥也不做. 则默认放回 config
              return value.request(_config) || config
            })
          }
        })

        return promise
      },
      response: function (json, config, res) {
        let promise = Promise.resolve(json)
        _.each(interceptors, function (value) {
          if (value.response) {
            promise = promise.then(function (json) {
              // 如果response不按规范来,啥也不做. 则默认放回json
              return value.response(json, config, res) || json
            })
          }
        })
        return promise
      },
      responseError: function (reason, config) {
        let promise = Promise.reject(reason)
        _.each(interceptors, function (value) {
          if (value.responseError) {
            promise = promise.catch(function (reason) {
              // 如果responseError不按规范来,啥也不做. reason
              return Promise.reject(value.responseError(reason, config) || reason)
            })
          }
        })

        return promise
      }
    }
  }
})()

export default RequestInterceptor
