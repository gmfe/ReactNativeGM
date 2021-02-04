import axios, { AxiosRequestConfig } from 'axios';
import { formatToResponse, requestTrim } from './util';
import { Response } from './types';

const instance = axios.create({
  timeout: 30000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Timeout': '30000',
    'X-Success-Code': '0',
  },
});

class RequestBase<Data> {
  private _config: AxiosRequestConfig;
  private _sucCode = [0];
  private _data = {};

  constructor(url: string, config?: AxiosRequestConfig) {
    this._config = {
      url,
      headers: {},
      ...config,
    };
  }

  public code(codes: number[]): RequestBase<Data> {
    this._sucCode = this._sucCode.concat(codes);
    this._config.headers['X-Success-Code'] = this._sucCode.join(',');
    return this;
  }

  public timeout(timeout: number): RequestBase<Data> {
    this._config.timeout = timeout;
    this._config.headers['X-Timeout'] = `${timeout}`;
    return this;
  }

  public data(data: { [key: string]: any }): RequestBase<Data> {
    // requestTrim 剔除前后多余空格
    this._data = JSON.stringify(requestTrim(data));
    return this;
  }

  public run(): Promise<Response<Data>> {
    this._config.data = this._data;
    this._config.method = 'post';
    return instance.request<Data>(this._config).then((res) => {
      // formatToResponse 不能再中间件做，中间件不更改数据
      const formatRes = formatToResponse<Data>(res);

      // log 在这里做，不能在 formatToResponse，因为它可能被调用多次
      console.groupCollapsed(`request ${res.config.url}`);
      console.log('code', formatRes.code);
      console.log('message.description', formatRes.message.description);
      console.log('message.detail', formatRes.message.detail);
      console.groupEnd();

      return formatRes;
    });
  }
}

function Request<Data>(url: string, config?: object) {
  return new RequestBase(url, config);
}

export { instance, Request };
