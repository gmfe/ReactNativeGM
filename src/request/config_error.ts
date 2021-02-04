// import { getLocale } from '@gm-common/locales';
import _ from 'lodash';
import {
  getErrorMessage,
  platform,
  requestUrl,
  isProduction,
  formatToResponse,
  report,
} from './util';
import { AxiosResponse } from 'axios';
import { instance } from './request';
import { ErrorCallback } from './types';

function wrap(
  response: AxiosResponse,
  errorCallback: ErrorCallback,
  msg?: string,
): AxiosResponse {
  const { headers } = response.config;
  const wrapRes = wrapErrorResponse(response);
  const {
    data: { code },
  } = wrapRes;
  const sucCode = headers['X-Success-Code'].split(',');

  let message = msg || '未知错误';

  // 如果错误了
  if (_.isNaN(code) || !sucCode.includes(code + '')) {
    if (code) {
      message = `未知错误: ${code}`;
    }

    errorCallback(message, wrapRes);

    throw new Error(message);
  }

  return response;
}

function wrapErrorResponse(response: AxiosResponse) {
  const json = formatToResponse(response);

  return {
    ...response,
    data: json,
  };
}

function configError(errorCallback: ErrorCallback): void {
  instance.interceptors.response.use(
    (response) => {
      try {
        wrap(response, errorCallback);
      } catch (error) {
        // 要转错误
        return Promise.reject(error);
      }

      return response;
    },
    (error) => {
      // 上报前端连接超时的具体网络时间信息
      if (isProduction && error.message && error.message.includes('timeout')) {
        const { url, headers, params } = error.config;
        // 当前被超时终止的请求信息
        const data = {
          url,
          headers,
          params: JSON.stringify(params),
        };
        report(requestUrl + platform, data);
      }
      const message = getErrorMessage(error);

      if (error.response) {
        try {
          wrap(error.response, errorCallback, message);
        } catch (error) {
          return Promise.reject(error);
        }

        // 要转成功
        return error.response;
      } else {
        errorCallback(message);
        return Promise.reject(error);
      }
    },
  );
}

export default configError;
