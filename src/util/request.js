import param from './param.js';
import format from './format.js';
import _ from 'underscore';
import RequestInterceptor from './request_interceptor';

var setPromiseTimeout = function (promise, ms) {
    if (ms === false) {
        return promise;
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('连接超时，请稍后重试');
        }, ms);
        promise.then(resolve, reject);
    });
};

var processRequest = function (config) {
    return RequestInterceptor.interceptor.request(config);
};

var processResponse = function (promise, url, sucCode, config) {
    let response = null;
    return setPromiseTimeout(promise, config.options.timeout).then(function (res) {
        response = res;
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(format(`服务器错误 ${res.status} ${res.statusText}`));
    }).then((json) => {
        return RequestInterceptor.interceptor.response(json, config, response);
    }, (reason) => {
        return Promise.reject(RequestInterceptor.interceptor.responseError(reason, config));
    }).then(function (json) {
        if (sucCode.indexOf(json.code) > -1) {
            return json;
        } else {
            console.log(`*** Request url: ${url}、code: ${json.code}、msg: ${json.msg}`);
            return Promise.reject(json.msg || '未知错误');
        }
    }).catch(function (reason) {
        // reason 有点复杂，各种实现，碰到一个解决一个吧
        if (toString.call(reason) === '[object Object]' && toString.call(reason.then) === '[object Function]') {
            return reason.catch(rea => {
                if (toString.call(rea) === '[object Error]') {
                    console.warn('*** Request catch ' + rea);
                    return Promise.reject('' + rea);
                }

                console.warn('*** Request catch ' + rea);
                // reason 是个对象。目前先给字符串。吧。后续有需要在扩展
                return Promise.reject('' + rea);
            });
        } else {
            console.warn('*** Request catch reason ' + reason);
            // reason 是个对象。目前先给字符串。吧。后续有需要在扩展
            return Promise.reject('' + reason);
        }
    });
};

var Request = function (url, options) {
    this._data = {};
    this.url = url;
    this.sucCode = [0];
    this.options = Object.assign({
        timeout: 20000, // number or false
        method: 'get',
        headers: {
            'Accept': 'application/json'
        },
        credentials: 'include' // 需要设置才能获取cookie
    }, options);
};
Request.prototype = {
    code: function (codes) {
        if (_.isArray(codes)) {
            this.sucCode = this.sucCode.concat(codes);
        } else {
            this.sucCode.push(codes);
        }
        return this;
    },
    timeout: function (timeout) {
        Object.assign(this.options, {
            timeout
        });
        return this;
    },
    data: function (_data) {
        // 过滤null  undefined 只Object 类型。
        this._data = Object.assign({}, _data);
        if (toString.call(this._data) === '[object Object]') {
            this._data = _.pick(this._data, value => {
                return value !== null && value !== undefined;
            });
        }
        return this;
    },
    json: function (_data) {
        this._data = JSON.stringify(_data);
        return this;
    },
    _getConfig: function () {
        var t = this;
        return {
            url: t.url,
            data: t._data,
            sucCode: t.sucCode,
            options: t.options
        };
    },
    _setConfig: function (d) {
        var t = this;
        t.url = d.url;
        t._data = d.data;
        t.sucCode = d.sucCode;
        t.options = d.options;
    },
    _beforeRequest: function () {
        var t = this;
        return processRequest(t._getConfig()).then(t._setConfig.bind(t));
    },
    get: function () {
        var t = this;

        return t._beforeRequest().then(function () {
            var p = param(t._data);
            var newUrl = t.url + (t.url.indexOf('?') > -1 ? '&' : '?') + p;
            return processResponse(fetch(newUrl, t.options), t.url, t.sucCode, t._getConfig());
        });
    },
    post: function () {
        var t = this;
        var data = t._data;
        var body;
        t.options.method = 'post';

        return t._beforeRequest().then(function () {
            // 兼容传[json string] [formData] 的情况,暂时这两种. 其他的看情况
            if (toString.call(data) === '[object Object]') {
                body = new FormData();
                for (var e in data) {
                    body.append(e, data[e]);
                }
            } else {
                body = data;
            }
            t.options.body = body;
            return processResponse(fetch(t.url, t.options), t.url, t.sucCode, t._getConfig());
        });
    }
};

var RequestFactory = function (url, options) {
    return new Request(url, options);
};


export default RequestFactory;
