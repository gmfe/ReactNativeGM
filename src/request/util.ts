import _ from 'lodash';
// import { getLocale } from '@gm-common/locales';
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { decode } from 'js-base64';
import { parseUrl, stringifyUrl } from 'query-string';

const platform = 'driver';

const isProduction = !__DEV__;

const requestUrl = '//trace.guanmai.cn/api/logs/request/';
const requestEnvUrl = '//trace.guanmai.cn/api/logs/environment/';
const accessTokenKey = 'ACCESS_TOKEN_KEY';
const authInfoKey = 'AUTH_INTERFACE_KEY';

function getErrorMessage(error: { [key: string]: any }): string {
  let message;
  if (error.response) {
    message = `${error.response.status} ${error.response.statusText}`;
  } else if (error.request) {
    if (error.message && error.message.includes('timeout')) {
      message = '连接超时';
    } else {
      message = '服务器错误';
    }
  } else {
    message = error.message;
  }

  return message;
}

function atob(s: string): any {
  if (!s) return null;
  try {
    // base64 -> utf-8
    return JSON.parse(decode(s));
  } catch (error) {
    console.warn(error.message);
    return null;
  }
}

function parseResponseHeaders(response: AxiosResponse) {
  const responseHeaders = response.headers;

  const result = (responseHeaders['grpc-message'] || '').split('|');
  const gRPCMessageDetail: string = atob(result.slice(1).join('|'));
  const gRPCMessage: string = result[0] || '';
  const gRPCStatus: number = +responseHeaders['grpc-status'];
  const isNaN = _.isNaN(gRPCStatus);

  return {
    gRPCMessageDetail,
    gRPCMessage,
    gRPCStatus: isNaN ? -1 : gRPCStatus,
  };
}
function formatToResponse<T>(response: AxiosResponse<T>) {
  const { gRPCMessageDetail, gRPCMessage, gRPCStatus } = parseResponseHeaders(
    response,
  );
  const data = response.data;

  return {
    code: +gRPCStatus,
    message: {
      description: gRPCMessage,
      detail: gRPCMessageDetail,
    },
    response: data,
  };
}

function tailRequestTrim(
  obj: { [key: string]: any },
  result: { [key: string]: any },
) {
  _.forEach(Object.entries(obj), ([n, v]) => {
    if (v instanceof Object && !_.isArray(v)) {
      result[n] = {};
      tailRequestTrim(v, result[n]);
    } else {
      result[n] = typeof v === 'string' ? v.trim() : v;
    }
  });

  return result;
}

function requestTrim(obj: { [key: string]: any }) {
  // 判断一下循环引用，如果有就抛错误
  JSON.stringify(obj);

  return tailRequestTrim(obj, {});
}

function report(url: string, data: any, options?: AxiosRequestConfig): void {
  if (!isProduction) {
    return;
  }

  // todo: 后续做
  // data.metaData = Object.assign({}, data.metaData, getMetaData())

  setTimeout(() => {
    doFetch(url, data, options);
  }, 10);

  options = options || {};
  try {
    axios({
      url: `${url}?v=${Math.random()}`,
      method: 'post',
      data: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'X-Guanmai-Request-Id': `${data.requestId}`,
        ...options.headers,
      },
      ...options,
    });
  } catch (err) {
    console.warn(err);
  }
}

function doFetch(url: string, data: any, options?: AxiosRequestConfig): void {
  options = options || {};
  // 可能 JSON.stringify 报错，try catch 下
  try {
    axios({
      url: getUrlRandom(url),
      method: 'post',
      data: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'X-Guanmai-Request-Id': `${data.requestId}`,
        ...options.headers,
      },
      ...options,
    });
  } catch (err) {
    console.warn(err);
  }
}

function getUrlRandom(url: string): string {
  const obj = parseUrl(url);
  obj.query.v = '' + Math.random();

  return stringifyUrl(obj);
}

export {
  formatToResponse,
  accessTokenKey,
  authInfoKey,
  requestUrl,
  requestEnvUrl,
  platform,
  isProduction,
  getErrorMessage,
  atob,
  requestTrim,
  report,
};
